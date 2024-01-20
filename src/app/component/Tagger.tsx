import { FaGithub } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const Tagger = () => {
  return (
    <div className='flex-row bottom-2 bg-black/80 rounded-md sticky hover:bg-green-500 w-fit p-2 ml-2 mb-2 hidden md:block lg:block'>
      <Link href='github.com/sanket95droid' className='text-white font-semibold flex flex-row'>
        <FaGithub className="mt-1"/>
        <span className="ml-2">sanket95droid</span>
      </Link>
    </div>
  )
}

export default Tagger
