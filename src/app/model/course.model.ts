import { Category } from "./category.model";

export class Course {
    id! : number;
    title! : string;
    description! : string;
    image! : string;
    price! : number;
    duration! : number;
    level! : string;
    category! : Category;
}