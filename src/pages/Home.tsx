import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion'; // Import from Framer Motion
import SearchableVideoList from '../features/SearchableVideoList';
import VideoList from '../components/VideoList/VideoList';
import { setTracks } from '../redux/deezerSlice';
import { RootState } from '../redux/store';

export default function Home() {
  const dispatch = useDispatch();
  const tracks = useSelector((state: RootState) => state.deezer.tracks);

  const [loading, setLoading] = useState(true);
  const [deezerTracks, setDeezerTracks] = useState(tracks);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://deezer-api-three.vercel.app/api/chart',
        );
        const data = await response.json();
        console.log(data);
        dispatch(setTracks(data.data));

        setDeezerTracks(data.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDeezerTracks(tracks);
      setLoading(false);
    }, 1000);
  }, [tracks]);

  return (
    <div className='max-w-7xl mt-10 mx-auto'>
      <div>
        <h2 className='text-3xl'>Deezer Musics</h2>
        <p>Search your favorite artist or music</p>
      </div>
      <SearchableVideoList />
      {/* <motion.div
        className='flex space-x-4 flex-wrap gap-10 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      > */}
      <div className='relative'>
        {!loading ? (
          <>
            <ul
              role='list'
              className='grid grid-cols-2 mt-20 gap-x-4 gap-y-14 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-10'
            >
              {deezerTracks.map((item: any) => (
                <motion.div
                  whileHover={{ scale: 1.05 }} // Add hover animation
                  whileTap={{ scale: 0.95 }}
                >
                  <VideoList
                    id={item.artist.id}
                    thumbnailUrl={item.album.cover_medium}
                    duration={item.duration}
                    title={item.title}
                    artist={item.artist.name}
                  />
                </motion.div>
              ))}
            </ul>{' '}
          </>
        ) : (
          <>
            <div className='flex justify-center w-full mt-20 xl:mt-40'>
              <span role='status' className=''>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className=' mr-2  h-12  w-12  animate-spin fill-slate-900 text-gray-200 dark:text-gray-200'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
