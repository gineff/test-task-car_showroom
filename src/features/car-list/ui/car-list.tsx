import { Car } from '@/entities/car/types';
import { CarCard } from '@/entities/car/ui/car-card';

export const CarList = ({ cars }: { cars: Car[] }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {cars.map(car => (
        <CarCard key={car.unique_id} car={car} />
      ))}
    </div>
  );
};
