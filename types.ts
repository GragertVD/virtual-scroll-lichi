export interface Product {
  id: number,
  name: string,
  photos: any,
  format_price: string[],
  type: string,

  article: string,
  available: boolean,
  block: boolean,
  brand_name: string,
  category_id: string,
  category_ids: string[],
  category_name: string,
  colors: any,
  coming_soon: boolean,
  count: number,
  currency: any,
  date_create: string,

}

export interface DataProducts {
  aFilters: any,
  aProduct: Array<Product>,
  aSort: { [type: string]: { active: boolean } },
  iCount: number,
  iCurrentPage: number,
  iLimit: 12,
  iPages: number,
  is_filter: boolean,
  sGrid: string,
};


