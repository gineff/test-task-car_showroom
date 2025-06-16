'use client';
import { useSearchAppParams } from '@/shared/lib/useSearchAppParams';
import { SelectField } from '@/shared/ui';
import { useTransition } from 'react';
import { selectOptions } from '../config';
import { getCurrentOption } from '../lib';

export const FilterPanel =  ({ _sort, _order }: { _sort: string; _order: string }) => {
  const [, startTransition] = useTransition();

  const currentOption = getCurrentOption( _sort, _order ) 

  const { editSearchParams } = useSearchAppParams();

  const handleChange = (value: string) => {
    startTransition(() => {
      editSearchParams('add', [
        ['_sort', 'price'],
        ['_order', value === 'cheap' ? 'asc' : 'desc'],
      ]);
    });
  };

  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-semibold'>Show-room</h2>
      <div className='flex gap-2'>
        <SelectField
          options={selectOptions}
          currentOption={currentOption}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
