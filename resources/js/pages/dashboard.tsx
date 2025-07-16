import React from 'react'
import AppLayout from '@/layouts/app-layout'
import { Head, Link, useForm } from '@inertiajs/react'
import { type PageProps } from '@/types'

interface Article {
  id: number
  title: string
  slug: string
  created_at: string
}

interface DashboardProps extends PageProps {
  auth: {
    user: {
      name: string
    }
  }
  articles: {
    data: Article[]
  }
  flash?: {
    message?: string
  }
}

export default function Dashboard({ auth, articles, flash }: DashboardProps) {
  const { delete: destroy } = useForm()

  // Delete handler, receives the slug of the article to delete
  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      destroy(route('articles.destroy', slug))
    }
  }

  return (
    <AppLayout>
      <Head title="Your Articles" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Link
              href="/articles/create"
              className="inline-block mb-4 px-8 py-4 bg-blue-700 text-white rounded-xl shadow-md hover:bg-blue-800 transition font-extrabold text-xl"
            >
              + Create New Article
            </Link>
          </div>

          {flash?.message && (
            <div className="p-4 mb-6 text-sm text-green-800 bg-green-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-green-400">
              ✅ {flash.message}
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
              Your Articles, {auth.user.name}
            </h2>

            {articles.data.length > 0 ? (
              articles.data.map((article) => (
                <div
                  key={article.id}
                  className="bg-gray-100 dark:bg-gray-700 mb-6 rounded-lg p-6 shadow-md"
                >
                  <Link
                    href={`/articles/${article.slug}`}
                    className="block text-xl font-extrabold text-gray-900 hover:bg-orange-400 hover:text-white p-4 rounded-lg transition text-center"
                  >
                    {article.title}
                  </Link>

                  <p className="text-center text-sm text-gray-600 mt-2">
                    Created on{' '}
                    {new Date(article.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>

                  <div className="flex justify-center space-x-6 mt-6">
                    <Link
                      href={`/articles/${article.slug}/edit`}
                      className="px-5 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 transition"
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(article.slug)}
                      className="px-5 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">You haven’t created any articles yet.</p>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
