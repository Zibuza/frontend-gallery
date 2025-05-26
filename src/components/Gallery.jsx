import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios.get('https://backend-gallery.vercel.app/api/images')
      .then(res => setImages(res.data));
  };

  const deleteImage = id => {
    axios.delete(`https://backend-gallery.vercel.app/api/images/${id}`).then(() => fetchImages());
  };

  useEffect(fetchImages, []);

  return (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
    {images.map(image => (
      <div 
        key={image._id} 
        style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '10px', 
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)', 
          textAlign: 'center',
          width: '220px',
        }}
      >
        <img 
          src={image.url} 
          alt="" 
          style={{ 
            width: '200px', 
            height: '150px', 
            objectFit: 'cover', 
            borderRadius: '6px' 
          }} 
        />
        <button
          onClick={() => deleteImage(image._id)}
          style={{
            marginTop: '10px',
            backgroundColor: '#ff4d4f',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

}

export default Gallery;
