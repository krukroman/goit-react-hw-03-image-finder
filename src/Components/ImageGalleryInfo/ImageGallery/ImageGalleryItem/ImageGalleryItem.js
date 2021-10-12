export default function ImageGalleryItem({
  previewUrl,
  originUrl,
  tags,
  onClick,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={previewUrl}
        data-source={originUrl}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={e => onClick({ originUrl, tags })}
      />
    </li>
  );
}
