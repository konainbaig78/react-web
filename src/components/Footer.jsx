import logo from '../assets/images/LOGO.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-[#F5FCFF]">
<div className='flex justify-between items-center m-18 pb-8 border-b-1 border-[#2829388C]'>
    <div>
        <img src={logo} alt="" className='w-[148px] h-[32px]'/>
    </div>

    <div>
        <ul className='flex items-center gap-7 font-pri font-normal text-[16px]'>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About me</li>
            <li>Contact</li>
            <li>Testimonals</li>
        </ul>
    </div>
    <div className="flex  space-x-4">
      <FaFacebook  className='w-[29px] h-[29px]' />
      <FaInstagram className='w-[29px] h-[29px]'  />
      <FaTwitter className='w-[29px] h-[29px]'  />
      <FaLinkedin className='w-[29px] h-[29px]'  />
    </div>
    
</div>
<div className='flex items-center justify-between pt-4 p-18'>
<div>
    <p>Made with 💖 by Airdokan</p>
</div>
<div>
    <ul className='flex items-center gap-4'>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookies Settings
</li>
    </ul>
</div>
</div>
        </div>
    )
}