import classes from './CurrenciesTableRow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from '../../../store/accountSlice';

function CurrenciesTableRow(props) {
    const dispatch = useDispatch();

    function OnClickHandler(){
        
        switch(props.actionType){
            case "Buy":
                const payload = {
                    unit: props.rowData.unit,
                    code: props.rowData.code
                };
                dispatch(accountActions.buy(payload));
            case "Sell":
                dispatch(accountActions.sell);
        }
        
    }
    return(
        <div className={classes.row}>
            <div className={classes.rowItem}>{props.rowData.code}</div>
            <div className={classes.rowItem}>{props.rowData.unit}</div>
            <div className={classes.rowItem}>{props.rowData.sellPrice}</div>
            <button className={classes.rowItem} onClick={OnClickHandler}>{props.actionType}</button>
        </div>
    )
}

export default CurrenciesTableRow;