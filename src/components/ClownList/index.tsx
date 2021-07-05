import React, {useEffect, useState} from 'react';
import {IClown} from "../../interfaces/clown";
import './style.scss';
import history from "../../utils/history";


const ClownList = () => {

    const [clownList,setClownList] = useState<Array<IClown>>();

    useEffect(()=>{
debugger
        // @ts-ignore
        let clowns = history.location.state?.data;
        if(clowns?.isClownSearch){
            if(clowns.clowns){
                setClownList(clowns.clowns);
            }
        }else{
            let data = localStorage.getItem("clowns") || "";
            let clownList:Array<IClown> = JSON.parse(data);
            setClownList(clownList);
        }

    },[setClownList])

    return (

        <div className={"clowns-list mt-5 pt-5"}>
            <p className={"list"}>Clowns List</p>
            {clownList?.length === 0 &&
            <div  className={'list-card d-flex'}>
                <div className={'py-3 col-12 align-items-start d-flex justify-content-center'}>
                    <h3 className={"m-0"}>No Clowns Found</h3>
                </div>
            </div>
            }
            {clownList && clownList.map((clown:IClown,index:number)=>{
                return(
                    <div key={index} className={'list-card d-flex'}>
                        <div className={'py-3 col-12 align-items-start d-flex justify-content-between'}>
                            <div className={"col-md-3 col-12"}>
                                <img className={"img"} height={"100px"} alt={"profile-pic"} src={clown.picture}/>
                            </div>
                            <div className={"col-md-9 col-12"}>
                                <h3 className={"mb-0 pb-1"}>{clown.name}</h3>
                                <div className={'d-flex flex-column align-items-md-start align-items-center'}>
                                    <div className={"d-flex mt-2"}>
                                        <p className={"mb-0 pb-1"}> {clown.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    );
};

export default ClownList;
