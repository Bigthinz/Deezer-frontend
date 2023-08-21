export default function Thumbnail({ imageUrl }: { imageUrl: string }) {
  return (
    <img
      className='  block mb-4 w-full h-full object-cover object-fit rounded-lg pointer-events-none group-hover:opacity-75'
      alt='hero'
      src={imageUrl}
    />
  );
}
