export class Activity{
    id: number;
    area: string;
    city?: string;
    name: string;
    banner_url: string;
    photo_url: string;
    stars: number;
    price: string;
    price_min?: number;
    price_max?: number;
    tellphone?: string;
    address?: string;
    web_url?:string;
    is_wifi?: boolean;
    is_parking?: boolean;
    open_time?: Array<string>;
    map_x?: number;
    map_y?:number;
    pictures?: Array<string>;

    constructor(){
        this.id = 0;
        this.area = "";
        this.city = "";
        this.name = "";
        this.banner_url = "";
        this.photo_url = "";
        this.stars = 1;
        this.price = "low";
        this.pictures = [];
    }
}