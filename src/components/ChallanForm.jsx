import React from 'react';
import './ChallanForm.css';

import Header from './Header';
import ReasonForChallan from './ReasonSection';
import DepositDetails from './DepositDetails';
import PaymentModes from './PaymentModes';
import FormActions from './FormAction';

import globeIcon from "../assets/globe.png";
import overthecounterIcon from "../assets/overthecounter.png";
import epaymentIcon from "../assets/e-payment.png";
import ellipseIcon from "../assets/Ellipse 2590.png";

const ChallanForm = () => {
    return (
        <div className="page-container">
            <h4>Demo</h4>
            <Header globeIcon={globeIcon} />

            <main className="challan-card">
                <ReasonForChallan />
                
                <DepositDetails />
                
                <PaymentModes 
                    icons={{ epaymentIcon, overthecounterIcon, globeIcon, ellipseIcon }}
                />

                <FormActions />
            </main>
        </div>
    );
};

export default ChallanForm;