'use client'

import qs from 'query-string'


import { SearchIcon, X } from 'lucide-react'
import { Input } from './ui/input'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function SearchBar() {

    const [value, setValue] = useState("")
    const router = useRouter()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value }
        })

        router.push(url)
    }

    function onClear() {
        setValue("")
    }

    return (
        <form
            onSubmit={handleSubmit}
        >

            <div className='flex md:max-w-[300px]  items-center relative gap-2 mx-1'>
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='focus-visible:ring-offset-0 
                               focus-visible:ring-transparent
                               focus-visible::ring-0  
                               w-full
                              shrink-2
            ' />

                {
                    value != "" &&
                    <X className='absolute right-10 size-4 text-muted-foreground' onClick={onClear} />
                }
                <SearchIcon className='size-6' />
            </div>
        </form>
    )
}
