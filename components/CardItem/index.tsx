import { Product } from '@/types';
import styles from './style.module.scss';
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';

interface IpropsCardItem {
  product: Product,
}

const CardItem: FC<IpropsCardItem> = ({ product }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={`${styles.wrapper} ${inView ? styles.opacity_1 : styles.opacity_0}`} >
      <img  src={inView ? product.photos[0].big : '/dress.jpg'} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.format_price[1]}</p>
      </div>
    </div>
  )
};
//loading="lazy" decoding="async" 
export default CardItem;
