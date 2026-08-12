
function UbuntuCard(){

    return (

    <>
    <div style={{paddingTop:'1rem'}}>

            <div className="dc" style={{ borderLeft: 'solid #fa3e0f 4px'}}>
                <div className="dc-head">
                    <div className="dc-icon" style={{ background:'#EEEDFE'}}>
                    <i className="ti ti-circle-check" style={{color:''}} aria-hidden="true"></i>
                    </div>
                    <div>
                    <div className="dc-name">Ubuntu</div>
                    <div className="dc-sub">Canonical · на базе Debian</div>
                    </div>
                    <span className="tag tag-good" style={{marginLeft:'auto'}}>рекомендую новичку</span>
                </div>
                <div className="dc-desc">Самый популярный Linux в мире. Выходит каждые 6 месяцев, LTS-версии (каждые 2 года) поддерживаются 5 лет. Огромное сообщество — любой вопрос решается гуглом. Ubuntu Server доминирует в облаке: AWS, GCP, Azure используют его как образ по умолчанию.</div>
                <div className="tag-row">
                    <span className="tag tag-good">Простая установка</span>
                    <span className="tag tag-good">Огромное сообщество</span>
                    <span className="tag tag-good">Лучшая для облака</span>
                    <span className="tag tag-info">apt + snap</span>
                </div>
                <div className="meta-row">
                    <div className="meta-item">Пакеты: <span>.deb / apt</span></div>
                    <div className="meta-item">Цикл: <span>LTS 2 года / 5 лет поддержки</span></div>
                    <div className="meta-item">Идеальна для: <span>серверы, обучение, VPS</span></div>
                </div>
                <button className="tab">Подробнее про Ubuntu ↗</button>
            </div>

        </div>
    </>


    )
    
}

export default UbuntuCard;