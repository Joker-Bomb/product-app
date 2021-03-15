import React, { FC } from 'react';

import { connect, ConnectProps } from 'umi';

import SearchBar from '@/components/SearchBar';
import { ProductModelState } from '@/models/product';

interface SearchBarViewProps extends Partial<ConnectProps> {
  filterText?: string;
  inStockOnly?: boolean;
}

const SearchBarView: FC<SearchBarViewProps> = (props: SearchBarViewProps) => {
  const { filterText, inStockOnly, dispatch } = props;

  const handleFilterTextChange = (filterText: string) => {
    dispatch?.({ type: 'product/saveFilterText', payload: filterText });
  };
  const handleInStockChange = (inStock: boolean) => {
    dispatch?.({ type: 'product/saveInStockOnly', payload: inStock });
  };

  return (
    <SearchBar
      filterText={filterText}
      inStockOnly={inStockOnly}
      onFilterTextChange={handleFilterTextChange}
      onInStockChange={handleInStockChange}
    />
  );
};

export default connect(({ product }: { product: ProductModelState }) => ({
  filterText: product.filterText,
  inStockOnly: product.inStockOnly,
}))(SearchBarView);
