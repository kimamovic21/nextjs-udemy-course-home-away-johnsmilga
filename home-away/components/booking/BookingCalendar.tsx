'use client';

import { useEffect, useState } from 'react';
import { type DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';
import { useProperty } from '@/utils/store';
import { defaultSelected, generateBlockedPeriods } from '@/utils/calendar';

function BookingCalendar() {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  console.log('Range from: ', range?.from);
  console.log('Range to: ', range?.from);

  const bookings = useProperty((state) => state.bookings);
  console.log('Bookings: ', bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  console.log('Blocked Periods: ', blockedPeriods);

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
      disabled={blockedPeriods}
    />
  );
};

export default BookingCalendar;