import { Link } from 'react-router-dom';
import Thumbnail from '../Thumbnail/Thumbnail';
import { format, parseISO } from 'date-fns';

export default function album({
  id,
  thumbnailUrl,
  title,
  date,
}: {
  id: number;
  thumbnailUrl: string;
  title: string;
  date: any;
}) {
  const dateObject = date ? parseISO(date) : null;
  const year = dateObject ? format(dateObject, 'yyyy') : null;
  return (
    <li key={id} className='relative'>
      <Link to={`/artist/${id}`}>
        <div className='group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
          <Thumbnail imageUrl={thumbnailUrl} />
        </div>

        <h3 className='text-lg font-medium'>{title}</h3>
        <p className='text-sm text-gray-400'>{year}</p>
      </Link>
    </li>
  );
}
