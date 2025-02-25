import React, { useState } from "react";

const TourlyUIGalleryPage = () => {
  const images = [
    { src: "images/tourly/Andaman1.png", isLandscape: true },
    { src: "images/tourly/Andaman13.png", isLandscape: true },
    { src: "images/tourly/Andaman2.png", isLandscape: false },
    { src: "images/tourly/Andaman3.png", isLandscape: false },
    { src: "images/tourly/Andaman4.png", isLandscape: false },
    { src: "images/tourly/Andaman5.png", isLandscape: false },
    { src: "images/tourly/Andaman6.png", isLandscape: false },
    { src: "images/tourly/Andaman7.png", isLandscape: false },
    { src: "images/tourly/Andaman8.png", isLandscape: false },
    { src: "images/tourly/Andaman9.png", isLandscape: false },
    { src: "images/tourly/Andaman10.png", isLandscape: false },
    { src: "images/tourly/Andaman11.png", isLandscape: false },
    { src: "images/tourly/Andaman12.png", isLandscape: true },
    { src: "images/tourly/Andaman14.png", isLandscape: true },
    { src: "images/tourly/Andaman15.png", isLandscape: false },
  ];

  return (
    <div className="p-4 max-w-[900px] mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Tourly UI Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg ${image.isLandscape ? "col-span-4" : ""}`}
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourlyUIGalleryPage;