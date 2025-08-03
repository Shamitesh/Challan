
import React from 'react';
import PaymentModeButton from './PaymentModeButton';

const PaymentModes = ({ icons }) => (
    <section className="payment-modes-section">
        <h2>
            Payment Modes 
            <span className="required-star">
                <img src={icons.ellipseIcon} alt="*" style={{ width: 7, height: 7 }} />
            </span>
        </h2>
        <div className="payment-modes-container">
            <PaymentModeButton
                icon={<img src={icons.epaymentIcon} alt="e-payment" style={{ width: 20, height: 20 }} />}
                label="E-Payment"
                active={true} // Hardcoded to active
            />
            <PaymentModeButton
                icon={<img src={icons.overthecounterIcon} alt="over the counter" style={{ width: 20, height: 16 }} />}
                label="Over The Counter"
            />
            <PaymentModeButton
                icon={<img src={icons.globeIcon} alt="NEFT/RTGS icon" style={{ width: 20, height: 20 }} />}
                label="NEFT/RTGS"
            />
        </div>
    </section>
);

export default PaymentModes;