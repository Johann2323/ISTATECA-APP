import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { doch } from './doch';

@Component({
  selector: 'app-solicitud-libro',
  templateUrl: './solicitud-libro.component.html',
  styleUrls: ['./solicitud-libro.component.css']
})
export class SolicitudLibroComponent implements OnInit {
mostrar:boolean=false;
doch:doch[]=[]
variable?:number

documentos:doch=new doch;
names?:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  activarDoc(){
    this.mostrar=true
  }
  desactivarDoc(){
    this.mostrar=false
  }
  guardarDoc(doc:string,reg:NgForm){
    if(doc==""){
      alert("Ingrese un tipo de documento")
    }else{
      this.variable=this.doch.length+1;
      

        this.names?.push(doc)
        console.log(this.names)
      
      


    }
    
    
    reg.reset();
    

  }



}
