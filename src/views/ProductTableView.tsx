import React, { FC, useEffect } from 'react';

import { connect, ConnectProps } from 'umi';

import ProductTable from '@/components/ProductTable';
import { Product, ProductModelState } from '@/models/product';

interface ProductTableViewProps extends Partial<ConnectProps> {
  filterText?: string;
  inStockOnly?: boolean;
  products?: Product[];
}

const ProductTableView: FC<ProductTableViewProps> = (
  props: ProductTableViewProps,
) => {
  const { filterText, inStockOnly, products, dispatch } = props;

  useEffect(() => {
    dispatch?.({ type: 'product/query' });
  }, []);

  return (
    <ProductTable
      products={products}
      filterText={filterText}
      inStockOnly={inStockOnly}
    />
  );
};

export default connect(({ product }: { product: ProductModelState }) => ({
  filterText: product.filterText,
  inStockOnly: product.inStockOnly,
  products: product.products,
}))(ProductTableView);
