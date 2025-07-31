declare type Product = {
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  discount: number;
  sold: number;
  rateAvg: number;
  rateCount: number;
} & DatabaseProperties;
