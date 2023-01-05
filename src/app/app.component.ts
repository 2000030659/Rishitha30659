import { Component } from '@angular/core';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sucess:boolean=true;
  LandSucc:boolean=true;
  showError!: string;

  constructor(private http:FlightsService) { }

  flightData:any=[]
  dev_name="Rishitha30659";
  
  ngOnInit()
  {
    
     this.http.fetchFlights().subscribe(data=>{
        // console.log("responce recived ",data),
      this.flightData = data;
      if(this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :",this.flightData)      
      // error=>console.log("exception recoved ")
      })
  }

  sendYear(year:any): void {
    console.log(year);
    this.http.fetchAll(year,this.sucess,this.LandSucc).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("sucees :",this.flightData)      
    // error=>console.log("exception recoved ")
    })
  }

  sendSuccess(succ:any) {
    this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("sucees :",this.flightData)      
    // error=>console.log("exception recoved ")
    })
  }

  LandSuccLuanchSucc(val:any){
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("Land :",this.flightData)      
    // error=>console.log("exception recoved ")
    })

  }

}
