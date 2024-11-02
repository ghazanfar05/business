import React from 'react'

export const Ue = () => {
  return (
    <div>
    <nav className=" absolute z-20  md:w-full">
        <div className=" max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
            <div className=" flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <div className=" flex-shrink-0">
                        <a href="/" className=" text-white hover:text-black text-5xl ">HOME SET</a>
                    </div>
                </div>
                <div className=" hidden  md:block ">
                    <div className="ml-4 flex items-center space-x-4 gap-10 font-light">
                        <a href="/ " className=" text-white  hover:text-black  hover:border-b p-1 ">
                            HOME
                        </a>
                        <a href="/ " className=" text-white hover:text-black hover:border-b p-1">
                            About
                        </a>

                        <a href="/ " className=" text-white  hover:text-black hover:border-b p-1">
                            Services
                        </a>

                        <a href="/ " className=" text-white  hover:text-black hover:border-b p-1">
                            Helps
                        </a>

                        <a href="/ " className=" text-white  hover:text-black hover:border-b p-1">
                            Blog
                        </a>
                        <a href="/ " className=" text-white  hover:text-black hover:border-b p-1">
                            Contact
                        </a>






                    </div>


                </div>
                <div className=" md:hidden flex items-center">
                    <button className=" inline-flex items-center justify-center p-2  rounded-md text-white  hover:text-white foucus-outline-none focus:ring-2 foucus:ring-inset foucus:ring-white"
                    >

                    </button>
                </div>

                <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7  lg:hidden text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </div>















            </div>
        </div>
    </nav>
</div>


















  )
}
 export default Ue