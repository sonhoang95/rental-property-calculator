import { useEffect, useState } from 'react';
import SubTitle from './components/SubTitle';
import Title from './components/Title';
import MortgageResult from './components/MortgageResult';
import PurchaseInfo from './components/PurchaseInfo';
import LoanJS from 'loanjs';
import LoanBreakdownTable from './components/LoanBreakdownTable';
import IncomeInfo from './components/IncomeInfo';
import Chart2D from './components/Chart2D';

const initialState = {
  amount: 0,
  purchasePrice: 200000,
  rate: 4.5,
  downPayment: 20,
  years: 30,
  monthlyPayment: 0,
  repair: 5000,
  closing: 2,
};

function App() {
  const [purchaseInfo, setPurchaseInfo] = useState(initialState);
  const [installments, setInstallments] = useState([]);

  const { purchasePrice, downPayment, years, rate, closing, repair } =
    purchaseInfo;

  useEffect(() => {
    const calculate = (amount, years, rate) => {
      if (purchasePrice && rate && downPayment && years && closing && repair) {
        const loan = new LoanJS.Loan(
          amount, // amount
          years * 12, // installments number
          rate // interest rate
        );

        const { installment } = loan.installments.find(
          payment => payment.installment
        );
        setPurchaseInfo({
          ...purchaseInfo,
          amount: loan.amount,
          monthlyPayment: installment,
        });
        setInstallments(loan.installments);
        console.log(amount);
      } else {
        return;
      }
    };

    calculate(purchasePrice - purchasePrice * (downPayment / 100), years, rate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purchasePrice, downPayment, rate, years, repair, closing]);

  return (
    <section className="container mx-auto my-16">
      <form
        className="w-full md:w-full lg:max-w-[950px] mx-auto"
        onSubmit={e => e.preventDefault()}
      >
        <Title title="Rental Property Calculator" />
        <SubTitle subtitle="Purchase Information" theme="dark" />
        <PurchaseInfo
          purchaseInfo={purchaseInfo}
          setPurchaseInfo={setPurchaseInfo}
        />
        <MortgageResult purchaseInfo={purchaseInfo} />
      </form>
      <IncomeInfo {...PurchaseInfo} />
      <Chart2D installments={installments} />
      <LoanBreakdownTable installments={installments} />
    </section>
  );
}

export default App;
