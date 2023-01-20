import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from '../store/accountSlice';
import useFetchUserData from '../hooks/useFetchUserData';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import LogoutButton from './logout';

function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.account.isAuth);
    const name = useSelector(state => state.account.name);
    const { loginWithRedirect, logout } = useAuth0();
    let inoutButton = <LoginButton />;
    let email;
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isAuthenticated) {
        inoutButton = <LogoutButton />;
        email = user.email;
    }
    UserAccountSetup(email);

    return (
        <header className={classes.header}>
            <div className='logo'>
                <h2>Exchange</h2>
            </div>
            <ul>
                <li>
                    <div>Logged in as John Doe</div>
                </li>
                <li>
                    <button className={classes.editButton}>Edit</button>
                </li>
                <li>
                    {inoutButton}
                </li>

            </ul>
        </header>
    );
}

function UserAccountSetup(email) {
    const wallet = useSelector(state => state.account.wallet);
    const userData = useFetchUserData(email);
    console.log(userData);
    accountActions.login(userData);
}

export default Header;