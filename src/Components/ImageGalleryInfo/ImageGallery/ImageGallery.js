import ImageGalleryItem from './ImageGalleryItem';
export default function ImageGallery({ galleryData }) {
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
            />
          );
        })}
    </ul>
  );
}
