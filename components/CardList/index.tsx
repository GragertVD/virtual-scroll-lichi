import { FC } from 'react';
import CardItem from '../CardItem';
import styles from './style.module.scss';
import { Product } from '@/types';

interface IpropsCardList {
  arrayProduct: Product[],
}

const CardList: FC<IpropsCardList> = ({ arrayProduct }) => (
  <>
    <h1 style={{ display: "none" }}>{arrayProduct[0].category_name}</h1>
    <div className={styles.wrapper}>
      {
        arrayProduct.map((product) =>
          <CardItem key={product.id} product={product} />
        )
      }
    </div>
  </>
)
  ;

export default CardList;
