import React, { useState } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';

export default function EMICalculator({ initialPrice }) {
  const [loanAmount, setLoanAmount] = useState(Math.round(initialPrice * 0.8)); // 80% loan
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% annual
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / (12 * 100);
    const n = tenureYears * 12;
    if (r === 0 || n === 0) return 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenureYears * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="emi-calc-box">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Calculator size={20} color="#D70406" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Home Loan EMI Calculator</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label className="field-label">Loan Amount (₹)</label>
          <input 
            type="number" 
            className="field-input"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            step={50000}
          />
          <input 
            type="range"
            min={1000000}
            max={initialPrice}
            step={100000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            style={{ width: '100%', marginTop: '0.5rem', accentColor: '#D70406' }}
          />
        </div>

        <div>
          <label className="field-label">Interest Rate (% p.a.)</label>
          <input 
            type="number" 
            className="field-input"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            step={0.1}
          />
          <input 
            type="range"
            min={6.5}
            max={12.0}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{ width: '100%', marginTop: '0.5rem', accentColor: '#D70406' }}
          />
        </div>

        <div>
          <label className="field-label">Tenure (Years)</label>
          <input 
            type="number" 
            className="field-input"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            min={1}
            max={30}
          />
          <input 
            type="range"
            min={5}
            max={30}
            step={1}
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            style={{ width: '100%', marginTop: '0.5rem', accentColor: '#D70406' }}
          />
        </div>
      </div>

      <div className="emi-result-row">
        <div>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Estimated Monthly EMI</div>
          <div className="emi-amount">₹ {monthlyEMI.toLocaleString('en-IN')} / mo</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.82rem', color: '#475569' }}>
          <div>Total Payable: <strong>₹ {Math.round(totalPayment).toLocaleString('en-IN')}</strong></div>
          <div>Total Interest: <strong>₹ {Math.round(totalInterest).toLocaleString('en-IN')}</strong></div>
        </div>
      </div>
    </div>
  );
}
