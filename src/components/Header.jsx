import React from 'react';

const Header = ({ globeIcon }) => (
    <header className="page-header">
        <div className="breadcrumbs">
            <p>Dashboard › Payment › <span>Create Challan</span></p>
        </div>
        <div className="translate-icon">
            <img src={globeIcon} alt="Translate" style={{ width: 20, height: 20 }} />
        </div>
        <div className="language-selector">
            <span>English</span>
        </div>
    </header>
);

export default Header;