

function DebianCard(){


    return (
        <>
     
        <div style={{paddingTop:'1rem'}}>

            <div className="dc" style={{ borderLeft: 'solid #5e070e 4px'}}>
                <div className="dc-head">
                    <div className="dc-icon" style={{ background:'#EEEDFE'}}>
                    <i className="ti ti-circle-check" style={{color:''}} aria-hidden="true"></i>
                    </div>
                    <div>
                    <div className="dc-name">Debian</div>
                    <div className="dc-sub">Debian Project · независимый</div>
                    </div>
                </div>
                <div className="dc-desc">Прародитель Ubuntu и сотен других дистрибутивов. Ультрастабильный: пакеты выходят только после долгого тестирования, поэтому версии ПО немного устаревшие — зато никогда не ломается. Популярен на серверах, где нужна максимальная предсказуемость. "Если не знаешь зачем нужен Debian — используй Ubuntu."</div>
                <div className="tag-row">
                    <span className="tag tag-good">Максимальная стабильность</span>
                    <span className="tag tag-good">Без коммерческого влияния</span>
                    <span className="tag tag-good">Устаревшие пакеты</span>
                </div>
                <div className="meta-row">
                    <div className="meta-item">Пакеты: <span>.deb / apt</span></div>
                    <div className="meta-item">Цикл: <span>~2 года, очень консервативный</span></div>
                    <div className="meta-item">Идеальна для: <span>production-серверы, VPS</span></div>
                </div>
                <button className="tab">Подробнее про Debian ↗</button>
            </div>

        </div>
        </>
    )
}

export default DebianCard;