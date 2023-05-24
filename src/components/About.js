const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
                </div>
                    
                <p className='text-xl mt-20'>
                    Welcome to my portfolio webpage! I am a passionate software engineer and web developer based in Southern California. With a solid educational background consisting of both Bachelor's and Master's degrees, along with multiple web development and backend programming certificates, I have acquired a comprehensive skill set to tackle diverse challenges. Previously, I worked as an academic research scientist and production chemist, where I developed a strong attention to detail and an analytical mindset. Now, as a software engineer and web developer, I combine my scientific background with my love for technology to create innovative solutions.
                </p>

                <br />

                <p className='text-xl'>
                    One of my recent projects involved collaborating with a local pet shop to automate redundant processes and revamp their ecommerce website. It has been incredibly fulfilling to leverage my expertise in full stack programming, particularly in technologies like Django and React, to enhance their online presence and streamline their operations. In addition, I am an independent game developer, utilizing C# to script game mechanics and building games in the Unity Engine. This allows me to express my creativity while exploring new avenues of software development.
                </p>

                <br />

                <p className='text-xl'>
                    I am driven by a strong desire to continue growing as a professional and to contribute my skills to meaningful projects. My goal is to create exceptional user experiences and deliver robust, efficient solutions that exceed client expectations. If you are looking for a dedicated and versatile software engineer with a passion for full stack development and game programming, I would be thrilled to discuss potential collaborations or employment opportunities with you. Thank you for taking the time to learn more about me. Please explore my portfolio to discover my projects, experience, and the value I can bring to your organization or project. I look forward to connecting with you soon!
                </p>
            </div>
        </div>
    );
};

export default About;