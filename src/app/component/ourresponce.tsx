import React from 'react'
import Image from 'next/image'

const Ourresponce = () => {
  return (
    <div className='  w-[100wh] h-[538px] top-[6164.58px] px-[85px] py-[20px]'>
        <div className='w-[1337px] h-[258px] gap-[100px] '>
            <div className='w-[1100px] h-[87px]'>
            <h1 className='text-[72px] flex text-center items-center justify-center leading-[87.14px] font-bold tracking-[-2%]'>Our Sponsors</h1>
            
            <div className='w-[655px] h-[158px] '>
                            <Image className='bold justify-end  items-end ms-[430px]  flex flex-row-reverse left-0'
                             src={"/rd.png"}
                             alt='border image'
                             width={381}
                             height={381.13}
                            />
                    </div>
            </div>
            <Image className=' mt-[85px]'
            src={"/sponsors.png"}
            alt='icon images'
            width={1200}
            height={71}
            />
        </div>
       
    </div>
  )
}

export default Ourresponce