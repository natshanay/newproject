import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const Show = ({ article }: any) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Articles', href: '/articles' },
    { title: article.title, href: `/articles/${article.slug}` },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={article.title} />

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-block mb-6 text-black bg-red-700 hover:bg-red-800 px-6 py-3 rounded-md font-medium shadow transition"
          aria-label="Back to articles"
        >
          &larr; Back to Articles
        </Link>

        {/* Article Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
          {article.title}
        </h1>

        {/* Meta Information */}
        <div className="text-black text-sm space-x-2">
          <span>{article.user.name}</span>
          <span>&middot;</span>
          <span>{new Date(article.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span>&middot;</span>
          <Link
            href={`/categories/${article.category.slug}`}
            className="border-b-2 border-red-500 hover:text-red-500 pb-1 transition"
          >
            {article.category.name}
          </Link>
        </div>

        {/* Article Content */}
        <div>
          <p className="font-bold text-black text-md pt-10">{article.excerpt}</p>

          <p className="font-normal text-black text-md pt-4 whitespace-pre-line leading-relaxed">
            {article.description}
          </p>

          {/* Tags */}
          <ul className="pt-10 flex flex-wrap gap-2">
            {article.tags.map((tag: any) => (
              <li key={tag.id}>
                <Link
                  href={`/tags/${tag.slug}`}
                  className="bg-red-700 rounded-md py-1 px-3 font-semibold text-sm text-black hover:bg-red-800 transition"
                >
                  #{tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Category Details */}
        <div className="pt-10 border-t-2 border-red-900">
          <h3 className="text-black font-bold pt-10">{article.category.name}</h3>
          <p className="text-black font-normal pt-2 text-sm">{article.category.description}</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Show;