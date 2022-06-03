import React from 'react';

const Input = ({ text, setPurchaseInfo, value, styles, smallWidth }) => {
  return (
    <>
      <span>
        <input
          value={value}
          onChange={setPurchaseInfo}
          type="number"
          className={`border border-gray-500 rounded mx-3 w-[565px] ${
            smallWidth ? 'lg:w-[390px]' : null
          } lg:w-[425px] px-3 py-1 placeholder-gray-900`}
          style={styles}
        />
        {text}
      </span>
    </>
  );
};

export default Input;
