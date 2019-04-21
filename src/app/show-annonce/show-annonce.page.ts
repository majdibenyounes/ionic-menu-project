import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualite.model';
import { AnnonceService } from '../services/annonce.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-annonce',
  templateUrl: './show-annonce.page.html',
  styleUrls: ['./show-annonce.page.scss'],
})
export class ShowAnnoncePage implements OnInit {
id: string;
annonce: Actualite;

  constructor(
              private annonceService: AnnonceService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.annonce = this.annonceService.getAnnonceById(this.id);
  }

}
