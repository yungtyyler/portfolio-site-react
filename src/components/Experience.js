import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import reactPNG from '../assets/react.png';
import Node from '../assets/node.png';
import Bootstrap from '../assets/bootstrap.png';
import Python from '../assets/python.png';
import Django from '../assets/django.png';
import PostgreSQL from '../assets/postgresql.png';
import cSharp from '../assets/cSharp.png';
import GitHub from '../assets/github.png';
import Docker from '../assets/docker.png';

const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: HTML,
            alt: 'HTML',
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            alt: 'CSS',
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavaScript,
            alt: 'JavaScript',
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactPNG,
            alt: 'React',
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Node,
            alt: 'Node',
            title: 'Node.js',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: Bootstrap,
            alt: 'Bootstrap',
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: Python,
            alt: 'Python',
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: Django,
            alt: 'Django',
            title: 'Django',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: PostgreSQL,
            alt: 'PostgreSQL',
            title: 'PostgreSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: cSharp,
            alt: 'C#',
            title: 'C#',
            style: 'shadow-purple-500'
        },
        {
            id: 11,
            src: GitHub,
            alt: 'GitHub',
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 12,
            src: Docker,
            alt: 'Docker',
            title: 'Docker',
            style: 'shadow-blue-500'
        }
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>My most used languages and technologies</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies.map(({ id, src, alt, title, style }) => {
                        return(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={alt} className='w-20 mx-auto'></img>
                                <p className='mt-4'>{title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;