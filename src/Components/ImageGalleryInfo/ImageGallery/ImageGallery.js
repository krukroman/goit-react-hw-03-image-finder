import ImageGalleryItem from './ImageGalleryItem';
export default function ImageGallery({ galleryData, onClick }) {
  return (
    <ul className="ImageGallery">
      {galleryData &&
        galleryData.map(({ webformatURL, largeImageURL, tags }, index) => {
          return (
            <ImageGalleryItem
              key={index}
              previewUrl={webformatURL}
              originUrl={largeImageURL}
              tags={tags}
              onClick={onClick}
            />
          );
        })}
    </ul>
  );
}
