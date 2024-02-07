import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoRocketOutline } from 'react-icons/io5';
import { SideMenuItem } from './SideMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subTitle: 'Visualizacion de informes y estadisticas',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={30} />,
    title: 'Counter',
    subTitle: 'Contador Cliente Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={30} />,
    title: 'Pokemons',
    subTitle: 'Generacion Estatica',
  },
]

export const Sidebar = () => {
  return (
    <div id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">

      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoRocketOutline className='mr-2' />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-4 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="user avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Alex Colombo
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-3">
        {menuItems.map(item => <SideMenuItem key={item.path} {...item} />)}
      </div>
    </div>
  )
}
