import Header from "./Header";
import { Fragment } from "react";
import Footer from "./Footer";

function DefaultLayout(props) {
    return (
        <Fragment>
            <Header />
                {props.children}
            <Footer/>
        </Fragment>
    );
}

export default DefaultLayout;