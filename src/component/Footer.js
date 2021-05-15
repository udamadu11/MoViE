import React from 'react';

function Footer(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="footer p-3 mt-4 text-center bg-dark text-light">
                    Developy By : 
                    <span className="text-warning font-weight-normal">
                        Udara Madumalka
                    </span>
                    ,Using React Js &amp;
                    Integrated with external movies data Api
                </div>
            </div>
        </div>
    );
}

export default Footer;