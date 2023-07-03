export class Course {
    id!: number;
    name!: string;
    imageUrl: string | undefined;
    price: number | undefined;
    code!: string;
    duration: number | undefined;
    rating: number = 0;
    relaseDate: string | undefined;
    description: string | undefined;
}