import Header from "./Header/Header";
import { Fragment } from "react";
import Styles from './body.module.scss'

function DefaultLayout(props) {
    return (
        <Fragment>
            <Header />
                <div className={Styles.wrapper}>
                    {props.children}
                </div>
        </Fragment>
    );
}

export default DefaultLayout;