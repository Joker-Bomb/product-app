import React, { FC } from 'react';

interface ProductCategoryRowProps {
  category?: string;
}

const ProductCategoryRow: FC<ProductCategoryRowProps> = (
  props: ProductCategoryRowProps,
) => {
  const { category } = props;

  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
