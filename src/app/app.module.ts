import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessagesListComponent } from './messages-list/messages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatroomComponent,
    MessagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
