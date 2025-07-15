import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Articles', href: '/articles' },
];

const Index = ({ articles }: any) => {

  console.log(articles);
  const { flash } = usePage().props as any;

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <div className="flex justify-between items-center">
          <Link
            href="/articles/create"
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-5 rounded-md transition"
          >
            + Create Article
          </Link>
        </div>

        {flash.message && (
          <div className="p-4 text-sm text-green-800 bg-green-100 rounded-lg shadow">
            <strong>Success:</strong> {flash.message}
          </div>
        )}

        {articles.data.length > 0 ? (
          <div className="space-y-12">
            {articles.data.map((article: any) => (
              <div key={article.id} className="border-b border-gray-300 pb-10">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(article.created_at).toLocaleDateString()}, by {article.user.name}
                </div>

                <Link href={`/articles/${article.slug}`}> 
                  <h2 className="text-3xl font-bold text-white hover:text-red-700 transition">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-gray-400 mt-4 leading-relaxed">{article.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag: any) => (
                    <Link
                      key={tag.id}
                      href={`/tags/${tag.slug}`}
                      className="bg-red-700 text-white text-xs font-bold py-1 px-3 rounded-md hover:bg-red-800 transition"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-3xl font-bold text-white pt-10">
            Unfortunately, we have not found any articles...
          </h2>
        )}

        <div className="mt-16">
          {/* Replace with <Pagination /> component if available */}
          
          {articles.links && (
            <div className="flex justify-center space-x-2">
              {articles.links.map((link: any, i: number) => (
                <Link
                  key={i}
                  href={link.url || '#'}
                  className={`px-4 py-2 rounded ${
                    link.active ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700'
                  } ${!link.url && 'pointer-events-none opacity-50'}`}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
