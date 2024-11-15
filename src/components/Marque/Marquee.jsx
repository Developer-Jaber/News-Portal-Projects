import Marquee from 'react-fast-marquee'

const Marque = () => {
  return (
    <div className='flex bg-slate-300 py-2 p-2'>
      <span className='bg-[#D72050] px-3 py-2 text-white'>Latest</span>
      <Marquee className='text-lg'>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  )
}

export default Marque
