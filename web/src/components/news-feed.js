// components/NewsFeed.js
import React, { useState, useEffect } from "react";
import { fetchEverything, fetchTopHeadlines } from "../services/newsAPI";

const NewsFeed = ({ query }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetchEverything(query);
      setArticles(response.data.articles);
    }

    fetchNews();
  }, [query]);

  return (
    <div>
      {articles.slice(0, 5).map((article, index) => (
        <a
          href={article.url}
          className="hover:opacity-75 hover:-translate-y-2 p-2 flex-col mb-8 flex"
          key={index}
        >
          <div className="relative w-full h-64  overflow-hidden">
            {" "}
            {/* Wrapper with fixed height */}
            <img src={article.urlToImage} alt={article.title} className=" object-cover  h-auto" />
          </div>

          <h2 className="text-xl font-bold">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h2>
          <p className="opacity-50">Published at: {article.publishedAt}</p>

          <p>{article.description}</p>
          <p>Source: {article.source.name}</p>
        </a>
      ))}
    </div>
  );
};

export default NewsFeed;
