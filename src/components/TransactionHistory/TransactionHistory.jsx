import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';



export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>

                {items.map(({id, type, amount, currency}) => (                
                    <TransactionHistoryItem 
                        id= {id}
                        type = {type}
                        amount = {amount}
                        currency = {currency}
                    />
                )
                )}

            </tbody>

        </table>

            
    )
}

TransactionHistoryItem.propType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};