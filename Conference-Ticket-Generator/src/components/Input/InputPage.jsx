import React from 'react'

const InputPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mt-10'>
                <img src='/logo-full.svg' alt='logo'/>
            </div>
            <div className='mt-10 mb-8 text-center'>
                <h1 className='text-4xl font-bold max-w-xl'>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className='mt-5 text-neutral-light'>Secure your spot at this year's biggest coding conference.</p>
            </div>
            <form>
                <div className='max-w-sm space-y-4'>
                    <label className='mb-1'>Upload Avatar</label>
                    <div className='bg-neutral-white/10 rounded-lg flex flex-col items-center py-3 border border-neutral-light/20 border-dashed border-2'>
                        <label className='text-neutral-light text-sm'>
                            <div className='bg-neutral-white/20 rounded-lg w-fit p-1 mb-2 mx-auto'>
                                <img src='/icon-upload.svg' alt='upload'/>
                            </div>
                            <input type='file' accept="image/*" className="hidden"/>
                            Drag and drop or click to Upload
                        </label>
                    </div>
                    <div className='flex space-x-2'>
                        <img src='/icon-info.svg' alt='info'/>
                        <p className='text-neutral-light text-xs'>Upload your photo (JNG or PNG, max-size: 500KB)</p>
                    </div>
                    <div className='flex flex-col'>
                        <label>Full name</label>
                        <input type='text' name='name'
                               className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light' />
                    </div>
                    <div className='flex flex-col'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='example@email.com' className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light'/>
                    </div>
                    <div className='flex flex-col'>
                        <label>GitHub</label>
                        <input type='text' name='username' placeholder='@username'
                               className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light'/>
                    </div>
                    <button className=' w-full py-2 bg-orange-primary text-neutral-black font-bold rounded-lg'>
                        Generate my Ticket
                    </button>


                </div>
            </form>
        </div>
    )
}
export default InputPage;
