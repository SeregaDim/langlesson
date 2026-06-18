import { useState } from 'react';
import FirstData from './first_teme';
import './Articles.css';

const SECTIONS = [
  { label: 'Введение', content: <FirstData /> },
  { label: 'Основы', content: <p>options article</p> },
  { label: 'Практика', content: <p>Текст практики...</p> },
];

let title = '📦 Структуры данных · Тема 3 из 5';

function Articles() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <article className="article">
      <div className="topic-tag">{title}</div>
      <h1>Обзор операционных систем на базе Linux</h1>
      <p>Главный абзац — всегда виден</p>

      {/* Переключатели разделов */}
      <div className="section-tabs">
        {SECTIONS.map((s, i) => (
          <button
            key={s.label}
            className={`tab${activeSection === i ? ' active' : ''}`}
            onClick={() => setActiveSection(i)}
          >
            {s.label}
          </button>
        ))}
        
      </div>
      
       
      {/* Контент активного раздела */}
      <div className="section-content">
        {SECTIONS[activeSection].content}
      </div>

    </article>
  );
}

export default Articles;