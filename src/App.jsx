import React, { useState } from 'react';
import Upload from './components/upload';
import Gallery from './components/Gallery';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
  <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Image Gallery</h1>
    <Upload onUpload={() => setRefresh(!refresh)} />
    <Gallery key={refresh} />
  </div>
);

}

export default App;
