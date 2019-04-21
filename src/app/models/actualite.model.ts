export class Actualite {
    id: string;
    type: string;
    description: string;
    date: Date;
    image: string;

    constructor( id: string, type: string, description: string, image: string) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.date = new Date();
        this.image = image;
    }
}
