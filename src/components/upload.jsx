import React from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function Upload({ onUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      axios.post('http://localhost:5000/api/images/upload', formData)
        .then(res => onUpload(res.data));
    }
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px' }}>
      <input {...getInputProps()} />
      <p>Drag & drop image here, or click to select</p>
    </div>
  );
}

export default Upload;
