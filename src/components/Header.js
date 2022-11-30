import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from '../store/accountSlice';

function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.account.isAuth);
    const name = useSelector(state=>state.account.name);

    function logoutHandler() {
        console.log("button pressed=");
        dispatch(accountActions.logout());
    }
    function loginHandler() {
        console.log("button pressed");
        dispatch(accountActions.login());
    }

    return (
        <header className={classes.header}>
            <div className='logo'>
                <h2>Exchange</h2>
            </div>
            <ul>
                <li>
                    <div>Logged in as {name}</div>
                </li>
                <li>
                    <button className={classes.editButton}>Edit</button>
                </li>
                <li>
                    <button className={classes.loginButton} onClick={isAuth ? logoutHandler : loginHandler}>{isAuth ? 'Logout' : 'Login'}</button>
                </li>

            </ul>
        </header>
    );
}

export default Header;