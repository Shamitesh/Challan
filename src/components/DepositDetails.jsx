// src/components/DepositDetails.js

import React from 'react';

const DepositDetails = () => (
    <section className="deposit-details">
        <h2>Details of Deposit</h2>
        <table className="deposit-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Tax (₹)</th>
                    <th>Interest (₹)</th>
                    <th>Penalty (₹)</th>
                    <th>Fees (₹)</th>
                    <th>Other (₹)</th>
                    <th>Total (₹)</th>
                </tr>
            </thead>
            <tbody>
                {/* Row 1 */}
                <tr>
                    <td>CGST(0005)</td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="0" readOnly className="total-field" /></td>
                </tr>
                {/* Row 2 */}
                <tr>
                    <td>IGST(0008)</td>
                    <td><input type="text" value="159" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="1,159" readOnly className="total-field" /></td>
                </tr>
                {/* Row 3 */}
                <tr>
                    <td>CESS(0009)</td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="0" readOnly className="total-field" /></td>
                </tr>
                {/* Row 4 */}
                <tr>
                    <td>Madhya Pradesh SGST(0006)</td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="0" readOnly /></td>
                    <td><input type="text" value="" readOnly /></td>
                    <td><input type="text" value="0" readOnly className="total-field" /></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2" className="total-label">Total Challan Amount:</td>
                    <td colSpan="5" className="total-amount-value">₹ 1,159 /-</td>
                </tr>
                <tr>
                    <td colSpan="2" className="total-label">Total Challan Amount (In Words):</td>
                    <td colSpan="5" className="total-words-value">Rupees One Thousand One Hundred Fifty-Nine Only</td>
                </tr>
            </tfoot>
        </table>
    </section>
);

export default DepositDetails;