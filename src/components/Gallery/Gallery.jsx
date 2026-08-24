import React, { useState } from "react";
import { galleryImages } from "../../data/models";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2>Our Gallery</h2>
          <p>A showcase of our finest work and modeling highlights</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gallery-modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
