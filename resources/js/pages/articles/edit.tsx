import React, { useState, useEffect } from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Articles', href: '/articles' },
]

interface Props {
  article: {
    id: number
    slug: string
    status: boolean
    title: string
    excerpt: string
    description: string
    category_id: number
    tags: { id: number }[]
  }
  categories: Record<number, string>
  tags: Record<number, string>
}

const EditArticle = ({ article, categories, tags }: Props) => {
  const initialTags = article.tags.map((tag) => tag.id.toString())

  const { data, setData, put, processing, errors } = useForm({
    status: article.status,
    title: article.title,
    excerpt: article.excerpt,
    description: article.description,
    category_id: article.category_id.toString(),
    tags: initialTags,
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    put(route('articles.update', article.slug))
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Article" />

      <div className="max-w-4xl mx-auto py-12 px-6 min-h-screen">
        <Link
          href="/articles"
          className="inline-block mb-8 px-6 py-3 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition font-semibold"
          aria-label="Back to articles"
        >
          ← Back to Articles
        </Link>

        <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow space-y-8">
          {/* Status Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="status"
                checked={data.status}
                onChange={(e) => setData('status', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 relative
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300
                after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white
                dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
            {errors.status && <p className="text-red-600 mt-1">{errors.status}</p>}
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-gray-200"
            />
            {errors.title && <p className="text-red-600 mt-1">{errors.title}</p>}
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">Excerpt</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={data.excerpt}
              onChange={(e) => setData('excerpt', e.target.value)}
              className="w-full h-24 p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-gray-200"
            />
            {errors.excerpt && <p className="text-red-600 mt-1">{errors.excerpt}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="w-full h-40 p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-gray-200"
            />
            {errors.description && <p className="text-red-600 mt-1">{errors.description}</p>}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category_id" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">Category</label>
            <select
              id="category_id"
              name="category_id"
              value={data.category_id}
              onChange={(e) => setData('category_id', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm dark:bg-gray-900 dark:text-gray-200"
            >
              <option value="">Select your category</option>
              {Object.entries(categories).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            {errors.category_id && <p className="text-red-600 mt-1">{errors.category_id}</p>}
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">Tags</label>
            <select
              multiple
              id="tags"
              name="tags[]"
              value={data.tags}
              onChange={(e) =>
                setData(
                  'tags',
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm dark:bg-gray-900 dark:text-gray-200"
            >
              {Object.entries(tags).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            {errors.tags && <p className="text-red-600 mt-1">{errors.tags}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={processing}
              className={`px-6 py-3 font-bold text-white rounded-md shadow-md transition ${
                processing ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {processing ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  )
}

export default EditArticle
