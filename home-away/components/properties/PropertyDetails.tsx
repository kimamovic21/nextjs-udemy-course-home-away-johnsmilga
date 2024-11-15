import { LuDot } from 'react-icons/lu';
import { formatQuantity } from '@/utils/format';

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

function PropertyDetails({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) {
  return (
    <p className='text-md font-light flex items-center'>
      <span className='flex items-center'>{formatQuantity(bedrooms, 'bedroom')}
        <LuDot size={30} />
      </span>
      <span className='flex items-center'>{formatQuantity(baths, 'bath')} 
        <LuDot size={30} />
      </span>
      <span className='flex items-center'>{formatQuantity(guests, 'guest')} 
        <LuDot  size={30} />
      </span>
      <span className='flex'>{formatQuantity(beds, 'bed')}</span>
    </p>
  );
};

export default PropertyDetails;