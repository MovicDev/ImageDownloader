import React from 'react';

const ImageDownload = () => {
  const imageUrl = 'https://media.gettyimages.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs='; 
  const imageName = 'downloaded-image.jpg'; 

  const downloadImage = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <img src={imageUrl} alt="Downloadable" style={{ width: '300px' }} />
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
};

export default ImageDownload;
