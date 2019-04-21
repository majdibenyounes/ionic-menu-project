import {Actualite} from '../models/actualite.model';

export class AnnonceService {

  private annonces: Actualite[];
    constructor(){
        this.annonces =[
            new Actualite('1', 'À propos', 'L’Agence tunisienne d’internet (ATI) a été créée en 1996 sous la forme d’une société anonyme pour assurer le rôle de fournisseur grossiste en matière d’accès aux services internet en Tunisie et de fournisseur détaillant de ce même service à l’administration, aux  organismes et aux autres organisations. De plus, elle a été désignée pour assurer le rôle d’opérateur public pour les services à valeur ajoutée des télécommunications de type internet.', './assets/ati31.jpg//'),
            new Actualite('2', 'Nouveauté', 'Rôle de l’Agence en tant que fournisseur de services internet', './assets/bandeau-nouveauté.jpg/'),
            new Actualite('3', 'Urgent', 'Rôle de l’Agence en tant qu’opérateur public', './assets/urgent.jpg/'),
            new Actualite('4', 'Evenement', 'Rôle de l’Agence dans le développement du secteur', './assets/evenement.png/'),
            new Actualite('5', 'Evenement', 'Rôle de l’Agence dans le développement du secteur', './assets/evenement.png/')
    ];
    }

    getAnnonceById( id: string ){
        return this.annonces.find(
        annonce => annonce.id === id
        );
    }
}
