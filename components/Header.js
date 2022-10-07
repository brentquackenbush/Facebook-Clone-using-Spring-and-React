import React from 'react'
import Image from "next/image"
import {AiOutlineSearch,AiOutlineHome,AiOutlineFlag,AiOutlineVideoCameraAdd,AiOutlineShop,AiFillMessage,AiFillBell} from 'react-icons/ai'
import {IoGameControllerOutline}  from 'react-icons/io5'
import {CgMenuGridR} from 'react-icons/cg'
import {MdExpandMore} from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'
import { userAgent } from 'next/server'
const Header = () => {
    const {data: session} = useSession();
  return (
    <div className=" bg-white flex item-center p-2 shadow-md top-0 sticky z-50 h-16">
        {/* Left */}
        <div className = "flex min-w-fit">
            <Image 
            src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
            height = {40}
            width={40}/>
            <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
                <AiOutlineSearch size = {20}/>
                <input className = "hidden lg:inline-flex bg-transparent focus:outline-none" type = "text" placeholder = "Search Facebook"/>
            </div>
        </div>
        {/* Center */}
        <div className='flex flex-grow justify-center mx-2'>
            <div className='flex items-center'>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineHome className="mx-auto" size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineFlag className="mx-auto" size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineVideoCameraAdd className="mx-auto" size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineShop className="mx-auto" size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <IoGameControllerOutline className="mx-auto" size={25}/>
                </div>
            </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image 
            onClick = {signOut}
            src = {session?.user.image}
            height = {40}
            width={40}
            className = "rounded-full cursor-pointer"/>
            <p className="hidden xl:inline-flex font-semibold texr-sm whitespace-nowrap p-3 max-w-xs">
                {session?.user.name.split(" "[0])}
            </p>
            <CgMenuGridR size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 curser-pointer hover:bg-gray-300"/>
            <AiFillMessage size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 curser-pointer hover:bg-gray-300"/>
            <AiFillBell size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 curser-pointer hover:bg-gray-300"/>
            <MdExpandMore size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 curser-pointer hover:bg-gray-300"/>
            
        </div>
    </div>
  )
}

export default Header