import heroImage from '../assets/heroimage.jpg';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link } from 'react-scroll/modules';

const Home = () => {
  return (
    <div 
        name='home'
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have a passion for creating esthetic, responsive, and functional websites, and applications.<br />Providing innovative solutions to complex problems is what I do.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-700 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <TbArrowNarrowRight size={20} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img 
                    src={heroImage}
                    alt='My Professional Headshot'
                    className='rounded-2xl mx-auto w-2/3 md:w-2/3' />
            </div>
        </div>
    </div>
  );
};

export default Home;