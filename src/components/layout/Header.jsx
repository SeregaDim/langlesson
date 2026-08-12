import { NavLink, Link } from 'react-router-dom';
import './Header.css';


export default function Header({ onBurgerClick, theme, setTheme }) {
  return (
    <header>
      <button className="burger-btn" onClick={onBurgerClick} aria-label="Открыть меню">
        <span /><span /><span />
      </button>

      <div className="logo"><Link to="/">Linux<em>Learn</em></Link></div>

         
        


     <button
  className="theme-btn"
  onClick={() =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  aria-label="Переключить тему"
>
  {theme === 'light' ? '🌙' : '☀️'}
</button>

      <div className="header-right">
        <div className="xp-badge">⭐ 1 240 XP</div>
        <div className="streak">🔥 7 дней</div>
        <button className="pro-btn">✦ PRO</button>
      </div>
    </header>
  );
}


      //  <div className='header-empty'></div>
      //     <div className="header-label">Карта языка</div>
      //     <div className="search-box">
      //       <span style={{ color: 'var(--muted)', fontSize: 14 }}>⌕</span>
      //       <input type="text" placeholder="Поиск темы..." />
      //  </div>