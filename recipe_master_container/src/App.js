import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">RM</span> RecipeMaster Pro
            </div>
            {/* Removed template button from navbar */}
          </div>
        </div>
      </nav>

      <MainContainer>
        {/* Hero content is now a child of MainContainer */}
        <div className="container">
          <div className="hero">
            <div className="subtitle">Welcome to</div>
            
            <h1 className="title">RecipeMaster Pro</h1>
            
            <div className="description">
              Your ultimate companion for recipe creation, ingredient tracking, meal planning, and nutritional analysis.
            </div>
            {/* Removed generic button from hero */}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;