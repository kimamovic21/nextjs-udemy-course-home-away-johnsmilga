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