import { useState } from 'react';
import './Sidebar.css';
import {Link, useLocation} from 'react-router-dom';

const MODULES = [
  {
    icon: '🐍',
    iconBg: 'rgba(34,197,94,0.12)',
    name: '1) Знакомство с Linux',
    sub: '',
    topics: [
      { label: 'Что такое ядро и дистрибутив — разница', to: '/articles', done: true },
      { label: 'Семейства: Debian, Red Hat, Arch — родословная', to: '/a', done: true },
      { label: 'Дистрибутивы: Ubuntu, Debian, Fedora, CentOS, Arch, Rocky', to: '/s', done: true },
      { label: 'Как выбрать дистрибутив под задачу', to: 'sd', done: true },
      { label: 'Установка Ubuntu — разметка диска, GRUB, первый запуск', to: 'rt', done: true },
    ],
  },
  {
    icon: '📦',
    iconBg: 'rgba(99,102,241,0.12)',
    name: '2) Устройство системы',
    topics: [
      { label: 'Списки (list)', to: '/dfg', done: true },
      { label: 'Словари (dict)', to: 'fgh', done: false },
      { label: 'Кортежи (tuple)', to: '/err', done: false },
    ],
  },
  {
    icon: '📦',
    iconBg: 'rgba(99,102,241,0.12)',
    name: '3) Терминал и bash',
    topics: [
      { label: 'Списки (list)', to: 'fws', done: true },
      { label: 'Словари (dict)', to: '/sqq', done: false },
      { label: 'Кортежи (tuple)', to: 'poo', done: false },
    ],
  },
  {
   icon:'📦',
   iconBg:'rgba(99,102,241,0.12)',
   name: '4) Пользователи и права',
   topics: [
    {label: 'Пользователи и группы: useradd, usermod, passwd', to: 'hh', done: 'true' },
    {label: '01', to: '/jkk', done: true},
    {label: '02', to: '/uio', done: true},
    {label: '03', to: 'vbb', done: true},
    {label: '04', to: '/fddc', done: true},
   ],
  }
];

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

        <div className="sidebar-head">
          <div className="sidebar-label">Карта языка</div>
          <div className="search-box">
            <span style={{ color: 'var(--muted)', fontSize: 14 }}>⌕</span>
            <input type="text" placeholder="Поиск темы..." />
          </div>
        </div>

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