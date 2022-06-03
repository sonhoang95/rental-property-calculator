import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/AppContext';
import Label from './Label';
import SubTitle from './SubTitle';

const IncomeInfo = () => {
  const { incomeInfo, setIncomeInfo } = useGlobalContext();

  const { totalIncome, monthlyIncome, otherIncome } = incomeInfo;

  useEffect(() => {
    const totalIncome = parseFloat(monthlyIncome) + parseFloat(otherIncome);
    setIncomeInfo({ ...incomeInfo, totalIncome });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyIncome, otherIncome]);

  return (
    <section className="w-full md:w-full lg:max-w-[950px] mx-auto">
      <SubTitle subtitle="Rental Income" theme="dark" />
      <div className="mt-3 mb-6 lg:mb-0">
        <div className="grid lg:grid-cols-2">
          <article className="flex flex-col gap-2 mb-6 pt-3">
            <Label title="Monthly Rent" />
            <span>
              <input
                value={incomeInfo.monthlyIncome}
                className="border border-gray-500 rounded mx-3 w-11/12 lg:w-[425px] px-3 py-1 placeholder-gray-900"
                onChange={e =>
                  setIncomeInfo({
                    ...incomeInfo,
                    monthlyIncome: e.target.value,
                  })
                }
              />{' '}
              $
            </span>
          </article>
          <article className="flex flex-col gap-2 mb-6 pt-3">
            <Label title="Other Income" />
            <span>
              <input
                value={incomeInfo.otherIncome}
                className="border border-gray-500 rounded mx-3 w-11/12 lg:w-[425px] px-3 py-1 placeholder-gray-900"
                onChange={e =>
                  setIncomeInfo({
                    ...incomeInfo,
                    otherIncome: e.target.value,
                  })
                }
              />{' '}
              $
            </span>
          </article>
        </div>
        <div className="bg-[#2dbf93] p-6 col-span-2 text-white font-bold flex mt-3 flex-col gap-2">
          <span className="tracking-wide">Total Income:</span>
          <span className="text-3xl">${totalIncome}</span>
        </div>
      </div>
    </section>
  );
};

export default IncomeInfo;
