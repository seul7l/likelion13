import styled from "styled-components";

export default function ProductCard({ name, price, image, state, soldout }) {


  return (
    <Card>
        <ProductImage $background={image}>
          {soldout && <SO>{soldout}</SO>}
        </ProductImage>
      <ProductName>{name}</ProductName>
      <ProductPrice>{Number(price).toLocaleString()}원</ProductPrice>
      {state && <ProductState>{state}</ProductState>}
    </Card>
  );
}


const Card = styled.div`
  width: 330px;
  margin: 20px;
  padding: 12px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;


const ProductImage = styled.div`
  background-color:#F5F5F5;
  width: 310px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${props => props.$background});
  background-size: cover;
  background-position: center;
`;

const SO = styled.p`
  background-color: #E3E5F2;
  color: #3D406B;
  font-weight: 900;  
  border: 2px solid #E3E5F2;
  font-size: 12px;
  box-sizing: border-box;
  padding: 5px 30px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0 5px;
  color: #3D406B;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #3D406B;
`;

const ProductState = styled.button`
  border-radius: 30px;
  background-color: #E3E5F2;
  color: #3D406B;
  border: 1px solid #E3E5F2;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 5px 15px;
  margin: 20px 0px;
`

