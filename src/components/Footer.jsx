import React from 'react'

const Footer = () => {
    return (
        <div className='h-[8vh] w-screen bg-light-secondary dark:bg-dark-primary flex justify-center items-center'>
            <p className='text-center capitalize text-dark-secondary dark:text-light-primary font-semibold'>made by <a href="https://deelolade-portfolio.vercel.app/" target='_blank' className='hover:underline hover:italic'>deelolade</a> </p>
        </div>
    )
}

export default Footer
