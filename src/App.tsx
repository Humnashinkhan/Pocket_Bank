
import { useState } from "react";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import TransferForm from "./components/TransferForm";
import TransactionFilter from "./components/TransactionFilter";
import { initialTransactions } from "./data/transactions";
import { Transaction } from "./types/transaction";

export default function App() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const [filter, setFilter] =
    useState<"all" | "income" | "expenses">("all");

  const balance = transactions.reduce((acc, txn) => {
    return txn.type === "credit"
      ? acc + txn.amount
      : acc - txn.amount;
  }, 0);

  const filteredTransactions = transactions.filter(txn => {
    if (filter === "income") return txn.type === "credit";
    if (filter === "expenses") return txn.type === "debit";
    return true;
  });

  const handleSend = (
    recipient: string,
    amount: number,
    date: string
  ) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      date,
      description: recipient,
      amount,
      type: "debit",
    };

    setTransactions(prev => [newTransaction, ...prev]);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <BalanceCard balance={balance} />
      <TransferForm balance={balance} onSend={handleSend} />

      <div className="md:col-span-3">
        <TransactionFilter filter={filter} setFilter={setFilter} />
        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
}
