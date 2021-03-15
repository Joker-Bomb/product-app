import React, { FC } from 'react';

import { Product } from '@/models/product';

interface ProductRowProps {
  product?: Product;
}

const ProductRow: FC<ProductRowProps> = (props: ProductRowProps) => {
  const { product } = props;

  const name = product?.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product?.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product?.price}</td>
    </tr>
  );
};

export default ProductRow;
