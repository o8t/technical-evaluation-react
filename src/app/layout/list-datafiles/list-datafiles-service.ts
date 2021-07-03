import { Observable } from "rxjs/Rx"
import { Injectable, OnInit }     from '@angular/core';
import { Datafile } from '../../models/datafile';
import {AppSettings} from '../../app.settings';

@Injectable()
export class ListDatafilesService {

    constructor () {}

    // get list of data files
    getDatafiles(){
      // use recid in local storage (convert str to int)
      let lastRecId = localStorage.getItem("lastRecId");
      let lastRecIdNum = +lastRecId;

      let listDatafiles = [];
      for (let i = 1; i < +lastRecIdNum; i++){
        listDatafiles.push(JSON.parse(localStorage.getItem("recId_"+i.toString())));
      }

      return listDatafiles;
    }

    // add new data file
    addDatafile(datafile) {

      // initialise recid for first rec
      if (localStorage.getItem("lastRecId") == null){
        localStorage.setItem("lastRecId","1");
      }
      let lastRecId = localStorage.getItem("lastRecId");

      //persist rec
      let lastRecIdNum = +lastRecId;
      localStorage.setItem("recId_"+lastRecIdNum.toString(),JSON.stringify(datafile));

      // increment recid for next rec
      lastRecIdNum += 1;
      localStorage.setItem("lastRecId",lastRecIdNum.toString());
    }
}
