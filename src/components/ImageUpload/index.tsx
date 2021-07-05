import React from "react";
import {IImage} from "../../interfaces/image";
import './style.scss';

const ImgUpload =({isDefault,onChange, src}:IImage)=>{

    return(
        <div className={"img-preview"}>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
                <div className="img-wrap img-upload">
                    {/*@ts-ignore*/}
                    <img className={!isDefault?"p-3":""} htmlFor="photo-upload" alt="profile-pic" src={src}/>
                </div>
                <input id="photo-upload" className={"d-none"} type="file" onChange={onChange}/>
            </label>
        </div>
    );
}

export default ImgUpload;
