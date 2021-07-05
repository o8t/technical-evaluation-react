import React from 'react';
import './style.scss';

const Footer = () => {

    return (
        <div className={"footer"} style={{marginTop:"auto"}}>
            {/* Footer Section Begin */}
            <footer className="footer set-bg bg-img py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="">
                                <p className={"text-white"}>Copyright © {new Date().getFullYear()} All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
        </div>
    );
};

export default Footer;
