import { redirect } from 'next/navigation';
import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction
} from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import CountriesInput from '@/components/form/CountriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CounterInput from '@/components/form/CounterInput';

async function EditRentalsPage({ params }: {params: {id: string}}) {
  const property = await fetchRentalDetails(params.id);

  if (!property) redirect('/');

  return (
    <section>
      <h2 className='text-2xl font-semibold mb-8 capitalize'>
        Edit Property
      </h2>
      
      <div className='border p-8 rounded-md '>
        <ImageInputContainer
          name={property.name}
          text='Update Image'
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type='hidden' name='id' value={property.id} />
        </ImageInputContainer>

        <FormContainer action={updatePropertyAction}>
          <input type='hidden' name='id' value={property.id} />
          <div className='grid md:grid-cols-2 gap-8 mb-4 mt-8'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue={property.name}
            />
            <FormInput
              name='tagline'
              type='text '
              label='Tagline (30 limit)'
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>

          <TextAreaInput
            name='description'
            labelText='Description (10 - 100 Words)'
            defaultValue={property.description}
          />

          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Accommodation Details
          </h3>
          <CounterInput detail='guests' defaultValue={property.guests} />
          <CounterInput detail='bedrooms' defaultValue={property.bedrooms} />
          <CounterInput detail='beds' defaultValue={property.beds} />
          <CounterInput detail='baths' defaultValue={property.baths} />
          
          <SubmitButton text='edit property' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditRentalsPage;