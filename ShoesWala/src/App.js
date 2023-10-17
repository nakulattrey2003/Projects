// import react from 'react';
import {useState} from "react";

import Navigation from "./Navigation/Nav.js";
import Products from "./Products/Products.js";
import Recommend from "./Recommend/Recommend.js";
import Sidebar from "./Sidebar/Sidebar.js";

// component
import Card from "./components/Card.js";

//database
import products from './db/data.js';

function App()
{
  // Input Filter   (Search Filter)
  const [query, setQuery] = useState("");

  const handleInputChange = event =>
  {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(products => 
      products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  const[selectedCategory, setSelectedCategory] = useState(null);
  // Radio Filter
  const handleRadioChange = event =>
  {
    setSelectedCategory(event.target.value)
  };

  // Button Filter
  const handleButtonChange = event =>
  {
    setSelectedCategory(event.target.value)
  };

  function filteredData(products, selected, query)
  {
    let filteredProducts = products

    //Filtering input items
    if(query)
    {
      filteredProducts = filteredItems 
    }
    
    // Selected Filter
    if(selected)
    {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected
      );
    }

    return filteredProducts.map(({img, title, star, outlineStar, reviews, newPrice, prevPrice}) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      outlineStar={outlineStar}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query)

  
  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommend handleButtonChange={handleButtonChange} />
      <Products result={result} />
    </>
  );
}

export default App;
