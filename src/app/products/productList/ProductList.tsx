import { Modal } from "app/shared/modal/Modal";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { Card } from "./card/Card";
import { Product } from "./product/Product";

export const ProductList = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledProductList>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <Product
          close={() => setShowModal(false)}
          img="https://i.imgur.com/zncbCrB.png"
          title="Nike Running Shoes"
          description="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
        />
      </Modal>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;
