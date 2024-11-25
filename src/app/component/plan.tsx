import React from 'react'
import Image from 'next/image'
const Plan = () => {
  return (
    <div className=' w-[100wh] h-[980px] gap-[60px] px-[85px] py-[60px] top-[2879px]'>
        <div className='w-[1336px] h-[992px] gap-[60px] '>
            <div className='w-[1336px] h-[171px] gap-[24px] '>
            <h1 className='w-[1320px] h-[87px] text-[72px] letter-spacing-[-2%] text-bold text-center leading-[87.47px]'>Choose Your Plan</h1>
            <p className='w-[900px]  h-[60px] text-[18px] letter-spacing-[-2%] text-normal text-center leading-[30px]
            justive-center mx-auto'>Whether you want to get organised,keep your personal life on
                 track, or boost wrkplace productivity,Evernote has the right plan for you</p>
        </div>
            <div className='w-[1336px] h-[761px] mx-[45px]  '>
            <Image className=''
            src={"/Price list.png"}
            alt='price list'
            width={1100}
            height={761}
            />
            </div>
        
        </div>
    </div>
  )
}

export default Plan