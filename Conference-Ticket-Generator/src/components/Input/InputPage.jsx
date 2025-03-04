import React from 'react'

const InputPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mt-10'>
                <img src='/logo-full.svg' alt='logo'/>
            </div>
            <div>
                <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p>Secure your spot at this year's biggest coding conference</p>
            </div>
            <form>
                <div>
                    <label>Upload Picture</label>
                    <div>
                        <label>
                            <div>
                                <img src='/icon-upload.svg' alt='upload'/>
                            </div>
                            <input type='file' accept="image/*" className="hidden"/>
                            Drag and Drop or Click to Upload
                        </label>
                    </div>
                    <div>
                        <img src='/icon-info.svg' alt='info'/>
                        <p>Upload your photo (JNG or PNG, max-size: 500KB)</p>
                    </div>
                    <div>
                        <label>Full name</label>
                        <input type='text' name='name'/>
                    </div>
                    <div>
                        <label>GitHub</label>
                        <input type='text' name='username' placeholder='@username'/>
                    </div>
                    <button>
                        Generate my Ticket
                    </button>


                </div>
            </form>
        </div>
    )
}
export default InputPage;
