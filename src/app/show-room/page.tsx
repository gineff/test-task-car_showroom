import { fetchCarList } from '@/entities/car/api/fetch-car-list';
import { itemsPerPage } from '@/entities/car/config';
import { CarList } from '@/features/car-list/ui/car-list';
import { FilterPanel } from '@/features/filter-panel';
import { Pagination } from '@/features/pagination';
import { Header } from '@/widgets/header';


export default async function ShowRoomPage({
  searchParams,
}: {
  searchParams: Promise<{
    _limit?: string;
    _page?: string;
    _sort?: string;
    _order?: string;
  }>;
}) {
  const { 
    _limit = itemsPerPage.toString(), 
    _page = '1', 
    _sort = 'price', 
    _order = 'asc' 
  } = await searchParams;

  const { data: cars, meta } = await fetchCarList({
    _limit: Number(_limit),
    _page: Number(_page),
    _sort,
    _order: _order as 'asc' | 'desc',
  });

  return (
    <>
      <Header />
      <div className='mt-20 mb-10 mx-auto container max-w-[1024px] space-y-4'>
        <FilterPanel _sort={_sort} _order={_order} />
        <CarList cars={cars} />
        <Pagination meta={meta} /> 
      </div>
    </>
  );
}
