import clas from '../styles/shopcard.module.css'
import Image from 'next/image'
import { InStockIco, StarIco, KorzinkaIco } from '../public/icons'

const ShopCard = ()=>{
    return <div className={clas.shopcard_wrapper}>
        <div className={clas.image_block}>
            <Image src={'/../styles/assets/pexels-math-249324 (1).jpg'} alt={"img.img"} height="147" width={"120"} />
        </div>
        <div className={clas.content_block}>
            <h3>Сушильная машина Samsung DV90T5240AT/LP</h3>
            <div className={clas.rate}>
                <StarIco/>
                <span>(160)</span>
            </div>
            <InStockIco/>
            <div className={clas.price}>
                <span>52 000 сум</span>
                <button><KorzinkaIco/></button>
            </div>
        </div>
    </div>
}

export default ShopCard