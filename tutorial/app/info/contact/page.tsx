import Link from 'next/link';

function ContactPage() {
  return (
    <div>
      <h2>ContactPage</h2>
      <Link href='/' className='text-xl text-blue-500 inline-block mt-8'>
        back home 
      </Link>
    </div>
  );
};

export default ContactPage;