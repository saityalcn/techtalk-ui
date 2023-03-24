import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotMainComponent } from './chatbot-main/chatbot-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ChatbotAnalytcsComponent } from './chatbot-analytcs/chatbot-analytcs.component';
import { ChatbotSettingsComponent } from './chatbot-settings/chatbot-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotMainComponent,
    ChatbotAnalytcsComponent,
    ChatbotSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
