export class Course {
    id: number | undefined;
    name!: string;
    imageUrl: string | undefined;
    price: number | undefined;
    code: string | undefined;
    duration: number | undefined;
    rating: number = 0;
    relaseDate: string | undefined;
    description: string | undefined;
}