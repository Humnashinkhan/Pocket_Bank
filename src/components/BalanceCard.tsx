import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  balance: number;
}

export default function BalanceCard({ balance }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-600 text-md">Current Balance</p>
      <h1 className="text-2xl font-bold mt-2 text-green-600">
        {formatCurrency(balance)}
      </h1>
    </div>
  );
}
