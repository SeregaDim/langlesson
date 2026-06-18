import { NavLink, Link } from 'react-router-dom';
import './Header.css';


const TOPICS = [
  { label: '🐍 Основы',            href: '/' },
  { label: '📦 Структуры данных',  href: '/python/data-structures' },
  { label: '🔄 ООП',               href: '/python/oop' },
  { label: '⚡ Функции',            href: '/python/functions' },
  { label: '📂 Файлы и IO',        href: '/python/files' },
  { label: '🌐 Модули',            href: '/python/modules' },
  { label: '🔧 Исключения',        href: '/python/exceptions' },
  { label: '🚀 Продвинутый',       href: '/python/advanced' },
];

export default function Header({ onBurgerClick, theme, setTheme }) {
  return (
    <header>
      <button className="burger-btn" onClick={onBurgerClick} aria-label="Открыть меню">
        <span /><span /><span />
      </button>

      <div className="logo"><Link to="/">Py<em>Learn</em></Link></div>

      <nav className="header-topics">
        {TOPICS.map(({ label, href }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `htopic${isActive ? ' active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
     <button
  className="theme-btn"
  onClick={() =>
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }
  aria-label="Переключить тему"
>
  {theme === 'dark' ? '🌙' : '☀️'}
</button>

      <div className="header-right">
        <div className="xp-badge">⭐ 1 240 XP</div>
        <div className="streak">🔥 7 дней</div>
        <button className="pro-btn">✦ PRO</button>
        <div className="user-btn">АИ</div>
      </div>
    </header>
  );
}