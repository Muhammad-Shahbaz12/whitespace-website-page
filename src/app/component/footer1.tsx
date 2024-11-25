import React from 'react'
import Image from 'next/image'

const Footer1 = () => {
  return (
    <div className='bg-[#043873] w-[100wh] h-[709px] top-[8375.84px] px-[32px] py-[140px]'>
        <div className='flex-wrap text-center   w-[608px] h-[500px] gap-[40px] flex items-center place-items-center justify-center mx-auto'>
            <div className=' flex flex-wrap text-center justify-center w-[590px] h-[262px] gap-[24px]'>
                <h1 className='text-white w-[608px] h-[112px] text-[52px] leading-[67.14px]  text-center font-bold tracking-[-2%] '>Try Whitepace today</h1>
                <p className=' text-white flex flex-wrap-reverse flex-row-reverse text-center items-center justify-center w-[550px] h-[1px] text-[24px] leading-[32px] font-normal tracking-[-2%]'>Get started for
                    Add your whole team as your needs grow.
                </p>
                <button className='text-white bg-[#4F9CF9] w-[214px] h-[62px] rounded-[8px] p-[20px] gap-[10px] '>Try Whitepace free</button>
               
            </div>
            <p className='text-white mt-[45px] w-[450px] h-[32px] text-[24px] leading-[32px] tracking-[-2%] font-normal '>On a big team? Contact sales </p>
           <div className='w-[260px] h-[60px] gap-[10px] flex flex-wrap'>
            <Image className='gap-[20px]'
            src={'/Group (2).png'}
            alt='Apple icon'
            width={60}
            height={60}
            />
               <Image className='mx-[20px]'
            src={'/Windows-logo 1.png'}
            alt='window icon'
            width={60}
            height={60}
            />
               <Image
            src={'/Group.png'}
            alt='android icon'
            width={60}
            height={60}
            />
            </div>
             </div>
    </div>
  )
}

export default Footer1