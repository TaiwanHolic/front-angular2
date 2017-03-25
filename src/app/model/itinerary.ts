export class Itinerary{
    id: number;
    name: string;
    banner_url: string;
    photo_url: string;
    stars: number;
    area: string;
    city: string;
    tags?: Array<string>;
    day?: number;
    suggest_time?: string;
    overview?: string;
    map_x? : number;
    package?: string;
    equipment?: string;
    bookurl?: string;
    link?:string;
    file?:string;
    pictures?: Array<string>

    constructor(){
        this.id = 0;
        this.name = "";
        this.banner_url = "";
        this.photo_url = "";
        this.stars = 1;
        this.area = "";
        this.city = "";
        this.pictures = [];
        this.file = "";
    }
}