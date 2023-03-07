import clas from '../styles/banner.module.css'
import BannerImage from '../styles/assets/Group 65.png'

const Banner = () => {
    return <div className={clas.banner_wrapper}>
        <div className="container">
            <div className={clas.banner}>
               
                        <div className={clas.banner_left_side} style={{
                            backgroundImage: `url(${BannerImage})`
                        }}>
                            <h1 className=''>ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Vulputate nunc malesuada non nunc pellentesque nibh metus. Sed pellentesque ac elementum in elit. Non lacinia proin lectus nulla cursus euismod sit eu</p>
                            <button>Подробнее</button>
                        </div>
                <div className={clas.banner_right_side}>
                    <div className={clas.top}>

                    </div>
                    <div className={clas.bottom}>
                        <div className={clas.mini_block}></div>
                        <div className={clas.mini_block}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Banner