import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Home = ({ exploreData, cardsData }) => {
  return (
    <>
      <SEO title="Airbnb Clone" />

      <Header />

      <Banner />

      <Main exploreData={exploreData} cardsData={cardsData} />

      <Footer />
    </>
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