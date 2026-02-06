import React, { useState } from 'react';
import Contact from './Contact';
import './index.css';

// Define a type for app pages
type Page = 'home' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Optional: app-wide user state
  const [userAuthorized, setUserAuthorized] = useState<boolean>(false);

  // Function to handle login success from Contact component
  const handleAuthorize = () => {
    setUserAuthorized(true);
    setCurrentPage('contact');
  };

  return (
    <div>
      {/* Simple navigation */}
      <header style={{ padding: '1rem', textAlign: 'center' }}>
        <h1>My App</h1>
        <nav>
          <button
            onClick={() => setCurrentPage('home')}
            disabled={currentPage === 'home'}
            style={{ marginRight: '1rem' }}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            disabled={!userAuthorized}
          >
            Contact
          </button>
        </nav>
      </header>

      <main style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {currentPage === 'home' && (
          <div>
            <h2>Welcome!</h2>
            <p>Please enter the password to access contact info.</p>
          </div>
        )}

        {currentPage === 'contact' && (
          <Contact onAuthorize={handleAuthorize} />
        )}
      </main>
    </div>
  );
};

export default App;
