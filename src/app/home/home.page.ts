import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { RouterLink} from '@angular/router';
import { Router } from '@angular/router';
import { settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, RouterLink, FormsModule],
})
export class HomePage {
  countryName: string = '';
  countries: any[] = [];

  options:HttpOptions = {
    url: "",
  }

  constructor(private router: Router, private mhs: MyHttpService, private mds: MyDataService) {
    addIcons({ settingsOutline });
  }

  async search() {
    this.mds.setCountryName(this.countryName);
    this.router.navigate(['/countries']);
  }

}
