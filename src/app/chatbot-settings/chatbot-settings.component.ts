import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chatbot-settings',
  templateUrl: './chatbot-settings.component.html',
  styleUrls: ['./chatbot-settings.component.css']
})
export class ChatbotSettingsComponent {
  
  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Settings | TechTalk");
  }

}
