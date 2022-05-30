import React from 'react';

export default function Banner({ title, subtitles, children }) {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitles}</p>
      {children}
    </div>
  );
}
