import Table from "./Table";
import classes from './Body.module.css';
import { useEffect, useCallback, useState } from 'react'

function Body(props) {

    let purchaseTable = <p>Found no currencies for sale</p>

    purchaseTable = <Table actionType="Buy" currencies={props.data} />

    return (
        <div className={classes.body}>
            <div className={classes.tableBox}>
                <div className={classes.tableName}>Currencies</div>
                <div>{purchaseTable}</div>
            </div>
            <div className={classes.tableBox}>
                <div className={classes.tableName}>Wallet</div>
                <div>{purchaseTable}</div>
                <br />
                <div>Total PLN</div>
            </div>
        </div>
    )
};

export default Body;