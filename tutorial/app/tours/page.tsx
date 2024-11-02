import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();
  console.log(data);

  return (
    <section>
      <h2 className='text-3xl mb-4'>Tours</h2>

      <div className='grid md:grid-cols-2 gap-8'>
        {data.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className='hover:text-blue-500'
            >
              <div className='relative h-48 mb-2'>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes='33vw'
                  // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
                  priority
                  className='object-cover rounded'
                />
              </div>
              <h3>{tour.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ToursPage;