import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualite.model';
import { NavController } from '@ionic/angular';
import { AnnonceService } from '../services/annonce.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {

  aActualite: Actualite[];

  constructor(private navCtrl: NavController, private annonceService: AnnonceService,private http: HttpClient) {

    this.http.get('http://127.0.0.1:8000/api/actualites')
        .subscribe(
            data => {
              this.aActualite = data['hydra:member'];
              console.log(data['hydra:member']);
              //return new Actualite(data.id, data);
            }
        )
  }

  ngOnInit() {
  }



}
