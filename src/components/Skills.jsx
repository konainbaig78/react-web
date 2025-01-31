import product from '../assets/images/product.png'
import tag from '../assets/images/tag 1.png'
import feather from '../assets/images/feather-pen 1.png'
import code from '../assets/images/code.png'



  
  export default function Skills() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            
            <p className="mt-2 font-semibold font-pri text-[21px] text-[#282938] text-lg/8 text-gray-600">My Skills</p>
            <h2 className="text-4xl  !text-[#282938] !text-[64px] !font-bold tracking-tight text-pretty font-pri sm:text-5xl">My Expertise</h2>
          </div>

     

          <div className="mx-auto gap-4 mt-10 flex max-w-2xl     pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3  ">
            
              <article className="flex max-w-xl flex-col items-start  border-b-4 border-[#5E3BEE] rounded-b-lg gap-[23px] w-[299px] ">
                <div className="flex items-center gap-x-4 text-xs">
               
                  <img src={product} alt="product" className='w-[53px] h-[53px]' />
                </div>
                <div className="group flex flex-col gap-[3px] relative">
                  <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938] group-hover:text-gray-600">
                   
                  Strategy & Direction
                  </h3>
                  <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[17px] font-pri text-sm/6 text-[#1C1E53]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </article>


              <article className="flex max-w-xl flex-col items-start w-[299px]  !rounded-b-4 !border-[#5E3BEE] gap-[23px] ">
                <div className="flex items-center gap-x-4 text-xs">
               
                  <img src={tag} alt="product" className='w-[53px] h-[53px]' />
                </div>
                <div className="group flex flex-col gap-[3px]relative">
                  <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938] group-hover:text-gray-600">
                   
                Branding & Logo
                  </h3>
                  <p className="mt-5  h-[125px] font-normal line-clamp-3 text-[17px] font-pri text-sm/6 text-[#1C1E53]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </article>


              <article className="flex max-w-xl flex-col items-start w-[299px] !rounded-b-4 !border-[#5E3BEE] gap-[23px] ">
                <div className="flex items-center gap-x-4 text-xs">
               
                  <img src={feather} alt="product" className='w-[53px] h-[53px]' />
                </div>
                <div className="group flex flex-col gap-[3px]relative">
                  <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938] group-hover:text-gray-600">
                   
                 UI & UX Design
                  </h3>
                  <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[17px] font-pri text-sm/6 text-[#1C1E53]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </article>


              <article className="flex max-w-xl flex-col items-start w-[299px] !rounded-b-4 !border-[#5E3BEE] gap-[23px] ">
                <div className="flex items-center gap-x-4 text-xs">
               
                  <img src={code} alt="product" className='w-[53px] h-[53px]' />
                </div>
                <div className="group flex flex-col gap-[3px]relative">
                  <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938] group-hover:text-gray-600">
                   
                Webflow Development
                  </h3>
                  <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[17px] font-pri text-sm/6 text-[#1C1E53]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </article>
            
          </div>









          </div>

        </div>
     
    )
  }
  