import React, { useState } from 'react';
import { BG_URl } from './utils/constants';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            {' '}
            <div className=' h-full absolute w-full flex justify-center'>
              <div className='overflow-hidden'>
                <img alt='img' src={BG_URl} />
              </div>
              <form
                className=' bg-black bg-opacity-75 shadow-2xl rounded-lg  w-3/12 h-[500px] mt-40 z-10 absolute '
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                {' '}
                <h2 className='text-white'>Personal Information</h2>{' '}
                <div className='mt-16 '>
                  {' '}
                  <input
                    className=' p-4 m-2 w-9/12  border-none text-black rounded-sm'
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    placeholder='First Name'
                    required
                  />
                  <br />
                  <input
                    className=' p-4 mt-10 w-9/12  border-none text-black rounded-sm'
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Last Name '
                    required
                  />
                </div>
                <br />
                <button
                  className='p-3 mt-16 border-none rounded-lg bg-green-500 w-8/12 text-white text-xl hover:bg-green-400'
                  type='submit'
                >
                  Proceed ➤
                </button>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            {' '}
            <div className=' h-full absolute w-full flex justify-center'>
              <div className='overflow-hidden'>
                <img alt='img' src={BG_URl} />
              </div>
              <form
                className=' bg-black bg-opacity-75 shadow-2xl rounded-lg  w-3/12 h-[500px] mt-40 z-10 absolute '
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                <h2 className='text-white'> Contact Information</h2>
                <div className='mt-16'>
                  {' '}
                  <input
                    className=' p-4 m-2 w-9/12  border-none text-black rounded-sm '
                    type='email'
                    name='email'
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <button
                  className='p-3 mt-16 border-none rounded-lg bg-red-700 w-8/12 text-white text-xl hover:bg-red-500'
                  onClick={prevStep}
                >
                  ☜ Previous
                </button>{' '}
                <br />
                <button
                  className='p-3 mt-16 border-none rounded-lg bg-green-500 w-8/12 text-white text-xl hover:bg-green-400'
                  type='submit'
                >
                  Proceed ➤
                </button>
              </form>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className=' h-full absolute w-full flex justify-center'>
              <div className='overflow-hidden'>
                <img alt='img' src={BG_URl} />
              </div>{' '}
              <form
                className=' bg-black bg-opacity-75 shadow-2xl rounded-lg  w-3/12 h-[500px] mt-40 z-10 absolute '
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                {' '}
                <h2 className='text-white'>Password</h2>
                <div className='mt-16'>
                  {' '}
                  <input
                    className=' p-4 m-2 w-9/12  border-none text-black rounded-sm text-lg'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <button
                  className='p-3 mt-16 border-none rounded-lg bg-red-700 w-8/12 text-white text-xl hover:bg-red-500'
                  onClick={prevStep}
                >
                  ☜ Previous
                </button>{' '}
                <br />
                <button
                  className='p-3 mt-16 border-none rounded-lg bg-green-500 w-8/12 text-white text-xl hover:bg-green-400'
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            {' '}
            <div className=' h-full absolute w-full bg-gray-400 flex justify-center'>
              <div className='overflow-hidden bg-black w-screen'>
                <div className='bg-black absolute z-2 w-screen'></div>
                <iframe
                  className='w-screen aspect-video'
                  src='https://www.youtube.com/embed/QcyPRFpkYak?si=QeWGLoCHxvkFNSQ5&amp;controls=0&amp;start=3&autoplay=1'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default MultiStepForm;
