import React from "react";
import './style.scss';
import {IClown} from "../../interfaces/clown";


const ClownCard = ({name,email,picture}:IClown) => {

    return (
        <div className={"clown-card"} id="cards_landscape_wrap-2">
            <div className="card-flyer">
                <div className="text-box">
                    <div className="image-box">
                        <img alt="pic" src={picture}/>
                    </div>
                    <div className="text-container">
                        <h6>{name}</h6>
                        <p>
                            {email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ClownCard;
