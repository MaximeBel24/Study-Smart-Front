import { Category } from "./category.model";
import { Image } from "./image.model";

export class Course {
    id! : number;
    title! : string;
    description! : string;
    price! : number;
    duration! : number;
    level! : string;
    category! : Category;
    image! : Image;
    imageStr! : string;

    images!: Image[];
}