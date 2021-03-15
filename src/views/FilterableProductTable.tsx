import React, { FC, useEffect } from 'react';

import { connect, ConnectProps } from 'umi';

import ProductTable from '@/components/ProductTable';
import SearchBar from '@/components/SearchBar';
import { Product, ProductModelState } from '@/models/product';

interface FilterableProductTableProps extends Partial<ConnectProps> {
  filterText?: string;
  inStockOnly?: boolean;
  products?: Product[];
}

const FilterableProductTable: FC<FilterableProductTableProps> = (
  props: FilterableProductTableProps,
) => {
  const { filterText, inStockOnly, products, dispatch } = props;

  const handleFilterTextChange = (filterText: string) => {
    dispatch?.({ type: 'product/saveFilterText', payload: filterText });
  };
  const handleInStockChange = (inStock: boolean) => {
    dispatch?.({ type: 'product/saveInStockOnly', payload: inStock });
  };

  useEffect(() => {
    dispatch?.({ type: 'product/query' });
  }, []);

  return (
    <div>
      <div>One view</div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default connect(({ product }: { product: ProductModelState }) => ({
  filterText: product.filterText,
  inStockOnly: product.inStockOnly,
  products: product.products,
}))(FilterableProductTable);
