import { Transaction } from "../types/transaction";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

      <ul className="space-y-4">
        {transactions.map(txn => (
          <li
            key={txn.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{txn.description}</p>
              <p className="text-sm text-gray-500">{txn.date}</p>
            </div>

            <p
              className={`font-semibold ${
                txn.type === "credit"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {txn.type === "credit" ? "+" : "-"}
              {formatCurrency(txn.amount)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
