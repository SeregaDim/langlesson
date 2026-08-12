import { useState } from 'react';
import './Sidebar.css';
import {Link, useLocation} from 'react-router-dom';
import MODULES from './sidebarModules';

// Здесь был массив обьектов теперь он в файле Sidebar.js который импортирован выше

export default function Sidebar({ isOpen, onClose }) {
  const [modules, setModules] = useState(MODULES);
  
  // текущий адрес страницы
  const location = useLocation();

  function toggleModule(idx) {
    setModules(prev =>
      prev.map((m, i) => i === idx ? { ...m, open: !m.open } : m)
    );
  }

  return (
    <>
      <div
        className={`sidebar-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>✕</button>


        <div className="sidebar-scroll">
          {modules.map((mod, idx) => (
            <div key={mod.name} className={`module${mod.open ? ' open' : ''}`}>

              {/* Заголовок раздела — кнопка */}
              <button className="module-toggle" onClick={() => toggleModule(idx)}>
                <div className="mod-icon" style={{ background: mod.iconBg }}>
                  {mod.icon}
                </div>
                <div className="mod-info">
                  <div className="mod-name">{mod.name}</div>
                  <div className="mod-sub">{mod.sub}</div>
                </div>
                <span className="mod-arrow">▶</span>
              </button>

              {/* Подпункты — ссылки */}
              <div className="module-topics">
                {mod.topics.map(t => (
                 <Link key={t.label} to={t.to} className={[ 'topic-link', t.done ? 'done' : '',
                                                            location.pathname === t.to ? 'active' : '', ]
                        .filter(Boolean)
                        .join(' ')
                      }
                      onClick={onClose}
                    >
                    <div className="tl-dot" />
                    {t.label}
                    {t.done && <span className="tl-check">✓</span>}
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="sidebar-foot">
          <div className="sf-label">Общий прогресс</div>
          <div className="sf-bar"><div className="sf-fill" /></div>
          <div className="sf-stats">Пройдено: <span>8 / 28</span> тем</div>
        </div>
      </aside>
    </>
  );
}