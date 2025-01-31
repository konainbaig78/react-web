'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/LOGO.png'
import group from '../assets/images/Group 11 1.png'
import '../App.css'
import '../index.css'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'About me', href: '#' },
  { name: 'Testimonals', href: '#' },
]

export default function Navbar() {
  const  [active, setActive]= useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex font-pri items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setActive(item.name)}
          className={`text-sm font-semibold transition duration-300 ease-in-out ${
            active === item.name ? "text-[#5E3BEE] text-500 font-bold" : "text-gray-500"
          }`}
        >
          {item.name}
        </a>
      ))}
    </div>
          <div className=" hidden lg:flex align-middle lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-[#5E3BEE]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110   font-pri flex items-center justify-center text-center border-[#5E3BEE] border-1 w-[109px] h-[43px] bg-white hover:bg-[#5E3BEE] hover:text-white ">

             Contact me 
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block font-pri rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block font-pri rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className='flex items-center justify-evenly '>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className=" ">
          <div className="relative text-[21px] font-pri leading-[32px] font-semibold text-[#282938] text-left text-sm/6 text-[#282938] ">
            Hey, I am John
            </div>
            <span className=" !text-[61px] leading-[75px] font-pri font-bold tracking-tight text-balance text-gray-900 sm:text-7xl">
            I create <span className='text-[#5E3BEE] font-pri '>product design</span> and brand experience
            </span>
            <p className="mt-8 leading-[38px] font-pri !text-[23px] font-normal text-pretty text-gray-500 sm:text-xl/8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-10 flex items-center  gap-x-6">
              <a
                href="#"
                className="rounded-[5.3px] font-pri bg-[#5E3BEE] text-[16px]
 px-3.5 py-2.5 text-sm font-light text-white shadow-xs duration-300 ease-out hover:text-[#5E3BEE] hover:border-[#5E3BEE] hover:border-1 hover:bg-transparent  w-[124px] h-[46px] flex items-center justify-center  "
              >
                Get In Touch
              </a>
              
            </div>
          </div>
        </div>
        <div>
          <img src={logo} alt="logo" className='  w-[191px] h-[40px]' />
        </div>
        <div>
          <img src={group} alt="group"  />
        </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
