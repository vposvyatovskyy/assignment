import classes from './Row.module.css';

function Row(props) {
    return(
        <div className={classes.row}>
            <div className={classes.rowItem}>{props.rowData.Code}</div>
            <div className={classes.rowItem}>{props.rowData.Unit}</div>
            <div className={classes.rowItem}>{props.rowData.SellPrice}</div>
            <button className={classes.rowItem} onClick={props.onClickHandler}>{props.actionType}</button>
        </div>
    )
}

export default Row;