import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='bg-[#043873] w-[100wh] h-[92px] space-x-1  py-[20px] px-[32px]  '>
        <div className='xl:w-[1337.5px]   xl:gap-[218px] flex flex-wrap'>
        <Image className=''
        src={'/Logo.png'}
        alt='logo'
        width={191 }
        height={34}
        />
        <div className='w-[928.5px] h-[60px]  flex flex-row '>
            <div className=' w-[551.5px] h-[23px] gap-[32px]  flex flex-wrap py-5  '>
            <div className='text-white w-[97px] h-[23px] gap-[10px] hover:bg-white hover:text-black hover:text-center hover:rounded-md'><a href=".Product">Products</a> </div>
            <div className='text-white w-[97px] h-[23px] gap-[10px]  hover:bg-white hover:text-black hover:text-center hover:rounded-md'> <a href=".Solutions">Solution</a></div>
            <div className='text-white w-[97px] h-[23px] gap-[10px] hover:bg-white hover:text-black hover:text-center hover:rounded-md'><a href=".Resourse">Resource</a></div>
            <div className='text-white w-[97px] h-[23px] gap-[10px] hover:bg-white hover:text-black hover:text-center hover:rounded-md'><a href=".Pricing">Pricing</a></div>
            

            </div>
           
            <div className='w-[330px]  h-[60px] gap-[24px]  flex flex-row'>
                <button className='bg-[#FFE492] w-[120px] h-[60px] rounded-[8px] '>Login</button>
                <button className='w-[220px] h-[60px] rounded-[8px] px-[40px] py-[16px] text-[14px]  bg-[#4F9CF9]'>Try Whitepace free</button>
            </div>

            
        </div>
        
       



        </div>
    
    </div>
  )
}

export default Navbar