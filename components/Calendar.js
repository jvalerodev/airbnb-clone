import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { DateRangePicker } from 'react-date-range';
import { UsersIcon } from '@heroicons/react/24/solid';

const Calendar = ({ searchInput, setSearchInput }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  };

  return (
    <div className="flex flex-col col-span-3 mx-auto mt-3">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5b61']}
        onChange={handleSelect}
      />

      <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

        <UsersIcon className="h-5" />
        <input
          className="w-12 pl-2 text-lg outline-none text-red-400"
          type="number"
          min={1}
          value={noOfGuests}
          onChange={e => setNoOfGuests(Number(e.target.value))}
        />
      </div>

      <div className="flex">
        <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
        <button className="flex-grow text-red-400" onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default Calendar;