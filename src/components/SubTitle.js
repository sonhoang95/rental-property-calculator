import React from 'react';

const SubTitle = ({ subtitle, styles, largeText, theme }) => {
  return (
    <h2
      className={`${largeText ? 'lg:text-3xl' : 'lg:text-xl'} ${
        theme === 'dark' ? 'bg-gray-200' : 'bg-gray-100'
      } text-lg font-bold px-3 py-4 text-gray-80`}
      style={styles}
    >
      {subtitle}
    </h2>
  );
};

export default SubTitle;
