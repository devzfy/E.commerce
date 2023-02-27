import Link from 'next/link'
import clas from '../styles/main.module.css'
import Image from 'next/image'
import { Burger, SearchIcon, Profile, Basket, Phone } from '../public/icons'

const Header = () => {
    return <div className={clas.header_wrapper}>
        <div className={clas.inner_one}>
            <div className="container">
                <div className={clas.inner_one_inner}>
                    <div className={clas.logo}>
                    <Link href="/"><Image src="/../public/Лого.png" width="73" height="25"  alt='logo.png'/></Link>
                </div>
                <div className={clas.links}>
                    <ul>
                        <li><Link href="/about" >О нас</Link></li>
                        <li><Link href="/sale" >Акции</Link></li>
                        <li><Link href="/delivery" >Доставка и оплата</Link></li>
                        <li><Link href="/contact" >Контакты</Link></li>
                    </ul>
                </div>
                <div className={clas.lang_select}>
                    <select name="" id="">
                        <option value="">ЎЗ</option>
                        <option value="">PYC</option>
                    </select>
                </div>
                </div>
            </div>

        </div>
        <div className={clas.inner_two}>
            <div className="container">
                <div className={clas.inner_two_inner}>
                    <button className={clas.catalog_burger}>
                        <Burger />
                        <span>Каталог</span>
                    </button>
                    <div className={clas.search_place}>
                        <input type="text" placeholder='Поиск товаров' name="" id="" />
                        <SearchIcon />
                    </div>
                    <div className={clas.contact_terms}>
                        <div className={clas.phone}>
                            <Phone/>
                            <a href="tel: 9999999999">+998 (99) 922-52-11</a>
                        </div>
                        <div className={clas.profile}>
                            <button><Profile /></button>
                            <button><Basket /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header