import React from 'react';

export default function Login() {
    return <div 
    style={{ backgroundImage: `url('/background.jpg')` }}
    className='bg-cover bg-center bg-no-repeat text-white opacity-80'>
        <div className='flex min-h-screen items-center justify-center py-2'>
        <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-sm text-gray-500'>
                    New to the app? {' '}
                    <a href="#" className='text-red-500 hover:underline'>Register</a>
                </p>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder='Enter your email' />
            </div>
        </form>

        </div>
        </div>
} 