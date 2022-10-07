import React from 'react'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'
const Post = () => {
  return (
    <div className="flex flex-col">
        <div className="bg-white mt-6 rounded-md p-4">
            <div className="flex items-center space-x-2">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" 
                className="rounded-full w-10 h-10"/>
                <div>
                    <p className="font-medium">Brent Quackenbush</p>
                    {/* <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p> */}
                </div>
            </div>
            <p className="py-4">Lorem ipsum</p>
        </div>
        {/* If any image*/}
        <div className="relative h-60 md:h-96 bg-white">
            <Image src = "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg"
            layout="fill"
            objectFit="cover"/>

        </div>
        {/* Footer */}
        <div className="flex items-center justify-center bg-white p-2">
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <FiThumbsUp className="h-4"/>
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <FaRegCommentAlt className="h-4"/>
                <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <RiShareForwardLine className="h-4"/>
                <p className="text-xs sm:text-base">Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post