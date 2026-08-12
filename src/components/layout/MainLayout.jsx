import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';
import Button from '../ui/Button';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        }, [theme]);

  return (
    <>
    
      <Header onBurgerClick={() => setSidebarOpen(prev => !prev)} 
      theme={theme}
  setTheme={setTheme}
    />
      <div className="layout">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="layout-content">
            <div className="content-wrap">

                {/* Подшапка */}
                <div className="content-nav">
                    <div className="breadcrumb">
                      <span>Linux</span>
                        <span className="sep">›</span>
                        <span>Операционные системы</span>
                        <span className="sep">›</span>
                        <span className="cur">Словари (dict)</span>
                    </div>
                      <Button>← Пред.</Button>
                      <Button variant="primary">След. →</Button>
                </div>

                        {/* Контент + реклама */}
                        <div className="content-scroll">

                          <div className="content-main">
                            
                            <Outlet />
                          </div>
                          

                          {/* Реклама справа */}
                          <div className="ad-right">
                            <div className="ad-block">
                              <div className="ad-label">Реклама</div>
                              <div className="ad-placeholder"><div>160 × 100</div><div style={{ fontSize: 8 }}>AdSense блок</div></div>
                              <div className="ad-placeholder2"><div>160 × 200</div><div style={{ fontSize: 8 }}>AdSense блок</div></div>
                            </div>
                          </div>

                        </div>

                  {/* Нижний баннер */}
                  <div className="ad-bottom">
                    <div className="ad-bottom-inner">728 × 40 — Рекламный баннер (скрывается с PRO)</div>
                  </div>

            </div>
                    
          </div>
      </div>
    </>
  );
}
