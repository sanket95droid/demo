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
    </>
  )
}
