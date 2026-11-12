import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Agenda from './components/Agenda';
import Workshops from './components/Workshops';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import WorkshopLeads from './components/WorkshopLeads';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BackToTopButton from './components/BackToTopButton';
import TimerWidget from './components/TimerWidget';
import SectionTabs from './components/SectionTabs';
import openMapWindow from './utils/openMapWindow';

const TABS = [
  { id: 'keynote-speakers', label: 'Keynote Speakers' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'speakers', label: 'Workshop Leads & Faculty' },
];

// The active tab lives in the URL hash so links like /#agenda and the
// browser back button keep working.
const tabFromHash = () => {
  const id = window.location.hash.slice(1);
  return TABS.some(tab => tab.id === id) ? id : TABS[0].id;
};

const App = () => {
  const [activeTab, setActiveTab] = useState(tabFromHash);
  const tabsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme] = useState('light');
  const [activeWidget, setActiveWidget] = useState(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => setActiveTab(tabFromHash());
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setActiveTab(id);
    window.history.pushState(null, '', `#${id}`);
    // If the user has scrolled past the header, bring the new tab's content
    // into view from the top instead of leaving them mid-page.
    const tabsTop = tabsRef.current?.offsetTop ?? 0;
    if (window.scrollY > tabsTop) {
      window.scrollTo({ top: tabsTop, behavior: 'smooth' });
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Top of the Pokédex (the tab bar), used by the back-to-top button
  const getPokedexTop = () => tabsRef.current?.offsetTop ?? 0;

  const openMap = (e) => {
    e.stopPropagation();
    openMapWindow(theme);
  };

  return (
    <>
      <Header />
      <div ref={tabsRef} className="section-tabs-anchor">
        <SectionTabs tabs={TABS} activeId={activeTab} onChange={handleTabChange} />
      </div>
      <main
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="section-tab-panel"
        key={activeTab}
      >
        {activeTab === 'keynote-speakers' && <KeynoteSpeakers onItemClick={handleItemClick} onOpenMap={openMap} />}
        {activeTab === 'agenda' && <Agenda onOpenMap={openMap} />}
        {activeTab === 'workshops' && <Workshops onOpenMap={openMap} onItemClick={handleItemClick} />}
        {activeTab === 'speakers' && <WorkshopLeads onItemClick={handleItemClick} />}
      </main>
      <Footer />
      <Modal item={selectedItem} onClose={handleCloseModal} />
      
      <BackToTopButton
        getTop={getPokedexTop}
        onClick={() => window.scrollTo({ top: getPokedexTop(), behavior: 'smooth' })}
      />

      <TimerWidget
        isOpen={activeWidget === 'timer'}
        onToggle={(isOpen) => setActiveWidget(isOpen ? 'timer' : null)}
      />
    </>
  );
};

export default App;
