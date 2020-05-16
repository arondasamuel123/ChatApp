import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatroomComponent,
    MessagesListComponent,
    DeleteMessageComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
