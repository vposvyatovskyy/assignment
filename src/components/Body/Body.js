import CurrenciesTable from "./CurrenciesTable/CurrenciesTable";
import classes from './Body.module.css';
import useWebSocket from "../../hooks/useWebSocket";
import useWebApi from "../../hooks/useWebApi";
import { useAuth0 } from "@auth0/auth0-react";
import Wallet from "./Wallet/Wallet";

function Body() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const url = "ws://webtask.future-processing.com:8068/ws/currencies";
    const data = useWebApi(url);
    let purchaseTable = <p>Found no currencies for sale</p>
    let walletTable = <h2>Not Authorized</h2>

    if (data.length !== 0) {
        purchaseTable = <CurrenciesTable actionType="Buy" currencies={data.items} />
    }
    if (isAuthenticated) {
        walletTable = <Wallet />;
    }

    return (
        <div className={classes.body}>
            <div className={classes.tableBox}>
                <div className={classes.tableName}>Currencies</div>
                <div>{purchaseTable}</div>
            </div>{!isAuthenticated ?
                <h2>Not Authenticated</h2> :
                <div className={classes.tableBox}>
                    <div className={classes.tableName}>Wallet</div>
                    <div>{walletTable}</div>
                    <br />
                    <div>Total PLN</div>
                </div>
            }
        </div>
    )
};

export default Body;