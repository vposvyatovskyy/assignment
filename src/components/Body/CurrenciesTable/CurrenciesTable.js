import CurrenciesTableRow from './CurrenciesTableRow';
import classes from './CurrenciesTable.module.css';

function CurrenciesTable(props) {
    return (
        <div>
            <div className={classes.tableHeaders}>
                <div className={classes.tableHeader}>Currency</div>
                <div className={classes.tableHeader}>Units</div>
                <div className={classes.tableHeader}>Values</div>
                <div className={classes.tableHeader}>Actions</div>
            </div>
            {props.currencies.map((currency) => <CurrenciesTableRow onClickHandler={props.onClickHandler} rowData={currency}/>)}
        </div>
    );
}

export default CurrenciesTable;