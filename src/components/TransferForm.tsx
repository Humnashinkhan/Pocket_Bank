import { useState } from "react";

interface Props {
  balance: number;
  onSend: (recipient: string, amount: number, date: string) => void;
}

export default function TransferForm({ balance, onSend }: Props) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    setError("");
    setSuccess("");

    if (amount <= 0) {
      setError("Amount must be greater than zero");
      return;
    }

    if (amount > balance) {
      setError("Insufficient Funds");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      onSend(recipient, amount, date);
      setLoading(false);
      setSuccess("Transfer Successful!");
      setRecipient("");
      setAmount(0);
      setDate("");

      setTimeout(() => setSuccess(""), 2000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Send Money</h2>

      <input
        placeholder="Recipient Name"
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-teal-700 text-white p-2 rounded disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
