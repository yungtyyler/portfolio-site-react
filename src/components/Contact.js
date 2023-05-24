 const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Get in touch with me using the form below!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form
                        action='https://getform.io/f/e2ee28cb-fb90-4ed7-9782-1b89de366d44'
                        method='POST'
                        className='flex flex-col w-full md:w-1/2'
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Enter your email address'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                        />
                        <textarea
                            name='message'
                            placeholder='Enter message here'
                            rows='10'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button className='text-white bg-green-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;