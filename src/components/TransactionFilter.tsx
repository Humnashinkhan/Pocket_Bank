interface Props {
  filter: string;
  setFilter: (value: "all" | "income" | "expenses") => void;
}

export default function TransactionFilter({ filter, setFilter }: Props) {
  const filters = ["all", "income", "expenses"] as const;

  return (
    <div className="flex gap-2 mb-4">
      {filters.map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            filter === type
              ? "bg-teal-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
