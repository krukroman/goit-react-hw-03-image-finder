export default function ImageGalleryItem({
  previewUrl,
  originUrl,
  tags,
  onClick,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={onClick}
        src={previewUrl}
        data-source={originUrl}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
