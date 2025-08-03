import React from 'react';

const PaymentModeButton = ({ icon, label, active }) => (
    <button className={`payment-mode-btn ${active ? 'active' : ''}`} disabled>
        <span className="payment-icon">{icon}</span> {label}
    </button>
);

export default PaymentModeButton;