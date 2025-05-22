import React from 'react';
import './MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component to provide the basic layout structure for the application.
 * It includes an internal header, a content area for children, and an internal footer.
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the content area.
 * @returns {JSX.Element} The MainContainer component.
 */
function MainContainer({ children }) {
  return (
    <div className="main-container">
      <header className="main-container-header">
        <div className="container">
          RecipeMaster Pro Internal Header
        </div>
      </header>
      <main className="main-content-area">
        {children}
      </main>
      <footer className="main-container-footer">
        <div className="container">
          © 2023 RecipeMaster Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MainContainer;
