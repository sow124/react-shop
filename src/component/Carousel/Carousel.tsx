import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css'
import {BiRightArrowAlt} from'react-icons/bi'
interface SlideData {
  image: string;
  title: string;
  content: string;
  path: string;
}

function Slide({ image, title, content, path }: SlideData) {
  return (
    <div className={styles.carouselBox}>
      <img src={image}/>
        <div className={styles.carouselContainer}>
          <h2 className={styles.carouselTitle}>{title}</h2>
          <p className={styles.carouselContent}>{content}</p>
          <a className={styles.carouselBtn} href={path}>바로가기 <BiRightArrowAlt/></a>
        </div>
    </div>
  );
}

function Comp() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
    >
      <Slide
        image='https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg'
        title={'물빠진 청바지!'}
        content={'이제 막 도착한 패션 청바지를 구경해 보세요.'}
        path={'/fashion'}
      />
      <Slide
        image='https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg'
        title={'신속한 업무처리!'}
        content={'다양한 디지털 상품을 둘러보세요.'}
        path={'/digital'}
      />
      <Slide
        image='https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg'
        title={'신선한 식품!'}
        content={'농장 직배송으로 더욱 신선한 식료품을 만나보세요.'}
        path={'/food'}
      />
    </Carousel>
  );
}

export default Comp;