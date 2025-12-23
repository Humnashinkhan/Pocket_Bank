export type TransactionType = "credit" | "debit";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: TransactionType;
}
