import React from 'react'
import Image from 'next/image'
const Workwithyou = () => {
  return (
  <div className='bg-[#043873]  w-[100wh] h-[750.8px] top-[6702.58px] px-[45px] py-[140px]'>
    <div className='w-[1336px] h-[470px] gap-[100px]  flex flex-wrap'>
    <Image className=''
        src={'/Apps.png'}
        alt='icon combination'
        height={400}
        width={582}
        />
       
        <div className='w-[654px] h-[345px] gap-[24px] '>
            <div className='w-[600px] h-[261px]'>
                <h1 className='text-white text-[62px] font-bold leading-[87.14px] tracking-[-2%]'>
                    Work with your facorite Apps Using Whitepace
                </h1>
            </div>
            <div className='w-[550px] h-[60px] my-[35px]'>
                <p className=' text-white text-[18px] leading-[30px] tracking-[-2%] font-normal'>Whitepace teams up with your favorite software .Integrate with over 1000+ apps with Zapier to have al the tools your need for your project success</p>
            </div>
            <button className='text-white mt-[25px] bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-[20px] gap-[10px] '>Read now</button>

        </div>
       
    </div>
  
  </div>
  )
}

export default Workwithyou