import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

export const Banner = () => {
    return (
    <div className="mb-10">
    <div className= 'flex flex-col  space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute flex flex-col left-0 top-0 -z-10 h-[75vh] w-screen bg-gradient-to-b from-black/70 to-transparent'>
    <Image
      src='/banner.jpg'
      alt='The Whitcher'
      fill={true}
      className='h-[75vh] object-cover object-top'
    />
  </div>
   
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              MAID
            </h1>
  
            <p className= 'text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            The Maid is a 2021 American drama television miniseries based on the
              memoir of the same name by Stephanie Land. It stars Margaret Qualley
              as a single mother who becomes a maid to make ends meet while
              struggling with poverty and her abusive relationship with her
              daughter&apos;s father, played by Nick Robinson.
            </p>
         
        </div>
  
        <div className='flex space-x-3'>
          <button className= 'md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <PlayIcon className="h-6" />
            Play</button>
          <button className= 'md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className="h-6" />
            More Info</button>
        </div>
        </div>
  )};