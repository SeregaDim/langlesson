import { useState } from 'react';
import KernelArticle from './Linux/KernelArticle';
import './Articles.css';

const SECTIONS = [
  { label: 'Что такое ядро и дистрибутив — разница', content: <KernelArticle /> },
  { label: 'Семейства: Debian, Red Hat, Arch — родословная', content: <p>options article</p> },
  { label: 'Дистрибутивы: Ubuntu, Debian, Fedora, CentOS, Arch, Rocky', content: <p>Текст практики...</p> },
  { label: 'Как выбрать дистрибутив под задачу', content: <p>Текст практики...</p> },
  { label: 'Установка Ubuntu — разметка диска, GRUB, первый запуск', content: <p>Текст практики...</p> },
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
          <h2
            key={s.label}
            className={`tab${activeSection === i ? ' active' : ''}`}
            onClick={() => setActiveSection(i)}
          >
            {s.label}
          </h2>
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