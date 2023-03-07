import clas from '../styles/footer.module.css'
import Link from 'next/link'
import { LocationIco, PhoneIco, MailIco, TelegramIco, FacebookIco, TwitterIco, InstagramIco, MasterCardIco, UnionPayIco, VisaIco } from '../public/icons'

const Footer = ()=>{
    return <div className={clas.footer}>
        <div className="container">
            <div className={clas.inner}>
                <div className={clas.block}>
                    <span>Компания</span>
                    <ul>
                        <li><Link href="/">O нас</Link></li>
                        <li><Link href="/">Акции</Link></li>
                        <li><Link href="/">Новинки</Link></li>
                        <li><Link href="/">Доставка и оплата</Link></li>
                        <li><Link href="/">Контакты</Link></li>
                    </ul>
                </div>
                <div className={clas.block}>
                    <span>Связь с нами</span>
                    <ul>
                        <li>
                            <LocationIco/>
                            <a href="#">г. Ташкент адрес</a>
                        </li>
                        <li>
                            <PhoneIco/>
                            <a href="#">+998 99 999 99 99</a>
                        </li>
                        <li>
                            <MailIco/>
                            <a href="#">почта</a>
                        </li>
                    </ul>
                </div>
                <div className={clas.block}>
                    <span>Способы оплаты:</span>
                    <div className={clas.pay}>
                        <ul>
                            <li><MasterCardIco/></li>
                            <li><UnionPayIco/></li>
                            <li><VisaIco/></li>
                        </ul>
                    </div>
                    <div className={clas.social}>
                        <a href="#"><TelegramIco/></a>
                        <a href="#"><FacebookIco/></a>
                        <a href="#"><TwitterIco/></a>
                        <a href="#"><InstagramIco/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer