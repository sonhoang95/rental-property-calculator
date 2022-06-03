import React from 'react';
import { formatNumber } from '../utils/helpers';

const MortgageResult = ({ purchaseInfo }) => {
  const closingCosts =
    purchaseInfo.purchasePrice * (purchaseInfo.closing / 100);

  let totalCashNeeded = 0;
  if (isNaN(purchaseInfo.repair)) {
    totalCashNeeded = purchaseInfo.purchasePrice + closingCosts;
  } else {
    totalCashNeeded =
      purchaseInfo.purchasePrice + purchaseInfo.repair + closingCosts;
  }

  return (
    <article className="px-3 bg-gray-100 py-6 justify-items-center text-center">
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-0">
        <div className="space-y-1">
          <h2 className="font-bold tracking-wide">Loan Amount: </h2>
          <p className="text-3xl">
            ${' '}
            {!purchaseInfo.purchasePrice
              ? '0'
              : formatNumber(purchaseInfo.amount)}
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="font-bold tracking-wide">Mortgage Payment: </h2>
          <p className="text-3xl">$ {purchaseInfo.monthlyPayment.toFixed(2)}</p>
        </div>
        <div className="space-y-1">
          <h2 className="font-bold tracking-wide">Closing Costs: </h2>
          <p className="text-3xl">$ {closingCosts.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 font-bold mt-6 mb-3 text-center col-span-3 text-xl">
        <span>Total Cash Needed:</span>
        <span className="text-3xl text-[#2dbf93]">
          ${formatNumber(parseFloat(totalCashNeeded))}
        </span>
      </div>
    </article>
  );
};

export default MortgageResult;
