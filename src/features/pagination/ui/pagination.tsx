'use client';
import { MetaData } from '@/entities/car/types';
import { useSearchAppParams } from '@/shared/lib/useSearchAppParams';
import clsx from 'clsx';
import { useTransition } from 'react';

type PaginationProps = {
  meta: MetaData;
};

export const Pagination = ({ meta }: PaginationProps) => {
  const [, startTransition] = useTransition();
  const { editSearchParams } = useSearchAppParams();

  const currentPage = meta.page;
  const lastPage = meta.last_page;

  const goToPage = (page: number) => {
    startTransition(() => {
      editSearchParams('add', [['_page', page.toString()]]);
    });
  };

  const getPages = () => {
    const pages: (number | '...')[] = [];

    if (lastPage <= 5) {
      for (let i = 1; i <= lastPage; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(lastPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < lastPage - 2) pages.push('...');

      pages.push(lastPage);
    }

    return pages;
  };

  return (
    <div className='flex items-center justify-center gap-2 mt-4'>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className={clsx(
          'w-9 h-9 rounded-full flex items-center justify-center text-white',
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
        )}>
        &lt;
      </button>

      {getPages().map((p, idx) => (
        <button
          key={idx}
          disabled={p === '...'}
          onClick={() => typeof p === 'number' && goToPage(p)}
          className={clsx(
            'w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium',
            p === currentPage
              ? 'bg-blue-500 text-white'
              : p === '...'
                ? 'bg-gray-200 text-gray-500 cursor-default'
                : 'border border-blue-500 text-blue-500 hover:bg-blue-100 cursor-pointer'
          )}>
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === lastPage}
        onClick={() => goToPage(currentPage + 1)}
        className={clsx(
          'w-9 h-9 rounded-full flex items-center justify-center text-white',
          currentPage === lastPage
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
        )}>
        &gt;
      </button>
    </div>
  );
};
