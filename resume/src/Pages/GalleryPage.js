import React, { useState } from "react";


const GalleryPage = (props) => {

    const [modalImages, setModalImages] = useState([]);
        const [isOpen, setIsOpen] = useState(false);
    
        const openModal = (images) => {
            setModalImages(images);
            setIsOpen(true);
        };
    
        const closeModal = () => setIsOpen(false);

        
  return (
    <div>
      <h1>Gallery Page</h1>
      <div>
        <img src="image1.jpg" alt="Gallery 1" width="150" />
        <img src="image2.jpg" alt="Gallery 2" width="150" />
        <img src="image3.jpg" alt="Gallery 3" width="150" />
      </div>
    </div>
  );
};

export default GalleryPage;
