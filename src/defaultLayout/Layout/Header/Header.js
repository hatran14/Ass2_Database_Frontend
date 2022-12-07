import Styles from './header.module.scss'
import { AppContext } from '../../../store/appContext'
import { useContext } from 'react'

const Admin = () => {
    return (
        <div className={Styles.header}>
            <a href='/login'>haiha1234 (Đăng xuất)</a>
        </div>
    )
}

function Header() {
    const context = useContext(AppContext);

    return (
        <>
            {context.role === '0'}
            {context.role === '1' && <Admin/>}
        </>
    )
}

export default Header;