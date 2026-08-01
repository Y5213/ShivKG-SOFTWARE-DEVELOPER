import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export default function FilterSidebar({ 
  listingType,
  propertyType, 
  onPropertyTypeChange,
  bhk,
  onBhkChange,
  localities,
  selectedLocality,
  onLocalityChange,
  furnishing,
  onFurnishingChange,
  onResetFilters
}) {
  return (
    <aside className="filter-sidebar">
      <div className="sidebar-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={18} color="#D70406" />
          <span>Filters</span>
        </div>
        <button className="btn-reset" onClick={onResetFilters}>
          <RotateCcw size={13} style={{ display: 'inline', marginRight: '3px' }} />
          Reset All
        </button>
      </div>

      {/* Property Type */}
      <div className="filter-section">
        <h4 className="filter-section-title">Property Type</h4>
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

      {/* BHK Config */}
      <div className="filter-section">
        <h4 className="filter-section-title">BHK Configuration</h4>
        <div className="quick-bhk-chips" style={{ marginTop: 0 }}>
          {[
            { label: 'All', val: null },
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

      {/* Locality Filter */}
      <div className="filter-section">
        <h4 className="filter-section-title">Locality</h4>
        <select 
          className="field-select" 
          value={selectedLocality || ""} 
          onChange={(e) => onLocalityChange(e.target.value || null)}
        >
          <option value="">All Localities</option>
          {localities.map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Furnishing */}
      <div className="filter-section">
        <h4 className="filter-section-title">Furnishing Status</h4>
        <select 
          className="field-select"
          value={furnishing || "all"}
          onChange={(e) => onFurnishingChange(e.target.value === "all" ? null : e.target.value)}
        >
          <option value="all">Any Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

    </aside>
  );
}
