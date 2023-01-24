import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { CompComponent } from './comp/comp.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'view-child-decorater';
  @ViewChild('texttt') texttt!: ElementRef;
  @ViewChild('textt') textt!: ElementRef;
  @ViewChild(CompComponent) child!: CompComponent;
  public id !: number;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ){}
  ngOnInit(){    
  }
  ngAfterViewInit(): void {
    
  }

  clickMe(){
    this.textt.nativeElement.style.backgroundColor="red";
    alert(this.texttt.nativeElement.value);
    this.child.viewParentComponent(this.texttt.nativeElement.value);
  }

  callComponent(){
    this.route.navigateByUrl('/comp');
  }

}
