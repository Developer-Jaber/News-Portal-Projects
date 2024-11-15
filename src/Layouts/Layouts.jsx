import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Marque from '../components/Marque/Marquee'
import Navber from '../components/Navber/Navber'
import LeftSideBer from '../components/LeftSideBer/LeftSideBer'
import RightSideBer from '../components/RightSideBer/RightSideBer'

const Layouts = () => {
  return (
    <body className='font-popins'>
      <header className='mx-auto w-9/12'>
        <Header></Header>
      </header>

      <section className='mx-auto w-10/12'>
        <Marque></Marque>
      </section>

      <nav className='mx-auto w-10/12'>
        <Navber></Navber>
      </nav>

      <main className='gap-5 grid grid-cols-12 mx-auto mt-16 w-10/12'>
        <aside className='col-span-3 text-center'>
          <LeftSideBer></LeftSideBer>
        </aside>
        <section className='col-span-6'>
            <Outlet></Outlet>
        </section>
        <aside className='col-span-3'>
            <RightSideBer></RightSideBer>
        </aside>
      </main>
    </body>
  )
}

export default Layouts
