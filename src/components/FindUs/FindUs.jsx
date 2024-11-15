import { BsInstagram, BsTwitter } from "react-icons/bs"
import { GrGoogle } from "react-icons/gr"

const FindUs = () => {
  return (
    <div>
      <h1 className='my-5 font-bold text-2xl text-center'>Find Us</h1>
      <div className='join-vertical'>
        <button className='flex items-center border-2 bg-white w-full text-md btn'>
          <GrGoogle></GrGoogle>
          <span>Login With Google</span>
        </button>
        <button className='flex items-center border-2 bg-white w-full text-md btn'>
          <BsTwitter></BsTwitter>
          <span>Login With Twiter</span>
        </button>
        <button className='flex items-center border-2 bg-white w-full text-md btn'>
          <BsInstagram></BsInstagram>
          <span>Login With Instragram</span>
        </button>
      </div>
    </div>
  )
}

export default FindUs
