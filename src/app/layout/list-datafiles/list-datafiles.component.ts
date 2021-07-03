import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListDatafilesService } from './list-datafiles-service';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Datafile } from '../../models/datafile';
import { Options } from 'ng5-slider';

@Component({
    selector: 'list-files',
    providers: [ListDatafilesService],
    templateUrl: './list-datafiles.component.html',
    styleUrls: ['./list-datafiles.component.scss']
})

export class ListDatafilesComponent implements OnInit{

    @Input()
    uploadForm: FormGroup;
    datafiles : Datafile[];
    datafile : Datafile;
    crazinessLevel:number;
    message:string;

    crazinessLevelliderOptions: Options =  {
      floor: 0,
      ceil: 10
    };

    sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    ngOnInit() {
      this.message = "";
      this.crazinessLevel = 3;
      this.datafile = new Datafile();
      this.uploadForm = this.formBuilder.group({
          profileImage: ['']
      });
      this.datafiles = this.listDatafilesService.getDatafiles();
    }

    // check if email is valid
    checkEmail(){
      let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(this.datafile.email);
      if (!isValid) {
        this.message = "Please enter valid email.";
      }
    }

    // add clown
    addClown(){
        this.datafile.crazinessLevel = this.crazinessLevel;
        this.datafile.profileImage = localStorage.getItem("imageData");
        localStorage.removeItem("imageData");

        this.listDatafilesService.addDatafile(this.datafile);
        this.message = "Record added.";

        this.sleep(2000).then(() => {
          this.message = "";
        });

        this.datafiles = this.listDatafilesService.getDatafiles();
      }

    // on file select
    onFileSelect(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(file);
        // on load, set iamge string in localstorage so that it can be retrieved and set for file
        reader.onload = function () {
          localStorage.setItem("imageData",reader.result.toString());
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
    }

    // constructor
    constructor( private listDatafilesService: ListDatafilesService,
                  private formBuilder: FormBuilder
                )
      {};
}
