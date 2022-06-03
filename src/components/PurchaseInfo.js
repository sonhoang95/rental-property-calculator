import React from 'react';
import Label from './Label';
import Input from './Input';

const PurchaseInfo = ({ purchaseInfo, setPurchaseInfo }) => {
  const { purchasePrice, downPayment, years, rate, repair, closing } =
    purchaseInfo;

  return (
    <div className="grid lg:grid-cols-2 mt-3 mb-6 lg:mb-0">
      <article className="flex flex-col gap-2 mb-6">
        <Label title="Purchase Price" />
        <Input
          value={purchasePrice}
          text="$"
          setPurchaseInfo={e =>
            setPurchaseInfo({
              ...purchaseInfo,
              purchasePrice: parseFloat(e.target.value),
            })
          }
        />
      </article>
      <article className="flex flex-col gap-2">
        <Label title="Down Payment (%)" />
        <Input
          value={downPayment}
          text="%"
          setPurchaseInfo={e =>
            setPurchaseInfo({
              ...purchaseInfo,
              downPayment: parseFloat(e.target.value),
            })
          }
        />
      </article>
      <article className="flex flex-col gap-2 my-6 lg:my-0">
        <Label title="Loan Term (Year)" />
        <Input
          value={years}
          text="years"
          smallWidth={true}
          setPurchaseInfo={e =>
            setPurchaseInfo({
              ...purchaseInfo,
              years: parseFloat(e.target.value),
            })
          }
        />
      </article>
      <article className="flex flex-col gap-2 mb-6">
        <Label title="Interest Rate" />
        <Input
          value={rate}
          text="%"
          setPurchaseInfo={e =>
            setPurchaseInfo({
              ...purchaseInfo,
              rate: parseFloat(e.target.value),
            })
          }
        />
      </article>
      <article className="flex flex-col gap-2 mb-6">
        <Label title="Repair Costs" />
        <Input
          value={repair}
          text="$"
          setPurchaseInfo={e => {
            setPurchaseInfo({
              ...purchaseInfo,
              repair: parseFloat(e.target.value),
            });
          }}
        />
      </article>
      <article className="flex flex-col gap-2 mb-6">
        <Label title="Closing Costs" />
        <Input
          value={closing}
          text="%"
          setPurchaseInfo={e =>
            setPurchaseInfo({
              ...purchaseInfo,
              closing: parseFloat(e.target.value),
            })
          }
        />
      </article>
    </div>
  );
};

export default PurchaseInfo;
