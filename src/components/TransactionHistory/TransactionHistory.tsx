import css from './TransactionHistory.module.css';

interface ITransactionHistory {
  items: { id: string; type: string; amount: string; currency: string }[];
}

const TransactionHistory: React.FC<ITransactionHistory> = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactionRow}>
            <td className={css.transactionData}>{type}</td>
            <td className={css.transactionData}>{amount}</td>
            <td className={css.transactionData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
