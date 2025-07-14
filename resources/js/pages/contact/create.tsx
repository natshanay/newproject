import React from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Posts',
    href: '/posts',
  },
]

const Create = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
         ser_id:'',
        address:'',
        number:'',
        city:'',
        zip_code:''
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route('contacts.store'))
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create Post" />
      <div className="max-w-xl mx-auto px-6 py-16">
        <Link
          href="/posts"
          className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition font-semibold"
          aria-label="Back to posts"
        >
          ← Back to Posts
        </Link>

        <form
          onSubmit={submit}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-8"
          aria-label="Create post form"
        >
          <h2 className="text-3xl font-extrabold text-blue-900 text-center tracking-tight mb-6">
            Create New Post
          </h2>

          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              id="title"
              type="number"
              value={data.ser_id}
              onChange={(e) => setData('ser_id', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.ser_id && (
              <p className="mt-1 text-red-600 font-semibold">{errors.ser_id}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={data.address}
              onChange={(e) => setData('address', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post address"
              autoComplete="off"
              maxLength={100}
              aria-describedby="addressHelp"
              
            />
            {errors.address && (
              <p className="mt-1 text-red-600 font-semibold">{errors.address}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={data.number}
              onChange={(e) => setData('number', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post number"
              autoComplete="off"
              maxLength={100}
              aria-describedby="numberHelp"
              
            />
            {errors.number && (
              <p className="mt-1 text-red-600 font-semibold">{errors.number}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={data.city}
              onChange={(e) => setData('city', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post city"
              autoComplete="off"
              maxLength={100}
              aria-describedby="cityHelp"
              
            />
            {errors.city && (
              <p className="mt-1 text-red-600 font-semibold">{errors.city}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="body"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Body
            </label>
            <textarea
              id="body"
              value={data.zip_code}
              onChange={(e) => setData('zip_code', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition resize-y min-h-[150px]"
              placeholder="Write your post here..."
              maxLength={2000}
              aria-describedby="zip_codeHelp"
              
            />
            {errors.zip_code && (
              <p className="mt-1 text-red-600 font-semibold">{errors.zip_code}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`w-full py-4 rounded-xl font-extrabold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-400 ${
              processing
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            aria-live="polite"
          >
            {processing ? 'Submitting...' : 'Submit Post'}
          </button>
        </form>
      </div>
    </AppLayout>
  )
}

export default Create
