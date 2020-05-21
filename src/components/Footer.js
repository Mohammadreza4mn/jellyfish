import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="fixed-bottom d-flex p-3">
                <Link to="/jellyfish">
                    <img src="public/../assets/img/favicon.png " />
                </Link>
            </div>
        )
    }
}

export default Footer;