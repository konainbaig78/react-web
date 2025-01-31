import image from '../assets/images/Image.png'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.png'
import vector from '../assets/images/Vector.png'
import v2 from '../assets/images/Vector (1).png'

export default function Projects(){
return(

<div className="bg-[#F5FCFF] mt-50 !flex !flex-col !items-center !p-0 sm:py-32">
  <div className="mx-auto !flex !flex-col !items-center mb-60 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
     
      <h2 className="text-4xl !text-[#282938] !text-[64px] !font-bold tracking-tight text-pretty font-pri sm:text-5xl">My Skills</h2>
    </div>

   
    <div className="mx-auto mt-10 flex justify-evenly sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none">

      <article className="flex shadow-xl max-w-xl flex-col items-start  gap-[23px] w-[412px]">
      <div className="flex justify-center items-center gap-x-4 text-xs">
    <img src={image} alt="product" className='' />
  </div>
        <div className=" p-4 group flex flex-col gap-1 relative">
          <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938] ">
          Ahuse
          </h3>
          <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[19px] font-pri text-sm/6 text-[#1C1E53] h-[80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
          <div className='flex  mb-6 items-center font-pri text-[16px] gap-5 border-b-lg border-b-1 border-[#5E3BEE] w-[162px]'>
<p className='font-semibold'>View In Dribbble</p>
<img src={vector} alt="vector" className='w-[14px] h-[14px] ' />
        </div>

        </div>

        
      </article>
      <article className="flex shadow-xl max-w-xl flex-col items-start  gap-[23px] w-[412px]">
      <div className="flex justify-center items-center gap-x-4 text-xs">
    <img src={i2} alt="product" className='' />
  </div>
        <div className="group p-4 flex flex-col gap-1 relative">
          <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938]">
          App Dashboard
          </h3>
          <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[19px] font-pri text-sm/6 text-[#1C1E53] h-[80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
          <div className='flex  mb-6 items-center font-pri text-[16px] gap-5 border-b-lg border-b-1 border-[#5E3BEE] w-[162px]'>
<p className='font-semibold'>View In Dribbble</p>
<img src={v2} alt="vector" className='w-[14px] h-[14px] ' />
        </div>

        </div>

        
      </article>
      <article className="flex shadow-xl max-w-xl flex-col items-start   gap-[23px] w-[412px]">
      <div className="flex justify-center items-center gap-x-4 text-xs">
    <img src={i3} alt="product" className='' />
  </div>
        <div className="group p-4  flex flex-col gap-1 relative">
          <h3 className="mt-3 text-lg/6 font-bold font-pri !text-[25px] text-[#282938]">
          Easy Rent
          </h3>
          <p className="mt-5 h-[125px] font-normal line-clamp-3 text-[19px] font-pri text-sm/6 text-[#1C1E53] h-[80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
          <div className='flex mb-6 items-center font-pri text-[16px] gap-5 border-b-lg border-b-1 border-[#5E3BEE] w-[162px]'>
<p className='font-semibold'>View In Dribbble</p>
<img src={v2} alt="vector" className='w-[14px] h-[14px] ' />
        </div>

        </div>

        
      </article>

    
    </div>
  </div>
</div>
)
}