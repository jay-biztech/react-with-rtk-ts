import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  console.log('Cake View');

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};
