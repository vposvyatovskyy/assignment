import classes from './WalletRow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from '../../../store/accountSlice';

function WalletRow(props) {
    const dispatch = useDispatch();

    function OnClickHandler() {
        dispatch(accountActions.sell);
    }
return (
    <div className={classes.row}>
        <div className={classes.rowItem}>{props.rowData.code}</div>
        <div className={classes.rowItem}>{props.rowData.unit}</div>
        <div className={classes.rowItem}>{props.rowData.sellPrice}</div>
        <button className={classes.rowItem} onClick={OnClickHandler}>{props.actionType}</button>
    </div>
)
}

export default WalletRow;