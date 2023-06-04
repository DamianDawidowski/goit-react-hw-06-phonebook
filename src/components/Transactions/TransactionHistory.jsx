import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const Transactions = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.topRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      currency: propTypes.string.isRequired,
      id: propTypes.number,
    })
  ),
};

export default Transactions;
