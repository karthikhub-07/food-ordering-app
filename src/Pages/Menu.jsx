import React from 'react'
import FoodCard from '../Components/FoodCard'
import biryani from '../assets/images.jpg'
import mutton from '../assets/images (2).jpg'
import chicken65 from '../assets/images (1).jpg'
import fish from '../assets/images (3).jpg'

const Menu = () => {
  
  const foods =[
    {name :"Biryani",price:250,image:biryani},
    {name :"mutton curry",price:550,image:mutton},
    {name :"chicken 65",price:450,image:chicken65},
    {name :"Fish curry",price:150,image:fish}
  ]
  return (
    <div>
        <h3>Menu page</h3>
        {/* <FoodCard name="Biryani" price={250} image={biryani}/>
        <FoodCard name="mutton curry" price={350} image={mutton}/>
        <FoodCard name="chicken 65" price={150} image={chicken65}/>
        <FoodCard name="Fish curry" price={350} image={fish}/> */}
        {foods.map((food)=>{
          return <FoodCard key ={food.name} name={food.name} price ={food.price} image = {food.image}/>
        })}
    </div>
  )
}

export default Menu