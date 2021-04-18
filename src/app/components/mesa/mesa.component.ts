import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../services/mesacrud.service';
import { NgForm } from '@angular/forms'
import { Mesa } from 'src/app/models/mesas';



@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  constructor(public MesaService:MesaService) { }

  ngOnInit(): void {
    this.getMesas();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getMesas(){
    this.MesaService.getMesas().subscribe(
      res => {this.MesaService.mesas = res;},
      err => console.log(err)
    )
  }

  addMesa(form: NgForm){
    if(form.value._id){
      this.MesaService.putMesa(form.value).subscribe(
         res => {
                      this.getMesas();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.MesaService.createMesa(form.value).subscribe(
        res => {
          this.getMesas();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteMesa(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.MesaService.deleteMesa(_id).subscribe(
        (res) => {
          this.getMesas();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editMesa(mesa:Mesa){
    this.MesaService.selectedMesa = mesa;
  }


}
