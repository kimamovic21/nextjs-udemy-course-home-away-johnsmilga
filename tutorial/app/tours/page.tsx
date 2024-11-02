const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);

  return (
    <section>
      <h2 className='text-3xl mb-4'>Tours</h2>

      {data.map((tour) => {
        return (
          <h3 key={tour.id}>
            {tour.name}
          </h3>
        );
      })}
    </section>
  );
};

export default ToursPage;