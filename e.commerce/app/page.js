import React from 'react'
import Banner from '../container/banner'
import clas from '../styles/home.module.css'
import Image from 'next/image'
import { SaleIco, Medal1, Medal2, Medal3, Medal4 } from '../public/icons'
import ShopCard from '../components/shopcard'

const Home = () => {
  const arrImages = [
    {
      src: '/../styles/assets/1010-10105218_carrier-logo-19-de-abril-de-2017-239 1.png'
    },
    {
      src: '/../styles/assets/112-1129036_logo-samsung-png-samsung-logo-2016-png 1.png'
    },
    {
      src: '/../styles/assets/8c3af0f9c8d3d892d67e4929a7249bf8 1.png'
    },
    {
      src: '/../styles/assets/ASRock-logo-2048x1143 1.png'
    },
    {
      src: '/../styles/assets/GMB-Oval-Logo 1.png'
    },
    {
      src: '/../styles/assets/Henkel_logo_p 1.png'
    },
    {
      src: '/../styles/assets/Metabo_Logo_alt 1.png'
    },
    {
      src: '/../styles/assets/file 1.png'
    },

  ]
  return (
    <div className={clas.home_wrapper}>
      <Banner />
      <div className={clas.ads_lineral}>
        <ul>
          {
            arrImages.map(el => {
              return <li>
                <a href="#">
                  <Image alt='brand.img' src={el.src} width="143" height="55" />
                </a>
              </li>
            })
          }
        </ul>
      </div>
      <div className={clas.sale_cards}>
        <div className="container">
          <h1 className={clas.sale_holder}>Скидки и акции</h1>

          <div className={clas.sale_card_wrapper}>
            <div className={clas.card}>
              <span className={clas.sale}>
                <SaleIco />
              </span>
              <Image src="/../styles/assets/sale1.png" alt="sale.img" width="251" height="249" />
              <div className={clas.content}>
                <h1>Смартфон Apple iPhone 14 Pro Max 1TB Space Black</h1>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur </p>
                <div className={clas.card_price}>
                  <span>15 590 000 сум</span>
                  <span>17 600 000 сум</span>
                </div>
              </div>
            </div>
            <div className={clas.card}>
              <span className={clas.sale}>
                <SaleIco />
              </span>
              <Image src="/../styles/assets/sale2.png" alt="sale.img" width={"240"} height={"249"} />
              <div className={clas.content}>
                <h1>Кондиционер Artel Shahrisabz S 18BE Inverter</h1>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur </p>
                <div className={clas.card_price}>
                  <span>17 600 000 сум</span>
                  <span>15 590 000 сум</span>
                </div>
              </div>
            </div>
            <div className={clas.card}>
              <span className={clas.sale}>
                <SaleIco />
              </span>
              <Image width={"306"} height={"249"} src="/../styles/assets/sale3.png" alt="sale.img" />
            </div>
            <div className={clas.card}>
              <span className={clas.sale}>
                <SaleIco />
              </span>
              <Image width={"306"} height={"249"} src="/../styles/assets/sale4.png" alt="sale.img" />
            </div>
            <div className={clas.card}>
              <span className={clas.sale}>
                <SaleIco />
              </span>
              <Image width={"249"} height={"249"} src="/../styles/assets/sale5.png" alt="sale.img" />
              <div className={clas.content}>
                <h1>Смартфон Apple iPhone 14 Pro Max 1TB Space Black</h1>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur </p>
                <div className={clas.card_price}>
                  <span>15 590 000 сум</span>
                  <span>17 600 000 сум</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clas.shop_card}>
        <div className="container">
          <div className={clas.shop_card_holder}>
            <h1>Новинки</h1>
            <button>Смотреть все</button>
          </div>
          <div className={clas.shop_cards_table}>
            {
              [1, 1, 1, 1, 1].map(el => {
                return <div key={el}>
                  <ShopCard />
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className="container">
        <div className={clas.center_ads}>
          <div className={clas.ads}>
            <Image src="/../styles/assets/Group 67.png" alt="rek" width={'199'} height={'223'} />
            <h2>ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ!</h2>
            <span>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem   </span>
          </div>
          <div className={clas.ads}>
            <h2>ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ! Только сегодня</h2>
            <span>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur  </span>
          </div>
        </div>
        <div className={clas.shop_card}>
          <div className="container">
            <div className={clas.shop_card_holder}>
              <h1>Для животных</h1>
              <button>Смотреть все</button>
            </div>
            <div className={clas.shop_cards_table}>
              {
                [1, 1, 1, 1, 1].map(el => {
                  return <div key={el}>
                    <ShopCard />
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className={clas.shop_card}>
          <div className="container">
            <div className={clas.shop_card_holder}>
              <h1>Для сада</h1>
              <button>Смотреть все</button>
            </div>
            <div className={clas.shop_cards_table}>
              {
                [1, 1, 1, 1, 1].map(el => {
                  return <div key={el}>
                    <ShopCard />
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className={clas.shop_card}>
          <div className={clas.shop_card_holder}>
            <h1>Парфюмерия и косметика</h1>
            <button>Смотреть все</button>
          </div>
          <div className={clas.shop_cards_table}>
            {
              [1, 1, 1, 1, 1].map(el => {
                return <div key={el}>
                  <ShopCard />
                </div>
              })
            }
          </div>
        </div>
      </div>


      <div className="container">
        <div className={clas.about_us}>
          <div className={clas.text_content}>
            <h1>Почему мы? <br /> Лого - магазин техники</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate nunc malesuada non nunc pellentesque nibh metus. Sed pellentesque ac elementum in elit. Non lacinia proin lectus nulla cursus euismod sit eu. Amet tortor quis sit enim id.Lorem ipsum dolor sit amet consectetur.lacinia proin lectus .
            </p>
            <button>Подробнее</button>
          </div>
          <div className={clas.future_app}>
              <div className={clas.icon}>
                <div className={clas.svg}>
                  <Medal1/>
                </div>
                <span>Отличное качество</span>
              </div>
              <div className={clas.icon}>
              <div className={clas.svg}>
                  <Medal2/>
                </div>
                <span>Большой опыт</span>
              </div>
              <div className={clas.icon}>
              <div className={clas.svg}>
                  <Medal3/>
                </div>
                <span>Лучшие специалисты</span>
              </div>
              <div className={clas.icon}>
              <div className={clas.svg}>
                  <Medal4/>
                </div>
                <span>Низкие цены</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
