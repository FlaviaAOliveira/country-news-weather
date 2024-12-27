import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data-service.service';
import { HttpOptions } from '@capacitor/core';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader]
})
export class CountriesPage implements OnInit {
  countries: any[] = [];
  countryName: string = '';

  constructor(private mds: MyDataService, private mhs: MyHttpService) {}

  ngOnInit() {
    this.countryName = this.mds.getCountryName();
    this.searchCountries();
  }

  async searchCountries() {
    var name = this.mds.getCountryName();
    console.log("Searching countries name with name:", name);


    var   options:HttpOptions = {
      url: `https://restcountries.com/v3.1/name/${name}`,
    }
    let result = await this.mhs.get(options);
    console.log("API response:", result);
    this.countries = result.data;
  }

}




// constructor(private mhs: MyHttpService, private activatedRoute: ActivatedRoute) { }

// ngOnInit() {
//   this.activatedRoute.paramMap.subscribe(params => {
//     const countryName = params.get('countryName');
//     if (countryName) {
//       this.searchInput = countryName;
//       this.getCountries();
//     }
//   });
// }

// async getCountries() {
//   var options:HttpOptions = {
//     url: `https://restcountries.com/v3.1/name/${this.searchInput}`,
//   }

// }
