import { Transaction } from "../types/transaction";

export const initialTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-03-01",
    description: "Salary",
    amount: 15000,
    type: "credit",
  },
  {
    id: "2",
    date: "2024-03-03",
    description: "Nykaa",
    amount: 2200,
    type: "debit",
  },
  {
    id: "3",
    date: "2024-03-04",
    description: "Starbucks",
    amount: 350,
    type: "debit",
  },
];
