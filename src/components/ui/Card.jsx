import './Card.css';

export default function Card({ icon, name, sub, onClick }) {
  return (
    <div className="tcard" onClick={onClick}>
      <div className="tc-icon">{icon}</div>
      <div className="tc-name">{name}</div>
      <div className="tc-sub">{sub}</div>
    </div>
  );
}
