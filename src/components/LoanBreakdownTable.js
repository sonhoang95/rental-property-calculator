import React from 'react';
import { amountFormat } from '../utils/helpers';
import SubTitle from './SubTitle';

const LoanBreakdownTable = ({ installments }) => {
  return (
    <section className="w-full md:w-full lg:max-w-[950px] mx-auto border border-gray-200 lg:p-6 mt-6 overflow-scroll max-h-[600px]">
      <SubTitle
        subtitle="Your Full Amortization Schedule"
        largeText={true}
        styles={{
          backgroundColor: 'white',
          margin: '2rem 0 0 0',
        }}
      />
      <table className="w-full text-center mx-auto mt-6">
        <thead className="border-b-2 border-gray-500">
          <tr>
            <th>Month</th>
            <th>Payment Amount</th>
            <th>Interest Paid</th>
            <th>Principle Paid</th>
            <th>Remain</th>
          </tr>
        </thead>
        <tbody className="py-4">
          {installments.map((i, index) => {
            const { installment, interest, capital, remain } = i;
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}
              >
                <td className="py-2 border-b-2">{index}</td>
                <td className="py-2 border-b-2">{amountFormat(installment)}</td>
                <td className="py-2 border-b-2">{amountFormat(interest)}</td>
                <td className="py-2 border-b-2">{amountFormat(capital)}</td>
                <td className="py-2 border-b-2">{amountFormat(remain)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default LoanBreakdownTable;
