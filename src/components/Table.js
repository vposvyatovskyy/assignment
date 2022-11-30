import Row from './Row';
import classes from './Table.module.css';

function Table(props) {
    console.log(props.currencies[0]);
    return (
        <div>
            <div className={classes.tableHeaders}>
                <div className={classes.tableHeader}>Currency</div>
                <div className={classes.tableHeader}>Units</div>
                <div className={classes.tableHeader}>Values</div>
                <div className={classes.tableHeader}>Actions</div>
            </div>
            {props.currencies.map((currency) => <Row actionType={props.actionType} onClickHandler={props.onClickHandler} rowData={currency}/>)}
        </div>
    );
}

export default Table;