import React, { useState, useRef } from "react";
import styled from "styled-components/macro";

//COMPONENTS
import { Modal, Spinner } from "app/shared";
import { Card } from "./card/Card";
import { Product } from "./product/Product";
import { ProductsNotFound } from "./productsNotFound/ProductsNotFound";

//TYPES
import { ProductListProps } from "./ProductList.types";

//HOOKS
import { useClickOutside } from "hooks";

//STYLES
import { flexCenterHorizontally } from "styles/mixins";

export const ProductList = ({ products, loading }: ProductListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const ref = useRef(null);

  const selectedProductHandler = (id: number) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  const handleClickOutside = () => {
    setShowModal(false);
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <StyledProductList>
      <Modal show={showModal}>
        <Product
          reference={ref}
          close={() => setShowModal(false)}
          img={products.find((x) => x.id === selectedProductId)?.image}
          name={products.find((x) => x.id === selectedProductId)?.name}
          description={
            products.find((x) => x.id === selectedProductId)?.description
          }
        />
      </Modal>

      {loading && <Spinner />}
      {products.length === 0 && !loading ? <ProductsNotFound /> : null}

      {!loading &&
        products.map((product) => (
          <Card
            key={product.id}
            product={product}
            showDetailsHandler={(id: number) => selectedProductHandler(id)}
          />
        ))}
    </StyledProductList>
  );
};

const StyledProductList = styled(flexCenterHorizontally)`
  width: 100%;
  flex-wrap: wrap;
  gap: 24px;
`;
