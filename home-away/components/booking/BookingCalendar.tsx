'use client';

import { useEffect, useState } from 'react';
import { type DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';
import { useProperty } from '@/utils/store';
import { defaultSelected, generateBlockedPeriods, generateDateRange, generateDisabledDates } from '@/utils/calendar';
import { useToast } from '@/hooks/use-toast';

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

  const { toast } = useToast();
  const unavailableDates = generateDisabledDates(blockedPeriods);
  console.log('Unavailable Dates: ', unavailableDates);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: 'Some dates are booked. Please select again.',
        });
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range, unavailableDates, toast]);

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