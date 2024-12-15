import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <div className='w-full flex gap-5 justify-center items-center'>
        {
            Socials.map((item, idx)=> (
                <Link href={item.href} key={idx} className="flex items-center gap-1.5 cursor-pointer group">
                    <Image 
                        src={item.logo}
                        alt=''
                        width={1024}
                        height={1024}
                        className={`${item.className} size-8 rounded-lg border shadow-lg`}
                    />
                    <p className='text-lg font-modernbold text-dark-1 group-hover:text-white'>{item.name}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default Links