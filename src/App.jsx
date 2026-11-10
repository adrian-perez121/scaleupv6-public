import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Agenda from './components/Agenda';
import Workshops from './components/Workshops';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import WorkshopLeads from './components/WorkshopLeads';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BackToTopButton from './components/BackToTopButton';
import ThemeToggleButton from './components/ThemeToggleButton';
import TimerWidget from './components/TimerWidget';
import VisibilityControl from './components/VisibilityControl';
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
  const [theme, setTheme] = useState('light');
  const [uiVisible, setUiVisible] = useState(true);
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

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUiToggle = () => {
    if (uiVisible) {
        // If we are hiding the UI, also close any active widgets
        setActiveWidget(null);
    }
    setUiVisible(!uiVisible);
  };
  
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
        {activeTab === 'agenda' && <Agenda onItemClick={handleItemClick} onOpenMap={openMap} />}
        {activeTab === 'workshops' && <Workshops onOpenMap={openMap} />}
        {activeTab === 'speakers' && <WorkshopLeads onItemClick={handleItemClick} />}
      </main>
      <Footer />
      <Modal item={selectedItem} onClose={handleCloseModal} />
      
      <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} visible={uiVisible} />
      <ThemeToggleButton onClick={toggleTheme} isDarkMode={theme === 'dark'} visible={uiVisible} />
      
      <TimerWidget 
        visible={uiVisible}
        isOpen={activeWidget === 'timer'}
        onToggle={(isOpen) => setActiveWidget(isOpen ? 'timer' : null)}
      />
      
      <VisibilityControl isVisible={uiVisible} onToggle={handleUiToggle} />
    </>
  );
};

export default App;
