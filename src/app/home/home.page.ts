import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonInput } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
  }
  
}