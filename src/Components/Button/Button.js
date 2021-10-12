export default function Button({ title, onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
}
