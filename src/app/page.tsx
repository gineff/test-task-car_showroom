import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gray-50 px-4 py-20'>
      {/* Hero Section */}
      <section className='max-w-2xl mx-auto text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-6'>Авто каталог</h1>
        <p className='text-gray-600 text-lg mb-8'>
          Просматривайте, фильтруйте и сортируйте автомобили по цене. Быстрый доступ к детальной
          информации и фотографиям.
        </p>
        <Link
          href='/show-room'
          className='inline-block bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition'>
          Перейти на страницу списка авто
        </Link>
      </section>

      {/* Project Description */}
      <section className='max-w-3xl mx-auto text-left text-gray-700 space-y-4'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>О проекте</h2>
        <p>
          Этот проект представляет собой демонстрационное приложение автосалона, созданное с
          использованием <strong>Next.js 15 App Router</strong>, <strong>React 19</strong> и{' '}
          <strong>TypeScript</strong>.
        </p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Пагинация и сортировка автомобилей с привязкой к URL (query params)</li>
          <li>Карточки авто с изображениями и подробностями</li>
          <li>Интеграция с публичным API (через proxy)</li>
          <li>Tailwind CSS для адаптивной верстки</li>
          <li>Компонентный подход с разделением ответственности</li>
        </ul>
        <p>
          Сортировка поддерживает направления: по цене по возрастанию, убыванию или без сортировки.
          При обновлении страницы все параметры сохраняются благодаря синхронизации с URL.
        </p>
      </section>
    </main>
  );
}
