import React from 'react'
import Navbar from './component/navbar'
import Herosection from './component/herosectin'
import Projectmanagement from './component/projectmangement'
import Customise from './component/customise'
import Plan from './component/plan'
import Extension from './component/use extension'
import Yourwork from './component/yourwork'
import Yourdata from './component/yourdata'
import Ourresponce from './component/ourresponce'
import Workwithyou from './component/workwithyou'
import Clientsay from './component/cliensay'
import Footer1 from './component/footer1'
import Footer from './component/footer'

const Homepage = () => { 
  return (
<main className='
w-[100wh] h-[1190px] top-[-6425px] left-[1875px]
'>'

  <Navbar/>
  <Herosection/>
  <Projectmanagement/>
  <Extension/>
  <Customise/>
  <Plan/>
  <Yourwork/>
  <Yourdata/>
  <Ourresponce/>
  <Workwithyou/>
  <Clientsay/>
  <Footer1/>
  <Footer/>

</main>
  )
}

export default Homepage

