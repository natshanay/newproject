import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // or use <a> if not using React Router
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState('');
  const [paginationLinks, setPaginationLinks] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (pageUrl = '/api/articles') => {
    try {
      const response = await axios.get(pageUrl);
      setArticles(response.data.data);
      setPaginationLinks(response.data.links); // assumes Laravel pagination format
      setMessage(response.data.message || '');
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handlePaginationClick = (url) => {
    if (url) {
      fetchArticles(url);
    }
  };

  return (
    <div className="space-y-2 xl:items-baseline xl:space-y-0 w-4/5 pt-20 sm:w-3/5 mx-auto">
      <div className="w-full mx-auto mb-10">
        <span className="block inline text-md text-white transition-all hover:text-gray-100 font-bold uppercase">
          <Link to="/articles/create" className="bg-red-700 rounded-md py-3 px-5">
            Create Article
          </Link>
        </span>
      </div>

      {message && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Success alert!</span> {message}
        </div>
      )}

      <div className="border-b-2 border-neutral-700 pb-10 pt-10 sm:pt-20">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="mb-12">
              <span className="sm:float-right float-left sm:pt-20 text-gray-400">
                {new Date(article.created_at).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                , by {article.user.name}
              </span>

              <Link to={`/articles/${article.slug}`}>
                <h2 className="hover:text-red-700 sm:w-3/5 transition-all text-white sm:pt-0 pt-10 text-3xl sm:text-4xl font-bold sm:pb-2 w-full sm:pt-10 block">
                  {article.title}
                </h2>
              </Link>

              <p className="text-gray-400 leading-8 py-6 text-lg w-full sm:w-3/5">
                {article.excerpt}
              </p>

              {article.tags.map((tag) => (
                <span key={tag.id} className="block inline text-xs text-white transition-all hover:text-gray-100 font-bold pr-2 uppercase">
                  <Link to={`/tags/${tag.slug}`} className="bg-red-700 rounded-md py-1 px-3">
                    {tag.name}
                  </Link>
                </span>
              ))}
            </div>
          ))
        ) : (
          <h2 className="hover:text-red-700 sm:w-3/5 transition-all text-white sm:pt-0 pt-10 text-3xl sm:text-4xl font-bold sm:pb-2 w-full block">
            Unfortunately, we have not found any articles...
          </h2>
        )}

        <div className="py-20 flex space-x-4">
          {paginationLinks &&
            paginationLinks.map((link, index) => (
              <button
                key={index}
                disabled={!link.url}
                onClick={() => handlePaginationClick(link.url)}
                className={`px-3 py-2 rounded-md ${link.active ? 'bg-red-700 text-white' : 'bg-gray-700 text-white'}`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
