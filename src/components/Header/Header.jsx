import moment from 'moment'
import logo from '../../img/logo.png'
const Header = () => {
  return (
    <div className='py-3 hero'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <img src={logo} alt="" />
          <p className='py-3'>Journalism Without Fear or Favour</p>
          <p>{moment().format('LLLL')}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
