import React from 'react'
import Image from 'next/image'
const Yourdata = () => {
  return (
    <div className='w-[100wh] h-[661.13px] px-[85px] py-[140px]  top-[5503.45px] '>
        <div className='w-[1336px] h-[381.13px] flex flex-wrap  '>
            <div className='w-[655px] h-[324px] gap-[60px]'>
                <div className='w-[655px] h-[201px] gap-[24px]'>
                    <div className='w-[655px] h-[87px] '>
                        <h1 className='text-[72px] leading-[87.14px] font-bold letter-spacing-[-2%] '>100% <span>Your data</span></h1>
                        
                        <div className='w-[655px] h-[158px]'>
                            <Image className='bold justify-end  items-end ms-[155px]  flex flex-row-reverse left-0'
                             src={"/rd.png"}
                             alt='border image'
                             width={381}
                             height={381.13}
                            />
                        </div>
                    </div>
                        <div className='w-[600px] h-[90px] my-[45px]'>
                            <p className='text-[18] leading-[30px] font-normal tracking-[-2%]'>The app is open source and your notes are saved to an open format,so you'll
                            always have access to them.Uses End-to-End Encryption (E2EE) to secure your notes 
                                you notes and ensure no-one but yourself can access them.
                            </p>
                    </div>

                </div>
                
                <button className='bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-[20px] gap-[10px]  mt-[85px]'>Read more</button>
           
            </div>
            <Image className=' border-[#A7CEFC]'
            src={"/Element.png"}
            alt='the image from 100% dev image'
            width={600}
            height={381.13}
            
            />
            
        </div>
    </div>
  )
}

export default Yourdata