import { Effect, Reducer } from 'umi';

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface ProductModelState {
  filterText?: string;
  inStockOnly?: boolean;
  products?: Product[];
}

export interface ProductModelType {
  namespace: 'product';
  state: ProductModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    saveProducts: Reducer<ProductModelState>;
    saveFilterText: Reducer<ProductModelState>;
    saveInStockOnly: Reducer<ProductModelState>;
  };
}

const ProductModel: ProductModelType = {
  namespace: 'product',
  state: {
    filterText: '',
    inStockOnly: false,
    products: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const products: Product[] = [
        {
          category: 'Sporting Goods',
          price: '$49.99',
          stocked: true,
          name: 'Football',
        },
        {
          category: 'Sporting Goods',
          price: '$9.99',
          stocked: true,
          name: 'Baseball',
        },
        {
          category: 'Sporting Goods',
          price: '$29.99',
          stocked: false,
          name: 'Basketball',
        },
        {
          category: 'Electronics',
          price: '$99.99',
          stocked: true,
          name: 'iPod Touch',
        },
        {
          category: 'Electronics',
          price: '$399.99',
          stocked: false,
          name: 'iPhone 5',
        },
        {
          category: 'Electronics',
          price: '$199.99',
          stocked: true,
          name: 'Nexus 7',
        },
      ];

      yield put({ type: 'saveProducts', payload: products });
    },
  },
  reducers: {
    saveProducts(state, { payload }) {
      return {
        ...state,
        products: payload,
      };
    },
    saveFilterText(state, { payload }) {
      return {
        ...state,
        filterText: payload,
      };
    },
    saveInStockOnly(state, { payload }) {
      return {
        ...state,
        inStockOnly: payload,
      };
    },
  },
};

export default ProductModel;
