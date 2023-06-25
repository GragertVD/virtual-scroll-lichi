import CardList from "@/components/CardList";
import { DataProducts } from "@/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC, useCallback, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category as string;
  const response = await fetch(`https://api.lichi.com/category/get_category_product_list?category=${category}&lang=1&shop=2&limit=12`);
  const data = await response.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { propsProducts: data.api_data },
  }
};

interface PropsCategory { propsProducts: DataProducts };

const Category: FC<PropsCategory> = ({ propsProducts }) => {

  const [products, setProducts] = useState(propsProducts);
  useEffect(() => {
    setProducts(propsProducts);
  }, [propsProducts]);

  //
  const { ref, inView } = useInView({
    threshold: 0,
  });


  useEffect(() => {
    const fetchData = async () => {
      
      if (products?.aProduct === undefined) return;
      if (inView && products.iCurrentPage >= products.iPages) return;
      
      const response = await fetch(`https://api.lichi.com/category/get_category_product_list?category=${products?.aProduct[0] !== undefined && products.aProduct[0].type}&lang=1&shop=2&limit=12&page=${products.iCurrentPage + 1}`);
      const data = await response.json();
      
      (data.api_data as DataProducts).aProduct = [...products.aProduct, ...data.api_data.aProduct];

      setProducts((data.api_data as DataProducts));
    }

    fetchData();

  }, [inView])


  if (products?.aProduct.length === 0)
    return <h1>Товаров в этой категории нет</h1>

  return (
    <>
      <Head>
        <title>{products.aProduct[0].category_name}</title>
      </Head>
      <CardList arrayProduct={products.aProduct} />
      <div ref={ref}></div>
    </>
  )
};

export default Category;
