import React, { useState } from 'react';

const ProductCtx = React.createContext();

const ProductProvider = ({ children }) => {
  const [ productSave, setProductSave ] = useState({});

  return (
    <ProductCtx.Provider
      value={{
        productSave,
        setProductSave,
      }}
    >
      {children}
    </ProductCtx.Provider>
  );
}

export { ProductCtx, ProductProvider };
