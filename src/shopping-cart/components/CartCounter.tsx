'use client'
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne, initCounterState } from '@/store/counter/CounterSlice';
import { useEffect } from 'react';


export interface CounterResponse {
  count: number;
}

interface Props {
  value: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
    .then(res => res.json());
  return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])
  return (
    <>
      <span className='text-8xl'>{count}</span>
      <div className='flex'>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >+1</button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >-1</button>
      </div>
    </>
  )
}
