import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewParentComponent(data:any){
    console.log("Child");
    alert(data);
  }

}
