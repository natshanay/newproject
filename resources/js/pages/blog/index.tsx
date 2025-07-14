import React from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'
const index = () => {
  return (
    <div>
    <Link
          href="/dashboard"
          className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition font-semibold"
          aria-label="Back to posts"
        >
          ← Back to Posts
        </Link>
    </div>
  )
}

export default index
