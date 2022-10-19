import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/img/banner.webp"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button
          className="text-sm sm:text-lg text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold mt-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;