import { useSelector } from "react-redux";
import WalletRow from "./WalletRow"
import classes from "./Wallet.module.css";

function Wallet() {
    const wallet = useSelector(state => state.account.wallet);
    const officeBank = useSelector(state => state.exchangeOffice.officeBank);
    return (
        <div>
            <div className={classes.tableHeaders}>
                <div className={classes.tableHeader}>Currency</div>
                <div className={classes.tableHeader}>Unit price</div>
                <div className={classes.tableHeader}>Amount</div>
                <div className={classes.tableHeader}>Value</div>
                <div className={classes.tableHeader}>Actions</div>
            </div>
            <div>
                {wallet.USD !== null && <WalletRow code="USD" unit={wallet.USD} sellPrice={officeBank.USD.sellPrice} />}
                {wallet.USD !== null && <WalletRow code="GBP" unit={wallet.GBP} sellPrice={officeBank.GBP.sellPrice} />}
                {wallet.USD !== null && <WalletRow code="EUR" unit={wallet.EUR} sellPrice={officeBank.EUR.sellPrice} />}
                {wallet.USD !== null && <WalletRow code="CZK" unit={wallet.CZK} sellPrice={officeBank.CZK.sellPrice} />}
                {wallet.USD !== null && <WalletRow code="RUB" unit={wallet.RUB} sellPrice={officeBank.RUB.sellPrice} />}
                {wallet.USD !== null && <WalletRow code="CHF" unit={wallet.CHF} sellPrice={officeBank.CHF.sellPrice} />}
            </div>
        </div>
    )
}

export default Wallet;