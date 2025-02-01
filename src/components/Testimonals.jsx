import star from '../assets/images/Stars.png'
import avatar from '../assets/images/Avatar Image.png'
import A2 from '../assets/images/A2.png'
import A3 from '../assets/images/A3.png'


  
  export default function Testimonal() {
    return (
      <div className="bg-[#F5FCFF] py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            
            <p className="mt-2 font-semibold font-pri text-[21px] text-[#282938] text-lg/8 text-gray-600">Client's Feedback</p>
            <h2 className="text-4xl  !text-[#282938] !text-[64px] !font-bold tracking-tight text-pretty font-pri sm:text-5xl">Customer Testimonals</h2>
          </div>

     

          <div className="mx-auto gap-4 mt-10 flex max-w-2xl     pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3  ">
            
              <article className="flex max-w-xl flex-col items-start p-5 rounded-md w-[417px] border-1 border-[#006B6A] ">
        <div>
            <img src={star} alt="" className='w-[154px] h-[25px]'/>
        </div>
                
              <div> 
                  <p className="mt-8 h-[125px] font-normal line-clamp-3 text-[16px] font-pri text-sm/6 text-[#1C1E53]"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                  </div>   

                  <div className='flex gap-4 items-center'>
                    <img src={avatar} alt="" className=' w-[74px] h-[74px] '/>
                    <div className='font-pri text-[14px]'>
                        <h6 className='font-semibold text-[#282938] '>Dianne Russell</h6>
                        <p className='font-normal text-[#1C1E53]'>Starbucks</p>
                    </div>
                  </div>
             
              </article>

              <article className="flex max-w-xl flex-col items-start p-5 rounded-md w-[417px] border-1 border-[#006B6A] ">
        <div>
            <img src={star} alt="" className='w-[154px] h-[25px]'/>
        </div>
                
              <div> 
                  <p className="mt-8 h-[125px] font-normal line-clamp-3 text-[16px] font-pri text-sm/6 text-[#1C1E53]"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                  </div>   

                  <div className='flex gap-4 items-center'>
                    <img src={A2} alt="" className=' w-[74px] h-[74px] '/>
                    <div className='font-pri text-[14px]'>
                        <h6 className='font-semibold text-[#282938] '>Kristin Watson</h6>
                        <p className='font-normal text-[#1C1E53]'>Louis Vuitton</p>
                    </div>
                  </div>
             
              </article>

              <article className="flex max-w-xl flex-col items-start p-5 rounded-md  w-[417px] border-1 border-[#006B6A] ">
        <div>
            <img src={star} alt="" className='w-[154px] h-[25px]'/>
        </div>
                
              <div> 
                  <p className="mt-8 h-[125px] font-normal line-clamp-3 text-[16px] font-pri text-sm/6 text-[#1C1E53]"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                  </div>   

                  <div className='flex gap-4 items-center'>
                    <img src={A3} alt="" className=' w-[74px] h-[74px] '/>
                    <div className='font-pri text-[14px]'>
                        <h6 className='font-semibold text-[#282938] '>Kathryn Murphy</h6>
                        <p className='font-normal text-[#1C1E53]'>McDonald's</p>
                    </div>
                  </div>
             
              </article>


              


             
            
            
          </div>









          </div>

        </div>
     
    )
  }
  