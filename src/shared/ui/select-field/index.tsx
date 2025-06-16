'use client';

import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

interface SortOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: SortOption[];
  currentOption?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SelectField = ({
  options,
  currentOption,
  onChange,
  placeholder = 'Сортировка',
}: SelectFieldProps) => {
  return (
    <Select.Root value={currentOption} onValueChange={onChange}>
      <Select.Trigger className='inline-flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm w-48 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className='ml-2'>
          <ChevronDown className='w-4 h-4 text-gray-500' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className='w-[var(--radix-select-trigger-width)] bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50'
          position='popper'>
          <Select.Viewport className='p-1'>
            {options.map(option => (
              <Select.Item
                key={option.value}
                value={option.value}
                className='relative px-4 py-2 text-sm text-gray-800 rounded-md cursor-pointer hover:bg-blue-100 focus:bg-blue-100 focus:outline-none'>
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className='absolute right-3 top-1/2 -translate-y-1/2'>
                  <Check className='w-4 h-4 text-blue-600' />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
