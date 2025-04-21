import Image from "next/image";

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }:  MovieCardProps ) => {
  return(
  <div key={index} className='group h-28 min-w-[200px] relative transform transtion duration-200 ease-in hover:scale-110 hover:z-50 md:h-48 md:min-w-[200px] lg:h-40 lg:min-w-[300px] bg-gradient-to-t from-transparent to-black transition-200'>
          <Image

            src={`/item_${index}.png`}
            fill={true}
            alt={'MAID'}
            className="rounded" />
        </div>
  );
};

//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });
export function MovieRow({ sectionTitle }: MovieRowProps) {
  return <div className='flex-col space-y-4'>
    <div className="flex">
      <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
    </div>
    <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>

      {[1, 2, 3, 4, 5, 5, 5, 5].map((index) => (
        <MovieCard key={index} index={index} />
      ))}

    </div>
  </div>;
}
