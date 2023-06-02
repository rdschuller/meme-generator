import drake from '../assets/drake.png'

export default function Navbar() {
    return (
      <nav className='w-full bg-gradient-to-r from-purple-400 to bg-purple-700 items-center px-8 py-6 flex gap-2 justify-between font-karla text-white'>
        <div className='flex gap-3 items-center'>
            <img src={drake} alt="airbnb logo" className='w-12'/>
            <h1 className='uppercase text-2xl font-bold text-white'>meme generator</h1>
        </div>
        <h3 className='text-lg font-semibold'>React Course - Project 3</h3>
      </nav>
    )
  }
  