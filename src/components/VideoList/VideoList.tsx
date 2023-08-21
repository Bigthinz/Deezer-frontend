import Thumbnail from '../Thumbnail/Thumbnail';
import { Link } from 'react-router-dom';

export default function VideoList({
  id,
  thumbnailUrl,
  duration,
  title,
  artist,
}: {
  id: number;
  thumbnailUrl: string;
  duration: string;
  title: string;
  artist: string;
}) {
  function formatDuration(durationInSeconds: any) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    <li key={id} className='relative'>
      <Link to={`/artist/${id}`}>
        <div className='group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
          <Thumbnail imageUrl={thumbnailUrl} />
          <p className='text-sm text-gray-400'>{formatDuration(duration)}</p>
          <h3 className='text-lg font-medium ellipsis text-overflow-ellipsis  overflow-hidden  truncate overflow-ellipsis whitespace-nowrap'>
            {title}
          </h3>
          <p className='text-sm text-gray-400'>By {artist}</p>
        </div>
      </Link>
    </li>
  );
}
