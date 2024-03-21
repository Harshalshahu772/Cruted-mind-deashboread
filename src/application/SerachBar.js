import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

import React, { useState } from "react";
const productList = [
    "1 :- What’s your work style?",
    "2 :- What’s your management style?",
    "3 :- How would your boss and coworkers describe you?",
    "4 :- How do you deal with pressure or stressful situations?",
    "4 :- What do you like to do outside of work?",
    "5 :- What do you like to do outside of work?    ",
    "6 :- Are you planning on having children?",
    "7 :- How do you stay organized?",
    "8 :- How do you prioritize your work?",
    "9 :- What are you passionate about?",
    "10 :- What are your pet peeves?",
    "11 :- How do you like to be managed?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "13 :- Do you consider yourself successful?",
    "14 :- Do you consider yourself successful?",
    "15 :- Do you consider yourself successful?",
    "16 :- Do you consider yourself successful?",
    "17 :- Do you consider yourself successful?",
    "18 :- Do you consider yourself successful?",
    "19 :- Do you consider yourself successful?",
    "20 :- Do you consider yourself successful?",
    "21 :- Do you consider yourself successful?",
    "25 :- Do you consider yourself successful?",
    "25 :- Do you consider yourself successful?",
    "66 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "77 :- Do you consider yourself successful?",
    "65 :- Do you consider yourself successful?",
    "78 :- Do you consider yourself successful?",
    "78 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "12 :- Do you consider yourself successful?",
    "13 :- Where do you see yourself in five years?",
];


const SerachBar = () => {
    const [searchVal, setSearchVal] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearchVal(searchQuery);
        const filteredProducts = productList.filter((item) =>
            item.toLowerCase().includes(searchQuery)
        );
        setFilteredProducts(filteredProducts);
    };


    return (
        <Wrapper>
            <div className="container">
                <div className="serachBar">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <form
                                className="d-flex "
                                style={{
                                    justifyContent: "end",
                                    alignItems: "end",
                                    margin: "auto",
                                    width: "55%",
                                }}
                            >
                                <input
                                    className="form-control search-box me-2"
                                    type="search"
                                    list="suggestions"
                                    onChange={handleSearch}
                                    placeholder="Search"
                                    aria-label="Search"
                                />

                                <datalist id="suggestions">
                                    {productList.map((item, index) => (
                                        <option key={index} value={item} />
                                    ))}
                                </datalist>
                            </form>
                        </div>
                    </nav>
                </div>


                <div className="container-A">
                    <div className="QuestionContainer">


                        {
                            searchVal === "" ? null : (
                                <div className="container me-2">
                                    {filteredProducts.map((product, index) => (
                                        <div key={index}>
                                            {product}
                                            <input
                                                className="form-control me-2"
                                                type="text"
                                                placeholder="Answer"
                                                aria-label="Search"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )



                        }

                        
<div class="card">
  <img src="Image/img_avatar2.png" alt="John" style={{width:"100%"}}/>
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div style={{margin: "24px 0;"}}>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


export default SerachBar;

const Wrapper = styled.section`
  .sreachbar {
    width: 36%;
    height: 41px;
    border-radius: 18px;
    border-opacity: 0.7;
    margin: auto;
    box-shadow: 0px 7px 10px 3px rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(255 255 255 / 50%);
  }
  .container-A {
    border: 5px solid #ec1818;
    width: 51%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 21px;
  }

  .icone {
    width: 27px;
    height: 38px;
  }

  .sercah-box {
    width: 115%;
    border: 1px solid black;
    border-radius: 8px;
    margin-left: 29px;
  }

  .form-control {
    width: 274px;
    margin-left: 29px;
  }






  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }
`;
