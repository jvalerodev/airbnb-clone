import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone developed with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-bold">Lets build Airbnb!</h1>
    </div>
  );
};

export default Home;