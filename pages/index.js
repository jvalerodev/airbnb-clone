import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Main from '@/components/Main';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone developed with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Main exploreData={exploreData} cardsData={cardsData} />
    </div>
  );
};

export const getStaticProps = async () => {
  let res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await res.json();

  res = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = await res.json();

  return {
    props: {
      exploreData,
      cardsData
    }
  };
};

export default Home;