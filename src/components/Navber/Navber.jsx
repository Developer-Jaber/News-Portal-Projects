import { NavLink } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";

const Navber = () => {
    const link = <>
        <NavLink className='btn' to='/'>Home</NavLink>
        <NavLink className='btn' to='/'>About</NavLink>
        <NavLink className='btn' to='/'>Career</NavLink>
    </>
  return (
    <div className='bg-base-100 my-5 navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='z-[1] gap-4 bg-base-100 shadow mt-3 p-2 rounded-box w-52 text-xl dropdown-content menu menu-sm'
          >
            {
                link
            }
          </ul>
        </div>
        <a className='text-xl btn btn-ghost'></a>
      </div>
      <div className='lg:flex hidden navbar-center'>
        <ul className='gap-4 px-1 text-xl menu menu-horizontal'>
          {
            link
          }
        </ul>
      </div>
      <div className='navbar-end'>
        <ul className="flex items-center">
            <li><button className='text-5xl'><FaRegUserCircle ></FaRegUserCircle></button></li>
            <li><button className='bg-gray-600 ml-3 px-6 py-3 rounded-sm text-white texl-xl'>Login</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navber
