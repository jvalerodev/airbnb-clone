import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="This is not the official Airbnb website. It is a clone developed for educational purposes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Main exploreData={exploreData} cardsData={cardsData} />

      <Footer />
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