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
         
         name:'',
        email:'',
        password:'',
             abebe_id:'',
        address:'',
        number:'',
        city:'',
        zip_code:''
    
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route('sers.store')) 
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create Post" />
      <div className="max-w-xl mx-auto px-6 py-16">
        <Link
          href="/sers"
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
{/* <select name="" id=""></select> */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              addres
            </label>

            <input
              id="title"
              type="string"
              value={data.address}
              onChange={(e) => setData('address', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
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
              addres
            </label>

            <input
              id="title"
              type="string"
              value={data.city}
              onChange={(e) => setData('city', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.city && (
              <p className="mt-1 text-red-600 font-semibold">{errors.city}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              addres
            </label>

            <input
              id="title"
              type="string"
              value={data.zip_code}
              onChange={(e) => setData('zip_code', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.zip_code && (
              <p className="mt-1 text-red-600 font-semibold">{errors.zip_code}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              number
            </label>

            <input
              id="title"
              type="string"
              value={data.number}
              onChange={(e) => setData('number', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.name && (
              <p className="mt-1 text-red-600 font-semibold">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              c
            </label>

            <input
              id="title"
              type="string"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.name && (
              <p className="mt-1 text-red-600 font-semibold">{errors.name}</p>
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
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post email"
              autoComplete="off"
              maxLength={100}
              aria-describedby="emailHelp"
              
            />
            {errors.email && (
              <p className="mt-1 text-red-600 font-semibold">{errors.email}</p>
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
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post password"
              autoComplete="off"
              maxLength={100}
              aria-describedby="passwordHelp"
              
            />
            {errors.password && (
              <p className="mt-1 text-red-600 font-semibold">{errors.password}</p>
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
