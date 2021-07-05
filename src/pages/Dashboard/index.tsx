import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ClownCard from "../../components/ClownCard";
import {IClown} from "../../interfaces/clown";
import './style.scss';
import {showAlert} from "../../utils/helper";
import history from "../../utils/history";


const Dashboard = () => {

    const [list,setList] = useState<Array<IClown>>();
    const [name,setName] = useState("");

    useEffect(()=>{
        let data = localStorage.getItem("clowns") || "";
        let clownList:Array<IClown> = JSON.parse(data);
        let tmp = []
        for(let i=0;i<4;i++){
            tmp.push(clownList[i]);
        }
        setList(tmp);
    },[setList]);

    const searchClown = () =>{
        debugger
        if(!name){
            showAlert("Name is required","error");
        }else{
            let data = localStorage.getItem("clowns") || "";
            let clownList:Array<IClown> = JSON.parse(data);
            const results = clownList.filter((clown:IClown) =>
                clown.name.toLowerCase().includes(name)
            );
            history.push({
                pathname:"/clown-list",
                state:{
                    data:{
                        clowns:results,
                        isClownSearch: true
                    }
                }
            });
        }
    }

    return (
        <div className={"dashboard"}>
            <div className={"clown-bg d-flex justify-content-center align-items-center flex-column"}>
                   <h2 className={"text-white font-weight-bolder"}>CLOWNS</h2>
                <div className={"align-items-center d-flex flex-column flex-md-row justify-content-between w-50"}>
                    <Link to={"/add-list"}>
                        <button className="button btn-add"><span>Add Clowns </span></button>
                    </Link>
                    <Link to={"/clown-list"}>
                        <button className="button btn-list"><span>Clowns list </span></button>
                    </Link>
                </div>
                <div className="d-flex justify-content-between w-50 mt-5 flex-column flex-md-row">
                    <input className={"search-input"} onChange={(e)=>setName(e.target.value)} value={name}  type="text" placeholder="Enter clown name"/>
                    <button onClick={searchClown} className={"search-btn"}>Search</button>
                </div>
            </div>
            <div className={"d-flex my-4"}>
                {/*<AddClown/>*/}
                <div className={"row col-12"}>
                    {list && list.map((clown:IClown,i)=>{
                        return(
                            <div key={i} className={"col-12 col-md-3"}>
                                <ClownCard name={clown.name} picture={clown.picture} email={clown.email}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
        // <ClownList/>
    )
};

export default Dashboard;
