import React, { useState } from "react";
import styled from "styled-components/macro";

//COMPONENTS
import { Modal } from "app/shared/modal/Modal";
import { Card } from "./card/Card";
import { Product } from "./product/Product";
import { Spinner } from "app/shared/spinner/Spinner";
import { NoProducts } from "./noProducts/NoProducts";

//TYPES
import { ProductListProps } from "./ProductList.types";

export const ProductList = ({ products, loading }: ProductListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(0);

  const selectedProductHandler = (id: number) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  return (
    <StyledProductList>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <Product
          close={() => setShowModal(false)}
          img={products.find((x) => x.id === selectedProductId)?.image}
          name={products.find((x) => x.id === selectedProductId)?.name}
          description={
            products.find((x) => x.id === selectedProductId)?.description
          }
        />
      </Modal>

      {loading && <Spinner />}
      {products.length === 0 && !loading ? <NoProducts /> : null}

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

const StyledProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;
