import {Actualite} from '../models/actualite.model';


export class AnnonceService {

  private annonces: Actualite[];
    constructor(){

    }

    getAnnonceById( id: string ){
        return this.annonces.find(
        annonce => annonce.id === id
        );
    }
}
