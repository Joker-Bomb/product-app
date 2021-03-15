import React, { FC } from 'react';

import SearchBarView from './SearchBarView';
import ProductTableView from './ProductTableView';

const FilterableProductTableView: FC = () => {
  return (
    <div>
      <div>Two view</div>
      <SearchBarView />
      <ProductTableView />
    </div>
  );
};

export default FilterableProductTableView;
