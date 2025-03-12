import React from 'react'

const TicketPage = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const picture = localStorage.getItem('userPicture');

    return (
        <div className='flex flex-col justify-center items-center md:mx-none mx-4'>
            <div className='mt-8'>
                <img src='/logo-full.svg' alt='logo'/>
            </div>
            <div className='my-8 text-center max-w-sm md:max-w-xl'>
                <h1 className='md:text-4xl text-3xl font-bold max-w-xs mx-auto md:max-w-md'>Congrats, <span className='text-gradient'>{user.name}</span>! Your ticket is
                    ready </h1>
                <p className='mt-5 text-neutral-light mx-auto w-2/3 md:w-full max-w-sm'>We've emailed your ticket to <span
                    className='text-orange-primary'>{user.email}</span> and will send updates in the run up to the
                    event.</p>
            </div>
            <div className='relative mt-5'>
                <img src='/pattern-ticket.svg' alt='ticket'/>
                <div className='absolute top-4 left-3 md:top-7 md:left-5 md:space-y-3 space-y-1'>
                    <img src="/logo-full.svg" alt="logo"/>
                    <p className='text-neutral-medium pl-12'>Jan 31, 2025 / Austin, Tx</p>

                    <div className='flex md:pt-20 pt-3 items-center space-x-3'>
                        {picture &&
                                <img src={picture} alt='picture' className='w-12 md:w-18 rounded-md'/>
                            }
                        <div>
                            <p className='text-xl md:text-2xl '>{user.name} </p>
                            <div className='flex items-center text-neutral-light'><img src='/icon-github.svg' alt='github' className='pr-2'/>@{user.username}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default TicketPage;
