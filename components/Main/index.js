import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';

const Main = ({ exploreData, cardsData }) => {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 mt-6">
      <section>
        <h2 className="text-4xl font-semibold py-8">Explore Nearby</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({ img, location, distance }, i) => (
            < SmallCard
              key={`explore-${i}`}
              img={img}
              location={location}
              distance={distance}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold pt-8 pb-5">Live Anywhere</h2>

        <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({ img, title }, i) => (
            <MediumCard
              key={`mediumCard-${i}`}
              img={img}
              title={title}
            />
          ))}
        </div>
      </section>

      <section className="relative py-16 cursor-pointer">
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </section>
    </main>
  );
};

export default Main;