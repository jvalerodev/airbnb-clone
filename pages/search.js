import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Map from '@/components/Map';
import SEO from '@/components/SEO';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <SEO title="Results - Airbnb Clone" />

      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in <span className="capitalize">{location}</span></h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(({ img, location, title, description, star, price, total }, i) => (
              <InfoCard
                key={`result-${i}`}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://www.jsonkeeper.com/b/5NPS');
  const searchResults = await res.json();

  return {
    props: {
      searchResults
    }
  };
};

export default Search;