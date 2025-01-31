import about from '../assets/images/About Me.png';

export default function  AboutMe(){

    return(
<div className='grid grid-cols-2 gap-4 mt-50'>
    <img src={about} alt="about" className=' w-[500px] h-[602px]' />

    <div className='font-pri flex flex-col gap-4 justify-center text-[#282938]'>
        
            <div>
            <h5 className='text-[#282938] font-semibold text-[17px]'>About</h5>
            <h2 className='font-bold   text-[64px] ' >About Me</h2>
            </div>
           
        
      
            <p className='font-normal text-[20px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.

Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
      
    </div>
    </div>

    )
}