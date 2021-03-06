import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../services/platillo.service';
import { NgForm } from '@angular/forms'
import { Platillo } from 'src/app/models/platillos';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  constructor(public PlatilloService: PlatilloService) { }

  ngOnInit(): void {
    this.getPlatillos();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getPlatillos(){
    this.PlatilloService.getPlatillos().subscribe(
      res => {this.PlatilloService.platillos = res;},
      err => console.log(err)
    )
  }

  addPlatillo(form: NgForm){
    if(form.value._id){
      this.PlatilloService.putPlatillo(form.value).subscribe(
         res => {
                      this.getPlatillos();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.PlatilloService.createPlatillo(form.value).subscribe(
        res => {
          this.getPlatillos();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deletePlatillo(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.PlatilloService.deletePlatillo(_id).subscribe(
        (res) => {
          this.getPlatillos();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editPlatillo(platillo:Platillo){
    this.PlatilloService.selectedPlatillo = platillo;
  }

}
