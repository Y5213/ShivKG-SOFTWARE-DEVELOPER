import React from 'react';
import { Search, MapPin, IndianRupee, Home, Building } from 'lucide-react';

export default function HeroSearch({ 
  listingType, 
  onListingTypeChange,
  city, 
  onCityChange,
  budget,
  onBudgetChange,
  bhk,
  onBhkChange,
  propertyType,
  onPropertyTypeChange,
  searchTerm,
  onSearchTermChange,
  onSearchExecute
}) {

  const buyBudgetOptions = [
    { label: "Any Budget", value: "all" },
    { label: "Under ₹ 1 Cr", min: 0, max: 10000000 },
    { label: "₹ 1 Cr - ₹ 3 Cr", min: 10000000, max: 30000000 },
    { label: "₹ 3 Cr - ₹ 6 Cr", min: 30000000, max: 60000000 },
    { label: "Above ₹ 6 Cr", min: 60000000, max: 200000000 },
  ];

  const rentBudgetOptions = [
    { label: "Any Rent", value: "all" },
    { label: "Under ₹ 30,000 / mo", min: 0, max: 30000 },
    { label: "₹ 30k - ₹ 60k / mo", min: 30000, max: 60000 },
    { label: "₹ 60k - ₹ 1 Lakh / mo", min: 60000, max: 100000 },
    { label: "Above ₹ 1 Lakh / mo", min: 100000, max: 500000 },
  ];

  const budgetOptions = listingType === 'buy' ? buyBudgetOptions : rentBudgetOptions;

  const handleBudgetSelect = (e) => {
    const selectedIdx = e.target.value;
    if (selectedIdx === "all") {
      onBudgetChange({ min: null, max: null, label: "Any Budget" });
    } else {
      const opt = budgetOptions[selectedIdx];
      onBudgetChange({ min: opt.min, max: opt.max, label: opt.label });
    }
  };

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">
          Find Your Dream Home in {city}
        </h1>
        <p className="hero-subtitle">
          Explore top verified residential properties for Buy & Rent across prime Indian locations
        </p>

        <div className="search-box-card">
          {/* Buy / Rent Switch Tabs */}
          <div className="search-type-tabs">
            <button 
              className={`tab-btn ${listingType === 'buy' ? 'active' : ''}`}
              onClick={() => onListingTypeChange('buy')}
            >
              Buy Property
            </button>
            <button 
              className={`tab-btn ${listingType === 'rent' ? 'active' : ''}`}
              onClick={() => onListingTypeChange('rent')}
            >
              Rent Property
            </button>
          </div>

          {/* Search Input Grid */}
          <div className="search-fields-grid">
            {/* City */}
            <div className="field-group">
              <label className="field-label">City</label>
              <select 
                className="field-select"
                value={city}
                onChange={(e) => onCityChange(e.target.value)}
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            {/* Locality Search */}
            <div className="field-group">
              <label className="field-label">Locality / Keyword</label>
              <input 
                type="text" 
                className="field-input" 
                placeholder="e.g. Indiranagar, Powai, Bandra..."
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
              />
            </div>

            {/* Budget Range Option */}
            <div className="field-group">
              <label className="field-label">Budget Range</label>
              <select className="field-select" onChange={handleBudgetSelect}>
                {budgetOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value ? opt.value : idx}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="field-group">
              <label className="field-label">Property Type</label>
              <select 
                className="field-select"
                value={propertyType}
                onChange={(e) => onPropertyTypeChange(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="field-group">
              <label className="field-label" style={{ opacity: 0 }}>Action</label>
              <button className="btn-search" onClick={onSearchExecute}>
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Quick BHK Chips */}
          <div className="quick-bhk-chips">
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b' }}>BHK Configuration:</span>
            {[
              { label: 'All BHKs', val: null },
              { label: '1 BHK', val: 1 },
              { label: '2 BHK', val: 2 },
              { label: '3 BHK', val: 3 },
              { label: '4+ BHK', val: 4 }
            ].map((chip) => (
              <button 
                key={chip.label}
                className={`bhk-chip ${bhk === chip.val ? 'active' : ''}`}
                onClick={() => onBhkChange(chip.val)}
              >
                {chip.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
