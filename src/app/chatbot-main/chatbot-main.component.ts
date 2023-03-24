import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chatbot-main',
  templateUrl: './chatbot-main.component.html',
  styleUrls: ['./chatbot-main.component.css']
})
export class ChatbotMainComponent implements AfterViewInit {
  openSidenav: boolean = true;

  
  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Chat | TechTalk");
  }


  ngAfterViewInit(): void {
  }

  onDrawerToggle(){
    const classList = document.getElementById('mat-icon-drawer-toggle')?.classList;
    if(classList?.contains('rotate-drawer-icon')){
      classList?.remove('rotate-drawer-icon')
      classList?.add('rotate-drawer-icon-toggle');
    }

    else {
      classList?.remove('rotate-drawer-icon-toggle')
      classList?.add('rotate-drawer-icon')
    }
  }


}
