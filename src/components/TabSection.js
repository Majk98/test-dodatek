import React, { useState } from 'react';

const TabSection = () => {

  const [activeTab, setActiveTab] = useState('About');


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        <li 
          className={activeTab === 'About' ? 'active' : ''} 
          onClick={() => handleTabClick('About')}
        >
          O projektu 
        </li>
        <li 
          className={activeTab === 'HowItWorks' ? 'active' : ''} 
          onClick={() => handleTabClick('HowItWorks')}
        >
          Jak to funguje 
        </li>
        <li 
          className={activeTab === 'Tips' ? 'active' : ''} 
          onClick={() => handleTabClick('Tips')}
        >
          Tipy a triky 
        </li>
        <li 
          className={activeTab === 'Contact' ? 'active' : ''} 
          onClick={() => handleTabClick('Contact')}
        >
          Kontakt 
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'About' && (
          <div>
            <h3>O projektu</h3>
            <p>
              Tato stránka slouží k přípravě na přijímací testy. Nabízíme různé typy testů, které ti pomohou zlepšit výsledky.
             
            </p>
          </div>
        )}
        {activeTab === 'HowItWorks' && (
          <div>
            <h3>Jak to funguje</h3>
            <p>
              Naše testy simulují reálné podmínky a poskytují okamžitou zpětnou vazbu a podrobnou analýzu výsledků.
             
            </p>
          </div>
        )}
        {activeTab === 'Tips' && (
          <div>
            <h3>Tipy a triky</h3>
            <p>
              Získej osvědčené rady, jak se efektivně připravit na testy a dosáhnout co nejlepších výsledků.
             
            </p>
          </div>
        )}
        {activeTab === 'Contact' && (
          <div>
            <h3>Kontakt</h3>
            <p>
              Máš dotazy nebo potřebuješ pomoc? Neváhej nás kontaktovat prostřednictvím kontaktního formuláře.
              
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
