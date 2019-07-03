export interface Link {
    label: string;
    url: string;
    Id?:string
    external?: boolean;
    target?: '_self'|'_blank';
}
