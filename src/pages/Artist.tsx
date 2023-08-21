import { useEffect, useState } from 'react';
import Album from '../components/Album/Album';
import { useParams } from 'react-router-dom';

export default function Artist() {
  const { id } = useParams();
  const [artistInfo, setArtistInfo] = useState<any>({});
  const [artistAlbum, setArtistAlbum] = useState<any[]>([]);
  const [topHit, setTopHit] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          ` https://deezer-api-three.vercel.app/api/${id}`,
        );
        const album = await fetch(
          `https://deezer-api-three.vercel.app/api/album/${id}`,
        );
        const topSong = await fetch(
          `https://deezer-api-three.vercel.app/api/top/${id}`,
        );
        const data = await response.json();
        const albumData = await album.json();
        const top = await topSong.json();

        console.log(data);
        console.log(top.data);
        console.log(albumData.data);
        setArtistInfo(data);
        setTopHit(top.data);
        setArtistAlbum(albumData.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    }

    fetchData();
  }, []);

  function formatNumber(number: number) {
    if (number < 1000) {
      return `${number}K`;
    } else {
      return `${(number / 1000).toFixed(1)}M`;
    }
  }

  const thumbnailStyle = {
    backgroundImage: `url(${artistInfo.picture_xl})`,
    backgroundSize: 'cover', // Adjust this to make the image fit the container
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-50 overflow-hidden'>
        <div className='col-span-1 sm:col-span-2 h-[600px]'>
          {/* <Thumbnail imageUrl={artistInfo.picture_xl} /> */}
          <div className='h-full relative' style={thumbnailStyle}>
            <div className='absolute inset-0 bg-black opacity-40'></div>
            <div className='flex relative flex-col justify-center items-center p-6 rounded-lg shadow-lg h-full'>
              <div className=' w-2/3 space-y-6 text-white'>
                <h2 className='text-4xl font-semibold mb-2 '>
                  {artistInfo.name}
                </h2>
                <p className=' text-xl font-medium mb-1'>
                  {formatNumber(artistInfo.nb_fan)} Fans
                </p>
                <p className='text-sm leading-6 line-clamp-3 overflow-hidden max-h-24 ellipsis '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, qui? Dignissimos optio reiciendis atque. Deleniti saepe
                  doloremque, distinctio dicta a incidunt officia accusantium
                  excepturi ipsam nemo similique explicabo ducimus officiis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 bg-white'>
          <div className='p-4 sm:p-6 lg:p-10 h-full bg-gray-50'>
            <h2 className='text-xl font-semibold'>Top tracks</h2>
            <div>
              <ul role='list' className='divide-y divide-gray-200 mt-4'>
                {topHit.slice(0, 5).map((person, index) => (
                  <li
                    key={person.title}
                    className='relative flex justify-between gap-x-6 py-4 sm:py-5 hover:bg-gray-50'
                  >
                    {/* Rest of your list item content */}

                    <div className='flex min-w-0 gap-x-2'>
                      <span>{index + 1}</span>
                      <div className='min-w-0 flex-auto'>
                        <p className='text-sm font-semibold leading-6 text-gray-900'>
                          <a href={person.id}>
                            <span className='absolute inset-x-0 -top-px bottom-0' />
                            {person.title}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className='flex shrink-0 items-center gap-x-4'>
                      <div className='hidden sm:flex sm:flex-col sm:items-end'>
                        {person.lastSeen ? (
                          <p className='mt-1 text-xs leading-5 text-gray-500'>
                            Last seen{' '}
                          </p>
                        ) : (
                          <div className='mt-1 flex items-center gap-x-1.5'>
                            {/* <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
                              <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                            </div> */}
                            <p className='text-xs leading-5 text-gray-500'>
                              2:30
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-20'>
        <h2 className='text-2xl  mb-5'>Albums</h2>
        <div className='mt-10'>
          {/* <div className='flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10'> */}
          <ul
            role='list'
            className='grid grid-cols-2 gap-x-4 gap-y-14 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-10'
          >
            {artistAlbum.map((item) => (
              <Album
                id={item.id}
                thumbnailUrl={item.album.cover_medium}
                title={item.title}
                date={item.release_date}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
