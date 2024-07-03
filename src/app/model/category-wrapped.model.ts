import { Category } from "./category.model";

export class CategoryWrapper{
    _embedded! : { categories: Category[]}
}