import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.css'
})
export class WelcomeMessageComponent {
  message: string = 'Bienvenue dans notre application !';
}
