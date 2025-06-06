import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import Title from "../components/Title";
import styled from "styled-components";
import axios from 'axios';

export default function FootwearPage() {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get('http://localhost:3000/shoes')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "plus") return a.id - b.id;
        if (sortOrder === "low") return a.price - b.price;
        if (sortOrder === "high") return b.price - a.price;
        return 0;
    });

    return (
        <Wrapper>
            <Title />
            <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <hr />
            <Count>전체 상품 {products.length}개</Count>
            <ProductList>
                {sortedProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        state={product.state}
                        soldout={product.soldout}
                        
                    />
                ))}
            </ProductList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 24px;
`;

const Count = styled.p`
    color: gray;
    margin: 30px 30px 0px 30px;
`;

const ProductList = styled.div`
    width: 1500px;
    display: flex;
    flex-wrap: wrap;
`;
