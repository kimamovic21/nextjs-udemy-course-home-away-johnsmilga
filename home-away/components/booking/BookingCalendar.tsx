'use client';

import { useEffect, useState } from 'react';
import { type DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';
import { useProperty } from '@/utils/store';
import { defaultSelected } from '@/utils/calendar';

function BookingCalendar() {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  console.log('Range from: ', range?.from);
  console.log('Range to: ', range?.from);

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
    />
  );
};

export default BookingCalendar;