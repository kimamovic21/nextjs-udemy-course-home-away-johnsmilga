const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.log(firstName);
};

function CreateProfilePage() {
  return (
    <section>
      <h2 className='text-2xl font-semibold mb-8 capitalize'>new user</h2>
      <div className='border p-8 rounded-md max-w-lg'>
        <form action={createProfileAction}>
          {/* Form Container Component */}
        </form>
      </div>
    </section>
  );
};

export default CreateProfilePage;