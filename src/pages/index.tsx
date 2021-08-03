/* eslint-disable @next/next/no-img-element */

import { GetStaticProps } from 'next'; 

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface IHomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: IHomeProps ) {
  console.log(product)
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications <br/>
          <span>for {product.amount} month</span></p>
          <SubscribeButton priceId={product.priceId}></SubscribeButton>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>
    </>
  )
}


//SSG: Static site generation = usar somente quando páginas que podem ser estáticas
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JKR2iATnDcf6i9Dmvh6QabX');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100 ),
  }
  return {
    props: {
      product
    },
    //revalidate serve para setar um tempo que deverá ser revalidada/gerada essa pagina
    revalidate: 60 * 60 * 24, //24 horas
  }
}