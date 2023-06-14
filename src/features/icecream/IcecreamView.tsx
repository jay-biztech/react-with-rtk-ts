import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';
import { Heading } from './Heading';

export const IcecreamView = () => {
  const [value, setValue] = useState(1);

  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  const dispatch = useAppDispatch();

  console.log('Icecream view');

  return (
    <div>
      <Heading {...{ numOfIcecreams }} />
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order ice cream
      </button>
      <input
        type="number"
        {...{ value }}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(restocked(value));
        }}
      >
        Restock icecreams
      </button>
    </div>
  );
};
