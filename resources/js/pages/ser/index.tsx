import React from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'


const index = ({ contact,ser}:any) => {
  return (
    <div>
         <Link
          href="/dashboard"
          className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition font-semibold"
          aria-label="Back to posts"
        >
          ← Back to Posts
        </Link>
<div className='bg-pink-800 py-10 text-white text-center'>
{contact.map((contact:any)=>(
  <>
  {contact.title}
  <br />
    {contact.abebe_id}
  <br />
        {contact.address}
  <br />
        {contact.number}
  <br />
  
        {contact.city}
  <br />
        {contact.zip_code}
  </>
))}
</div>
<div className='bg-pink-800 py-10 text-white text-center'>
{ser.map((ser:any)=>(
  <>
  {ser.name}
  <br />
    {ser.email}
  <br />
        {ser.password}
  <br />

  </>
))}
</div>
    </div>
  )
}

export default index
