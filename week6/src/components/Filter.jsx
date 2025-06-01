import styled from "styled-components";
import { useState } from "react";

export default function Filter({ sortOrder, setSortOrder }) {
    const [isOpen, setIsOpen] = useState({
    type: false,
    price: false,
    size: false,
    color: false,
    gender: false,
    width: false,
    sports: false,
    sort: false,
    });

    const toggleFilter = (key) => {
        setIsOpen((prev) => ({
        ...prev,
        [key]: !prev[key],
        }));
    };

    return(
        <FilterWrapper>
            <Left>
                <Text>필터</Text>
                <Toggle>
                    <Button onClick={() => toggleFilter("type")}>
                    상품 유형 {isOpen.type ? "–" : "+"}
                    </Button>
                    {isOpen.type && (
                        <Div>
                            <p><Checkbox type="checkbox"/>신발</p>
                        </Div>
                    )}
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("price")}>
                    가격 {isOpen.price ? "–" : "+"}
                    </Button>
                    {isOpen.price && (
                        <Div>
                            <p><Checkbox type="checkbox"/>5만원 미만</p>
                            <p><Checkbox type="checkbox"/>5만원 ~ 10만원 미만</p>
                            <p><Checkbox type="checkbox"/>10만원 ~ 15만원 미만</p>
                            <p><Checkbox type="checkbox"/>15만원 ~ 20만원 이상</p>
                        </Div>
                    )}
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("size")}>
                    사이즈 {isOpen.size ? "–" : "+"}
                    </Button>
                    {isOpen.size && (
                        <Div>
                            <Size>225</Size>
                            <Size>230</Size>
                            <Size>235</Size>
                            <Size>240</Size>
                            <Size>245</Size>
                            <Size>250</Size>
                            <Size>255</Size>
                            <Size>260</Size>
                            <Size>265</Size>
                            <Size>270</Size>
                        </Div>
                    )}
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("color")}>
                    색상 {isOpen.color ? "–" : "+"}
                    </Button>
                    {isOpen.color && (
                        <Div>
                            <Circle color="#97D0E8"/>
                            <Circle color="#37B400"/>
                            <Circle color="#6B4D32"/>
                            <Circle color="#EBD8C1"/>
                            <Circle color="#FFFFFF"/>
                            <Circle color="#B89F88"/>
                            <Circle color="#191919"/>
                            <Circle color="#B0A9A9"/>
                            <Circle color="#F1F223"/>
                            <Circle color="#F9B0C4"/>
                        </Div>
                    )}
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("gender")}>
                    성별 {isOpen.gender ? "–" : "+"}
                    </Button>
                    {isOpen.gender && (
                        <Div>
                            <p><Checkbox type="checkbox"/>FEMALE</p>
                            <p><Checkbox type="checkbox"/>UNISEX</p>
                            <p><Checkbox type="checkbox"/>MALE</p>
                            <p><Checkbox type="checkbox"/>KIDS</p>
                        </Div>
                    )}
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("width")}>
                    발 너비 {isOpen.width ? "–" : "+"}
                    </Button>
                    {isOpen.width && (
                        <Div>
                            <p><Checkbox type="checkbox"/>B</p>
                            <p><Checkbox type="checkbox"/>D</p>
                            <p><Checkbox type="checkbox"/>WIDE</p>
                        </Div>
                    )} 
                </Toggle>
                <Toggle>
                    <Button onClick={() => toggleFilter("sports")}>
                    스포츠 {isOpen.sports ? "–" : "+"}
                    </Button>
                    {isOpen.sports && (
                        <Div>
                            <p><Checkbox type="checkbox"/>VOLLEYBALL</p>
                            <p><Checkbox type="checkbox"/>SPORTSTYLE</p>
                            <p><Checkbox type="checkbox"/>WORK</p>
                            <p><Checkbox type="checkbox"/>RUNNING</p>
                            <p><Checkbox type="checkbox"/>TRAIL</p>
                            <p><Checkbox type="checkbox"/>BASKETBALL</p>
                            <p><Checkbox type="checkbox"/>TENNIS</p>
                            <p><Checkbox type="checkbox"/>INDOOR</p>
                            <p><Checkbox type="checkbox"/>KIDS</p>
                            <p><Checkbox type="checkbox"/>TRACK&FIELD</p>
                        </Div>
                    )}
                </Toggle>
            </Left>
            <Right>
                <Sort onClick={() => toggleFilter("sort")}>
                    {sortOrder === "low" ? "낮은 가격순+" : sortOrder === "high" ? "높은 가격순+" : sortOrder === "plus" ? "최근 등록순+" : "최근 등록순 +"}
                </Sort>
                {isOpen.sort && (
                    <Div>
                        <p onClick={() => setSortOrder("plus")}>최근 등록순</p>
                        <p onClick={() => setSortOrder("low")}>낮은 가격순</p>
                        <p onClick={() => setSortOrder("high")}>높은 가격순</p>
                    </Div>
                )}
            </Right>    
        </FilterWrapper>
    );
}


const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`

const Text = styled.h2`
    margin: 10px; 
    color: gray;
`

const Button = styled.button`
    font-size: 15px;
    border: 1px solid gray;
    border-radius: 30px;
    padding: 3px 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
`;

const Div = styled.div`
    position: absolute;
    top: 150%;
    background: white;
    color: #042369;
    border: 1px solid lightgray;
    border-radius: 5px;
    z-index: 10;
    white-space: nowrap;
    padding: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    cursor: pointer;
`

const Toggle = styled.div`
    position: relative;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Sort = styled.button`
    background-color: white;
    border: 0px;
    color: gray;
    font-weight: bold;
    cursor: pointer;
`;

const Right = styled.div`
    position: relative;  
`;

const Size = styled.div`
    border: 1px solid #042369;
    border-radius: 30px;
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    margin: 5px;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => props.color};
`;

const Checkbox = styled.input`
    margin: 5px;
`;