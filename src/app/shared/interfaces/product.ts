export interface ProductFeature {
    SpecItemName: string;
    Value: string;
    name:string;
    value:string;
}

export interface ProductFeaturesSection{
    name:string;
    features:ProductFeature[];
}

export interface ProductSpecificationsGroups {
    GroupID:number;
    GroupName: string;
    Details: ProductFeature[];
}

export interface ProductReview {
    avatar: string;
    author: string;
    rating: number;
    date: string;
    text: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    compareAtPrice: number|null;
    images: string[];
    badges: ('sale'|'new'|'hot')[];
    rating: number;
    reviews: number;
    availability: string;
    features: ProductFeature[];
    options: Array<any>;
}

/*

    public class ProductSpecificationsGroups
    {
        public int GroupID { get; set; }
        public string GroupName { get; set; }
        public List<ProductSpecifications> Details { get; set; }
    }

    public class ProductSpecifications
    {
        public int ProductId { get; set; }
        public int GroupID { get; set; }
        public int SpecItemId { get; set; }
        public string SpecItemName { get; set; }
        public string SpecItemDisplayName { get; set; }
        public string Value { get; set; }
    }

*/