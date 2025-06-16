import { Calendar, CarFront, Fuel, Gauge, Heart, Palette, Scale } from 'lucide-react';
import { Car } from '../types';
import { CarImageCarousel } from './car-image-carousel';

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className='flex flex-col rounded-xl bg-white shadow-md overflow-hidden w-full max-w-sm border border-gray-200'>
      <CarImageCarousel
        images={car.images.image}
        alt={`${car.mark_cyrillic_name} ${car.model_cyrillic_name}`}
      />

      <div className='p-4 flex flex-col flex-1 gap-2'>
        <div className='text-lg font-semibold'>
          {car.mark_id} {car.folder_id}
        </div>

        <div className='text-xl font-bold text-black'>
          {car.price.toLocaleString('ru-RU')} ₽
          <span className='text-gray-500 text-sm font-normal block'>от 23 129 ₽/мес</span>
        </div>

        <div className='text-sm text-gray-700'>
          {car.engine_volume} {car.gearbox} ({car.engine_power} л.с.)
        </div>

        <div className='flex flex-wrap gap-2 text-sm text-gray-600'>
          <div className='flex items-center gap-1'>
            <Gauge className='w-4 h-4' />
            {car.run.toLocaleString('ru-RU')} км
          </div>
          <div className='flex items-center gap-1'>
            <CarFront className='w-4 h-4' />
            {car.gearbox}
          </div>
          <div className='flex items-center gap-1'>
            <Fuel className='w-4 h-4' />
            {car.engine_type}
          </div>
          <div className='flex items-center gap-1'>
            <Palette className='w-4 h-4' />
            {car.color}
          </div>
          <div className='flex items-center gap-1'>
            <Calendar className='w-4 h-4' />
            {car.year}
          </div>
        </div>

        <div className='mt-2 flex items-end justify-between flex-1 '>
          <div className='flex gap-2'>
            <button className='p-2 rounded-md hover:bg-gray-100 transition'>
              <Heart className='w-5 h-5 text-gray-600' />
            </button>
            <button className='p-2 rounded-md hover:bg-gray-100 transition'>
              <Scale className='w-5 h-5 text-gray-600' />
            </button>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition'>
            КУПИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};
