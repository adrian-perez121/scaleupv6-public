import React, { useRef } from 'react';

// Pokédex-style tab bar: a lens and three lights sit above a stepped black
// line, and the tabs hang from that line. Follows the WAI-ARIA tabs pattern:
// arrow keys / Home / End move between tabs, and each tab controls the panel
// with id `panel-<id>`.
const SectionTabs = ({ tabs, activeId, onChange }) => {
  const tabRefs = useRef({});

  const focusTab = (index) => {
    const tab = tabs[(index + tabs.length) % tabs.length];
    onChange(tab.id);
    tabRefs.current[tab.id]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') focusTab(index + 1);
    else if (e.key === 'ArrowLeft') focusTab(index - 1);
    else if (e.key === 'Home') focusTab(0);
    else if (e.key === 'End') focusTab(tabs.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <nav className="section-tabs" aria-label="Event sections">
      <div className="pokedex">
        <div className="pokedex-lens-zone" aria-hidden="true">
          <span className="pokedex-lens" />
        </div>
        <svg className="pokedex-slope" viewBox="0 0 32 80" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="78.5" x2="32" y2="38.5" />
        </svg>
        <div className="pokedex-lights" aria-hidden="true">
          <span className="pokedex-light pokedex-light-red" />
          <span className="pokedex-light pokedex-light-yellow" />
          <span className="pokedex-light pokedex-light-green" />
        </div>
        <div className="pokedex-tabs" role="tablist">
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                id={`tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`section-tab${isActive ? ' is-active' : ''}`}
                onClick={() => onChange(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SectionTabs;
