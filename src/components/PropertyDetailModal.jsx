import React, { useState } from 'react';
import { X, MapPin, BedDouble, Bath, Maximize, Layers, ShieldCheck, Phone, Mail, CheckCircle2, User, Building, Heart } from 'lucide-react';
import EMICalculator from './EMICalculator';

export default function PropertyDetailModal({ property, onClose, isFavorite, onToggleFavorite }) {
  const [showPhone, setShowPhone] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '' });

  if (!property) return null;

  const galleryImages = property.gallery 
    ? property.gallery.split(',') 
    : [property.image_url];
  
  const amenitiesList = property.amenities 
    ? property.amenities.split(',').map(a => a.trim())
    : ["Parking", "Security", "Power Backup"];

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setCallbackSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className={`badge ${property.listing_type === 'buy' ? 'badge-buy' : 'badge-rent'}`} style={{ marginRight: '8px' }}>
              FOR {property.listing_type.toUpperCase()}
            </span>
            <span className="badge badge-verified">
              <ShieldCheck size={10} style={{ display: 'inline', marginRight: '2px' }} /> VERIFIED
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              className={`btn-favorite ${isFavorite ? 'active' : ''}`}
              style={{ position: 'static' }}
              onClick={() => onToggleFavorite(property.id)}
            >
              <Heart size={18} fill={isFavorite ? "#D70406" : "none"} color={isFavorite ? "#D70406" : "#64748b"} />
            </button>
            <button className="modal-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Title & Price */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                {property.title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.9rem' }}>
                <MapPin size={16} color="#D70406" />
                <span>{property.address}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D70406' }}>
                {property.price_display}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                @ ₹{Math.round(property.price / property.area_sqft).toLocaleString('en-IN')}/sqft
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="modal-gallery">
            <img src={property.image_url} alt={property.title} className="main-gallery-img" />
            <div className="sub-gallery-imgs">
              {galleryImages.slice(0, 2).map((imgUrl, i) => (
                <img key={i} src={imgUrl.trim()} alt={`Gallery ${i}`} className="sub-gallery-img" />
              ))}
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className="modal-specs-bar">
            <div className="modal-spec-box">
              <label>Bedrooms</label>
              <span>{property.bhk} BHK</span>
            </div>
            <div className="modal-spec-box">
              <label>Bathrooms</label>
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="modal-spec-box">
              <label>Super Area</label>
              <span>{property.area_sqft} sqft</span>
            </div>
            <div className="modal-spec-box">
              <label>Furnishing</label>
              <span>{property.furnishing}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Property Description</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.92rem' }}>
              {property.description}
            </p>
          </div>

          {/* Additional Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <div><strong style={{ fontSize: '0.8rem', color: '#64748b' }}>FLOOR:</strong> <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{property.floor}</div></div>
            <div><strong style={{ fontSize: '0.8rem', color: '#64748b' }}>POSSESSION:</strong> <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{property.possession_status}</div></div>
            <div><strong style={{ fontSize: '0.8rem', color: '#64748b' }}>PROPERTY TYPE:</strong> <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{property.property_type}</div></div>
            <div><strong style={{ fontSize: '0.8rem', color: '#64748b' }}>LOCALITY:</strong> <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{property.locality}</div></div>
          </div>

          {/* Amenities */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Amenities & Features</h3>
            <div className="amenities-grid">
              {amenitiesList.map((item, idx) => (
                <div key={idx} className="amenity-pill">
                  <CheckCircle2 size={15} color="#10b981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EMI Calculator (only for buy listings) */}
          {property.listing_type === 'buy' && (
            <EMICalculator initialPrice={property.price} />
          )}

          {/* Contact Agent Section */}
          <div className="contact-agent-card">
            <div className="agent-details-text">
              <h4>Listed by {property.agent_name}</h4>
              <p>{property.agent_company} • Verified MagicBricks Seller</p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {showPhone ? (
                <div style={{ background: 'white', color: '#0f172a', padding: '0.65rem 1.25rem', borderRadius: '8px', fontWeight: '800', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={18} color="#D70406" />
                  <span>{property.agent_phone}</span>
                </div>
              ) : (
                <button className="btn-reveal-phone" onClick={() => setShowPhone(true)}>
                  <Phone size={18} />
                  <span>Show Phone Number</span>
                </button>
              )}
            </div>
          </div>

          {/* Callback Lead Form */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Get Instant Callback</h4>
            {callbackSent ? (
              <div style={{ background: '#ecfdf5', color: '#065f46', padding: '1rem', borderRadius: '8px', textAlign: 'center', fontWeight: '700' }}>
                ✓ Thank you! The agent will call you back within 15 minutes.
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '0.75rem' }}>
                <input 
                  type="text" 
                  className="field-input" 
                  placeholder="Your Name" 
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                />
                <input 
                  type="tel" 
                  className="field-input" 
                  placeholder="Phone Number" 
                  required
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                />
                <input 
                  type="email" 
                  className="field-input" 
                  placeholder="Email Address" 
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                />
                <button className="btn-search" type="submit">
                  Request Callback
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
