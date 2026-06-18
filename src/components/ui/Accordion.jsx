import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        className={`accordion-header${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {title}
        <span className="accordion-arrow">▶</span>
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}
