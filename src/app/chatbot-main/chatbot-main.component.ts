import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { ChatbotService } from '../services/chatbot.service';
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chatbot-main',
  templateUrl: './chatbot-main.component.html',
  styleUrls: ['./chatbot-main.component.css'],
  providers: [ChatbotService] 
})
export class ChatbotMainComponent implements AfterViewInit {
  openSidenav: boolean = true;
  messageRes$: Observable<any> | undefined;
  messageController: FormControl = new FormControl();
  messages: any[] = [];
  resHasError: boolean = true;
  
  constructor(private titleService: Title, private chatService: ChatbotService){}

  ngOnInit(){
    console.log("anc");
    this.titleService.setTitle("Chat | TechTalk");

    this.chatService.getIndex().subscribe(res => {
      console.log(res);
    })

    for(let i=0; i<10; i++){
      this.messages.unshift(i + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }
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

  onSendMessage(){
    console.log(this.messageController);
    this.messageRes$ = this.chatService.postMessage(this.messageController.value).pipe(map(element => element.res));
    //this.messageRes$.subscribe(res => console.log(res));
    console.log(this.messageRes$);
    //this.messageRes$.subscribe(response => this.messages.push(response.res));
    //this.messages.push(this.messageRes$);
    this.messages.unshift('asddnansdsna');
  }


}
