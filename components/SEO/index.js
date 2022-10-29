import Head from 'next/head';

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="This is not the official Airbnb website. It is a clone developed for educational purposes." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;