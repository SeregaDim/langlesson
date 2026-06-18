import './Button.css';

export default function Button({ children, variant = 'default', onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
