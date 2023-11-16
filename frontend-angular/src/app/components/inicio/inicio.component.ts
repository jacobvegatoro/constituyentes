import { Component, OnInit } from '@angular/core';
import { Convencion, Integrante } from 'src/app/interfaces/convencion.interface';
import { ApibackendService } from 'src/app/services/apibackend.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  apiBackendService: ApibackendService;
  //public integrantesList: Convencion | never[] = {"status":"","data":{"integrantes":[]}};
  public integrantesList: Integrante[] = [];

  constructor(private apiservice:ApibackendService){
    this.apiBackendService = apiservice;
  }

  ngOnInit(): void {
    this.obtenerIntegrantes();
  }

  obtenerIntegrantes ():void{

    this.apiBackendService.getIntegrantes( )
      .subscribe( integrantes => {
        console.log(integrantes.data.integrantes);
        //this.integrantesList = JSON.parse(integrantes);
        this.integrantesList = integrantes.data.integrantes;
        //var integrante;
        //for (let i = 0; i < integrantes.data.length; i++){
        //for (let integrante of integrantes.data){
          /*let testEl = integrantes.data[i];
          let resultObj:Integrante = {"_id":"","entity":"","content":{"name":"","image":""}};
          resultObj._id = testEl[0];
          resultObj.entity = testEl[1];
          resultObj.content = testEl[2];
          this.integrantesList.push(resultObj);*/
          //console.log(integrante);
        //}
        

      } );
  }
}
