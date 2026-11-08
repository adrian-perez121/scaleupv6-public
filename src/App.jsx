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
import DateWidget from './components/DateWidget';
import VisibilityControl from './components/VisibilityControl';
import openMapWindow from './utils/openMapWindow';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState('light');
  const [uiVisible, setUiVisible] = useState(true);
  const [activeWidget, setActiveWidget] = useState(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

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
      <main>
        <KeynoteSpeakers onItemClick={handleItemClick} onOpenMap={openMap} />
        <Agenda onItemClick={handleItemClick} onOpenMap={openMap} />
        <Workshops onOpenMap={openMap} />
        <WorkshopLeads onItemClick={handleItemClick} />
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
      
      <DateWidget 
        visible={uiVisible}
        isOpen={activeWidget === 'date'}
        onToggle={(isOpen) => setActiveWidget(isOpen ? 'date' : null)}
      />
      
      <VisibilityControl isVisible={uiVisible} onToggle={handleUiToggle} />
    </>
  );
};

export default App;
