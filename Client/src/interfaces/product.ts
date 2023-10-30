export interface IProduct {
  _id: string | null;
  title: string;
  description: string;
  price: number;
  category: string;
  author: string;
  brand: string;
  quantity: number;
  sold: number;
  tag: string[]; // Một mảng các chuỗi
  totalrating: string;
  images: ProductImage[];
  ratings: any[]; // Dữ liệu đánh giá có thể được định nghĩa trong một interface riêng
}

interface ProductImage {
  public_id: string;
  url: string;
  _id: string;
}

