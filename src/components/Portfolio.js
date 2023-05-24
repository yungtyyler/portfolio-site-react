import bootstrapFindMyTrail from '../assets/portfolio/bootstrapFindMyTrail.png';
import findMyTrailReact from '../assets/portfolio/findMyTrailReact.png';
import nflDatabase from '../assets/portfolio/nflDatabase.png';
import skuGenerator from '../assets/portfolio/skuGenerator.png';
import toDoList from '../assets/portfolio/toDoList.png';
import topMusicCharts from '../assets/portfolio/topMusicCharts.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: bootstrapFindMyTrail,
            alt: 'Find My Trail Bootstrap',
            name: 'Find My Trail Bootstrap',
            code: 'https://github.com/yungtyyler/find-my-trail-app',
            demo: 'https://find-my-trail.netlify.app/',
            target: '_blank'
        },
        {
            id: 2,
            src: findMyTrailReact,
            alt: 'Find My Trail React',
            name: 'Find My Trail React (In Progress)',
            code: 'https://github.com/yungtyyler/find-my-trail-react',
            demo: null,
            target: '_blank'
        },
        {
            id: 3,
            src: nflDatabase,
            alt: 'NFL Database',
            name: 'NFL Regular Season Database',
            code: 'https://github.com/yungtyyler/NFL-Regular-Season-Statistics-Database-Final-Project',
            demo: null,
            target: '_blank'
        },
        {
            id: 4,
            src: skuGenerator,
            alt: 'SKU Generator',
            name: 'Custom SKU Generator',
            code: 'https://github.com/yungtyyler/skuGenerator',
            demo: 'https://skugenerator.netlify.app/',
            target: '_blank'
        },
        {
            id: 5,
            src: toDoList,
            alt: 'To Do List',
            name: 'To-Do List',
            code: 'https://github.com/yungtyyler/todo-list',
            demo: 'https://todolist-tyler-varzeas.netlify.app/',
            target: '_blank'
        },
        {
            id: 6,
            src: topMusicCharts,
            alt: 'Top Music Charts Django App',
            name: 'Top Music Charts Django App',
            code: 'https://github.com/yungtyyler/music_charts_site',
            demo: null,
            target: '_blank'
        }
    ]

    return (
        <div 
            name='portfolio'
            className='bg-gray-800 w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Porfolio</p>
                    <p className='py-6'>Some of my favorite projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, alt, name, code, demo, target }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105'></img>
                                <div className='flex items-center justify-center p-3 bg-gray-800 text-lg font-semibold'>
                                    <p>{name}</p>
                                </div>
                                <div className='flex items-center justify-center text-center'>
                                    {demo === null ? 
                                        <p className='w-full px-6 py-3 m-4'>
                                            No Demo
                                        </p> 
                                        : <a href={demo} target={target} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                            Demo
                                        </a>
                                    }
                                    <a href={code} target={target} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;