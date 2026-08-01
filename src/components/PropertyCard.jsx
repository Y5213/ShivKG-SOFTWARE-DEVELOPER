import React from 'react';
import { MapPin, BedDouble, Bath, Maximize, Heart, CheckCircle2, Star } from 'lucide-react';

export default function PropertyCard({ property, isFavorite, onToggleFavorite, onViewDetails }) {
  const {
    id,
    title,
    city,
    locality,
    price_display,
    listing_type,
    property_type,
    bhk,
    bathrooms,
    area_sqft,
    image_url,
    is_featured,
    is_verified,
    agent_name,
    agent_company
  } = property;

  return (
    <div className="property-card" onClick={() => onViewDetails(property)}>
      <div className="card-image-wrapper">
        <img src={image_url} alt={title} className="card-image" loading="lazy" />

        {/* Badges */}
        <div className="card-badges">
          <span className={`badge ${listing_type === 'buy' ? 'badge-buy' : 'badge-rent'}`}>
            {listing_type === 'buy' ? 'FOR SALE' : 'FOR RENT'}
          </span>
          {is_verified && (
            <span className="badge badge-verified" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <CheckCircle2 size={10} /> Verified
            </span>
          )}
          {is_featured && (
            <span className="badge badge-featured" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          className={`btn-favorite ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          title={isFavorite ? "Remove from Favorites" : "Save to Favorites"}
        >
          <Heart size={18} fill={isFavorite ? "#D70406" : "none"} color={isFavorite ? "#D70406" : "#64748b"} />
        </button>
      </div>

      <div className="card-body">
        <div className="card-price-row">
          <div className="card-price">{price_display}</div>
          <div className="card-rate">₹{Math.round(property.price / area_sqft).toLocaleString('en-IN')}/sqft</div>
        </div>

        <h3 className="card-title">{title}</h3>

        <div className="card-location">
          <MapPin size={14} color="#64748b" />
          <span>{locality}, {city}</span>
        </div>

        <div className="card-specs-row">
          <div className="spec-item">
            <BedDouble size={15} color="#D70406" />
            <span>{bhk} BHK</span>
          </div>
          <div className="spec-item">
            <Bath size={15} color="#D70406" />
            <span>{bathrooms} Bath</span>
          </div>
          <div className="spec-item">
            <Maximize size={15} color="#D70406" />
            <span>{area_sqft} sqft</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="agent-info">
            Listed by <span className="agent-name">{agent_name}</span>
          </div>
          <button 
            className="btn-contact-card"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(property);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
