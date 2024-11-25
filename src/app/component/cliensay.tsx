import React from 'react'
import Image from 'next/image'

const Clientsay = () => {
  return (
    <div className=' w-[100wh] h-[1100px] top-[7453.38px] px-[45px] py-[80px] flex flex-wrap '>
        <div className='w-[1336px] h-[842.46px] gap-[40px]  mx-auto px-[45px]  flex flex-wrap  '>
            <div className='w-[1250px] h-[84px]'>
               
                <h1 className='text-[70px] leading-[84px] font-bold flex   px-[15px] items-center justify-center'>What Our Clients Says</h1>
                 
            </div>
            <Image
           src={'/Client (3).png'}
           alt='client'
           width={350}
           height={250}/>
           
            <Image
           src={'/Client (1).png'}
           alt='client'
           width={350}
           height={250}/>
        
            <Image
           src={'/Client.png'}
           alt='client'
           width={350}
           height={250}/>
        
           
    </div>
    </div>

  )
}

export default Clientsay