export default function Button({ className, children, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
