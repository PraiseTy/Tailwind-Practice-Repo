import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const InputPage = () => {
    const [userInfo, setUserInfo] = useState({name: "", email: "", username: "", picture: ""});
    const [isDragging, setIsDragging] = useState(false);
    const navigate = useNavigate();


    const processFile = (file) => {
        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
            alert("Invalid file type. Only JPG and PNG are allowed.");
            return;
        }

        if (file.size > 500 * 1024) {
            alert("File size must be less than 500KB");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result?.toString();
            localStorage.setItem("userPicture", base64String);
            setUserInfo({...userInfo, picture: base64String});
        };
        reader.readAsDataURL(file);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        processFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        processFile(file);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate('/Ticket')
        setUserInfo({name: "", email: "", username: "", picture: ""});
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mt-8 '>
                <img src='/logo-full.svg' alt='logo' className='mx-auto'/>
            </div>
            <div className='my-8 text-center max-w-sm md:max-w-xl'>
                <h1 className='md:text-4xl text-3xl font-bold  '>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className='mt-5 text-neutral-light mx-auto w-2/3 md:w-full'>Secure your spot at this year's biggest
                    coding conference.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='w-full md:max-w-sm  space-y-4'>
                    <p className='mb-1'>Upload Avatar</p>
                    <div className={`bg-neutral-white/10 rounded-lg flex flex-col items-center py-3 border border-neutral-light/20 border-dashed border-2 ${isDragging ? "border-orange-primary" : "border-neutral-light/20"}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}>
                        <label className='text-neutral-light text-sm'>
                            <div className='bg-neutral-white/20 rounded-lg w-fit p-1 mb-2 mx-auto'>
                                <img src={userInfo.picture ? userInfo.picture : '/icon-upload.svg'} alt='upload' className='w-8'/>
                            </div>
                            <input type='file' accept="image/*" className="hidden" name='picture'
                                   onChange={handleFileUpload}/>
                            Drag and drop or click to Upload
                        </label>
                    </div>
                    <div className='flex space-x-2'>
                        <img src='/icon-info.svg' alt='info'/>
                        <p className='text-neutral-light text-xs'>Upload your photo (JNG or PNG, max-size: 500KB)</p>
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Full name</label>
                        <input type='text' name='name'
                               className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light pl-3'
                               value={userInfo.name} onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Email</label>
                        <input type='email' name='email' placeholder='example@email.com'
                               className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light pl-3'
                               value={userInfo.email} onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>GitHub</label>
                        <input type='text' name='username' placeholder='@username'
                               className='bg-neutral-white/10 rounded-md h-8 border border-neutral-light/20 focus:outline-none text-neutral-light pl-3'
                               value={userInfo.username} onChange={handleChange}/>
                    </div>
                    <button
                        className='w-full py-2 bg-orange-primary text-neutral-black font-bold rounded-lg hover:bg-orange-dark'>
                        Generate my Ticket
                    </button>
                </div>
            </form>
        </div>
    )
}
export default InputPage;
