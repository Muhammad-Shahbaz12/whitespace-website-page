import React from 'react'
import Image from 'next/image'
const Projectmanagement = () => {
  return (
    <div className='w-[100wh] h-[1370px] top-[749px] px-[85px] py-[140px] gap-[60px] '>
        <div className='w-[1376px] h-[448px] flex flex-wrap'>
            <div className='w-[657px] h-[411px] gap-[60px]'>
                <h1 className='w-[657px] h-[174px] font-bold text-[72px] leading-[87.14px] font-sans mb-[45px]'>Project Management</h1>
                <p className='w-[630px] h-[90px] text-[18px] font-sans leading-[30px]  '>images,video,PDF and audio files are supported.Create math expressions and diagrams 
                    directly from the app.Take photos with mobile app and save them to a note</p>
                    <button className='bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-[20px] gap-[10px] mt-[45px] '>Try Whitepace free</button>

            </div>
            <div className='w-[550px] h-[400px] bg-[#C4DEFD] '></div>
        </div>
        <div className=' w-[1400px] h-[661px] gap-[100px] mt-[75px] flex flex-wrap '>
            <div>
                <Image className='mt-[45px] w-fit '
                src={"/Work Together Image.png"}
                alt='image for orbit'
                width={500}
                height={542.76}
                />
            </div>
            <div  className='w-[600px] h-[334px] gap-[50px]  mt-[145px] right-0 '>
                <h1 className='w-[550px] h-[150px] text-[72px] leading-[]'>Work together</h1>
                <p className='w-[500px] h-[90px] text-[18px] leading-[30px] text-[#212529]'>With whitespace share your notes with your collagues and collaborates on them.You can also publish a not to the internet and share the URL.With other.</p>
                <button className='bg-[#4F9CF9] w-[219px] h-[53px] rounded-[8px] p-[10px] gap-[10px] mt-[45px]'>Try Whitepace free</button>

            </div> 
        </div>

    </div>
  )
}

export default Projectmanagement