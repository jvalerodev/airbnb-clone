import Head from 'next/head';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone developed with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}
    </div>
  );
};

export default Home;