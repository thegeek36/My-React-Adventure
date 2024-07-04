import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/thegeek36')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error.toString());
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-full max-w-sm bg-neutral-400 border border-gray-400 rounded-lg shadow-md p-6">
        <div className="flex justify-end px-4 pt-4">
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data.avatar_url} alt="User Avatar" />
          <h5 className="mb-1 text-xl font-medium text-black">{data.name}</h5>
          <p className="text-sm text-black text-center">{data.bio}</p>
          <div className="flex flex-col mt-4">
            <span className="text-sm text-gray-700">Followers: {data.followers}</span>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              View Profile
            </a>
            {data.blog && (
              <a href={data.blog} target="_blank" rel="noopener noreferrer" type='button' className="mt-2 text-sm text-blue-700 underline">
                Blog
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
