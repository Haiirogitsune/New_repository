export interface Tour {
    id: string;
    name: string;
    price: number;
    description: string;
}

export type Tours = {
    tours: Array<Tour>;
}