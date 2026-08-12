
function FedoraCard(){

    return(

        <>
        <div style={{paddingTop:'1rem'}}>

            <div className="dc" style={{ borderLeft: 'solid #02b91b 4px'}}>
                <div className="dc-head">
                    <div className="dc-icon" style={{ background:'#EEEDFE'}}>
                    <i className="ti ti-circle-check" style={{color:''}} aria-hidden="true"></i>
                    </div>
                    <div>
                    <div className="dc-name">Fedora</div>
                    <div className="dc-sub">Red Hat · upstream для RHEL</div>
                    </div>
                    <span className="tag tag-good" style={{marginLeft:'auto'}}>рекомендую новичку</span>
                </div>
                <div className="dc-desc">Лаборатория Red Hat: новые технологии попадают сюда первыми, и если выживают — потом идут в RHEL. Последние версии ядра, systemd, Wayland, контейнерные инструменты. Отличный выбор для разработчика, который хочет работать на свежем стеке и изучать enterprise-инструменты. Не для серверов в продакшне.</div>
                <div className="tag-row">
                    <span className="tag tag-good">Самые свежие пакеты</span>
                    <span className="tag tag-good">SELinux из коробки</span>
                    <span className="tag tag-good">Короткий цикл поддержки (~13 мес)</span>
                </div>
                <div className="meta-row">
                    <div className="meta-item">Пакеты: <span>.rpm / dnf</span></div>
                    <div className="meta-item">Цикл: <span>~6 месяцев, 2 версии поддерживается</span></div>
                    <div className="meta-item">Идеальна для: <span>desktop разработчика</span></div>
                </div>
                <button className="tab">Подробнее про Fedora ↗</button>
            </div>

        </div>
        </>
    )
}

export default FedoraCard;