/* eslint-disable react/jsx-no-undef */
import Link from "next/link"
import  {MaxWidthWrapper} from "./component/MaxWidthWrapper"
import {ArrowRight, PlayCircle} from 'lucide-react'
import { Button, buttonVariants } from "@/components/ui/button"
import cn from "./lib/utils"
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-5xl font-bold">
      Interactive <span className="text-green-500">Documents</span>: Enhance Understanding with AI Conversations
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-md">
      PDFs made simple: Chat your way through complex documents with our AI companion, turning every page into a friendly conversation.
      </p>
        <div className="flex flex-row">
        <Link href='/dashboard' className={cn(buttonVariants(), "mt-5 bg-green-500 text-white duration-300")} target='_blank'>Get Started <ArrowRight className="ml-2 h-5 w-5"/></Link>
        <Link href='/dashboard' className={cn(buttonVariants(), "mt-5 bg-green-500 text-white ml-2 duration-300")} target='_blank'>See how it works <PlayCircle  className="ml-2 h-5 w-5 animate-bounce"/></Link>
        </div>
    </MaxWidthWrapper>

    <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/dashboard-preview.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
