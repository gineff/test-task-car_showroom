import Image from 'next/image';
import Link from 'next/link';

export const Header = async () => {
  return (
    <header className='absolute w-full bg-white shadow-md top-0 left-0'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold text-gray-800'>
          <Link href='/' title='Перейти на главную страницу'>
            <span className='flex items-center gap-2'>
              <Image aria-hidden src='/car.svg' alt='File icon' width={52} height={52} />
              ShR
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
