import React from 'react';

const Title = ({ title }) => {
  return (
    <h1 className="bg-blue-600 p-8 text-center text-2xl tracking-wide font-bold text-white rounded-t-lg">
      {title}
    </h1>
  );
};

export default Title;
