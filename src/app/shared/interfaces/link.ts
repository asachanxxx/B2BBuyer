export interface Link {
    label: string;
    url: string;
    Id?:number;
    image?:string
    external?: boolean;
    target?: '_self'|'_blank';
}
