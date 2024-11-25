import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=' bg-[#043873] w-[100wh] h-[350px] top-[9084.84px] px-[30px] gap-[70px] py-[140px]'>
        <div className='w-[1336px] h-[302px]'>
            <div className='w-[1400px] h-[182px] gap-[100px] flex flex-wrap'>
                <div className='w-[240px] h-[169px] gap-[15px]'>
                    <Image
                    src={'/Logo.png'}
                    alt=''
                    width={191}
                    height={24}/>
                    <p className='py-[5px]  text-white w-[240px] h-[120px]  text-[18px] leading-[30px] font-normal tracking-[-2%]'>
                        Whitepace was created for the new ways we live and work. We make a batter workspace around the world
                    </p>

                </div>
                <div className=' w-[130px] h-[135px]  gap-[16px]'>
                    <h1 className=' text-white w-[170px] h-[22px]  text-[18px] leading-[21.78px] tracking-[-2%] font-bold'>Product</h1>
                    <h2  className=' text-white w-[170px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Overview</h2>
                    <h2  className=' text-white w-[170px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>pricing</h2>
                    <h2  className='  text-white w-[170px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Coustomer stories</h2>

                </div>
                <div className='  text-whitew-[120px] h-[130px] gap-[16px]'>
                    <h1 className='     text-[#FFFFFF]  w-[83px] h-[22px]  text-[18px] leading-[21.78px] tracking-[-2%] font-bold'>Resources</h1>
                    <h2  className='text-[#FFFFFF] w-[130px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Blog</h2>
                    <h2  className='text-[#FFFFFF] w-[130px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Guides & turtorial</h2>
                    <h2  className=' text-[#FFFFFF]  w-[130px] h-[20px]  text-[8px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Help Center</h2>

                </div>
                <div className=' text-white w-[99px] h-[130px] gap-[16px]'>
                    <h1 className=' text-[#FFFFFF]  w-[130px] h-[22px]  text-[18px] leading-[21.78px] tracking-[-2%] font-bold'>Company</h1>
                    <h2  className=' text-[#FFFFFF] w-[130px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>About Us</h2>
                    <h2  className=' text-[#FFFFFF]  w-[130px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Careers</h2>
                    <h2  className=' text-[#FFFFFF] w-[130px] h-[20px]  text-[16px] leading-[20px] tracking-[-2%] font-normal mt-[10px]'>Media kit</h2>

                </div>
                <div className='w-[200px] h-[182px] gap-[22px]'>
                    <h1 className='text-[#FFFFFF] w-[155px] h-[36px] text-[28px] font-bold leading-[36px] tracking-[-2%]'>Try it Today</h1>
                    <p className='text-[#FFFFFF] w-[259px] h-[40px] text-[16px] font-normal leading-[20px] tracking-[-2%] mt-[10px]'>Get started for free.Add yourwhole team as your needs grow.</p>
                    <button className='text-[#FFFFFF] bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-[20px] gap-[10px] mt-[10px]'>Try Whitepace free</button>


                </div>
            
                

            </div>

                <div className='w-[1336px] h-[20px] gap-[150px] flex flex-wrap'>
                    <div className='w-[104px] h-[20px] gap-[60px]'>
                        <Image className='w-fit'
                        src={'/Language.png'}
                        alt='English text image'
                        width={104}
                        height={20}
                        />

                    </div>
                    <div className='w-[177px] h-[20px]'>
                    <h1 className='text-[#FFFFFF] text-[16px] font-normal tracking-[-2%] leading-[20px]'>
                        Terms & Privacy
                    </h1>
                    </div>
                    <div className='w-[60px] h-[20px] '>
                        <h1 className='text-[#FFFFFF] text-[16px] font-normal tracking-[-2%] leading-[20px]'>Secority</h1>
                    </div>
                    <div className='w-[47px] h-[20px] '>
                        <h1 className='text-[#FFFFFF] text-[16px] font-normal tracking-[-2%] leading-[20px]'>Status</h1>
                    </div>
                    <div className='w-[169px] h-[20px] gap-[60px]'>
                        <Image className='w-fit'
                        src={'/©2021..png'}
                        alt='English text image'
                        width={104}
                        height={20}
                        />

                    </div>



                </div>




        </div>

    </div>
  )
}

export default Footer