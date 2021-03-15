import React, { FC } from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { Product } from '@/models/product';

interface ProductTableProps {
  filterText?: string;
  inStockOnly?: boolean;
  products?: Product[];
}

const ProductTable: FC<ProductTableProps> = (props: ProductTableProps) => {
  const { filterText, inStockOnly, products } = props;

  const rows: any = [];
  let lastCategory: string = '';

  products?.forEach((product) => {
    if (filterText !== undefined && product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
