import Baylor from '../assets/schools/baylor.png';
import NU from '../assets/schools/nationalUniversity.png';
import Nucamp from '../assets/schools/nucamp.png';

const Education = () => {

    const educations = [
        {
            id: 1,
            school: 'Baylor University',
            degree: 'BS in Environmental Science',
            year: '2016 - 2020',
            src: Baylor,
            alt: 'Baylor University',
        },
        {
            id: 2,
            school: 'National University',
            degree: 'MA in Educaiton',
            year: '2020 - 2021',
            src: NU,
            alt: 'National University',
        },
        {
            id: 3,
            school: 'Nucamp Coding Bootcamp',
            degree: 'Backend, SQL, and DevOps with Python',
            year: '2022 - 2023',
            src: Nucamp,
            alt: 'Nucamp Coding Bootcamp',
        },
        {
            id: 4,
            school: 'Nucamp Coding Bootcamp',
            degree: 'Full Stack Web & Mobile Development',
            year: '2023 - current',
            src: Nucamp,
            alt: 'Nucamp Coding Bootcamp',
        }
    ]

    return (
        <div name='education' className='w-full h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
                    <p className='py-6'>My educational background</p>
                </div>
                    
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>
                    {educations.map(({ id, school, degree, year, src, alt }) => {
                        return(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <div className='flex justify-center items-center'>
                                    <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105'></img>
                                </div>
                                <div className='flex items-center justify-center p-3 bg-gradient-to-b from-black via-black text-lg font-semibold'>
                                    <p>{school} - {degree}</p>
                                </div>
                                <div className='flex items-center justify-center text-center'>
                                    <p>{year}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Education;