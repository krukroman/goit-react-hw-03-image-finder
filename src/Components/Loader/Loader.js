import Spinner from 'react-loader-spinner';
import { createPortal } from 'react-dom';
const portal = document.getElementById('portal');

export default function Loader() {
  return createPortal(
    <div className="Overlay">
      <Spinner
        type="Grid"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>,
    portal,
  );
}
