export interface Link {
    label: string;
    url: string;
    Id?:string;
    image?:string
    external?: boolean;
    target?: '_self'|'_blank';
}
