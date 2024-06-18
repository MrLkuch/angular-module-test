import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { GreetingMessageComponent } from './greeting-message/greeting-message.component';


@NgModule({
  declarations: [
    WelcomeMessageComponent,
    GreetingMessageComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [WelcomeMessageComponent, GreetingMessageComponent],
})
export class WelcomeModule { }
