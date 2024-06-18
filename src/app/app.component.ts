import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeModule } from "./welcome/welcome.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, WelcomeModule, ShoppingListModule]
})
export class AppComponent {
  title = 'module-test';
}
