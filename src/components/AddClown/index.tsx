import React, {useState} from "react";
import ImgUpload from "../../components/ImageUpload";
import PreviewLogo from "../../assets/img/user.svg"
import {IClown} from "../../interfaces/clown";
import history from "../../utils/history";
import './style.scss';
import {showAlert} from "../../utils/helper";


const AddClown = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState(false);
    const [file,setFile]  = useState()
    const [imagePreviewUrl,setImagePreviewUrl]:any  = useState(PreviewLogo)

    const photoUpload = (e:any)=> {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file)
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }



    const addClowns = (e:any) => {
        e.preventDefault();
        let data = localStorage.getItem("clowns") || "";
        let clownList:Array<IClown> = JSON.parse(data);
        if(!file){
            setError(true);
        }else{
            setError(false);
            let obj = {
                email:email,
                name:name,
                picture:imagePreviewUrl,
            }
            clownList.push(obj);
            localStorage.setItem("clowns",JSON.stringify(clownList));
            showAlert("Clown Added successfully!","success")
            history.push({pathname:"/"});
        }
    }

    return (
        <>
            <h2 className={"main-title"}>Add Clown</h2>
            <div className={"custom-card mt-5 pt-1"}>
                <form className={"w-75 mx-auto my-4"} onSubmit={addClowns}>
                    <div className="form-group d-flex justify-content-center flex-column align-items-center">
                        <ImgUpload isDefault={!!file} onChange = {photoUpload} src={imagePreviewUrl}/>
                        {error && <p className={"text-danger"}>Image is required</p>}
                    </div>
                    <div className={"col-12 d-flex flex-md-row flex-column"}>
                        <div className={"col-md-6"}>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={name}
                                    onChange={(event)=>setName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    required
                                    value={email}
                                    onChange={(event)=>setEmail(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={"col-12 d-flex justify-content-center"}>
                        <button type="submit" className="btn btn-primary px-5">
                            Add
                        </button>
                    </div>
                </form>
            </div>

        </>

    )
};

export default AddClown;
