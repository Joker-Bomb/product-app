import React, { FC } from 'react';

interface SearchBarProps {
  inStockOnly?: boolean;
  filterText?: string;
  onFilterTextChange?: (filterText: string) => void;
  onInStockChange?: (inStock: boolean) => void;
}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  const { filterText, inStockOnly } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => {
          props.onFilterTextChange?.(e.target.value);
        }}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => {
            props.onInStockChange?.(e.target.checked);
          }}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
