import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddFood from './components/AddFood'
import Foodbox from './components/FoodBox'

class App extends Component {

  state = {
    foodList: foods,
    filteredList: foods,
    showForm: false
  }



  handleAdd = (event) => {
    event.preventDefault()
    

    let food = event.target
    let newFood = {
        name: food.name.value,
        calories: food.calories.value,
        quantity: 0,
        image: food.image.value, 
    }

    this.setState({
      foodList: [...this.state.foodList, newFood],
      filteredList: [...this.state.filteredList, newFood],
      showForm: false
    })

    }



    handleFormShow = () => {
      this.setState({
        showForm: true
      })
    }


    handleSearch = (event) => {
    event.preventDefault()
    let search = event.target.value
    const {foodList} = this.state

    let searchedList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase())
    })

    this.setState({
      filteredList: searchedList
    })
    }



  render() {

  const {filteredList, showForm} = this.state

  return (
  
    <div className="app">
          <h1>What da hell?!</h1>

          {
            showForm ? (
              <AddFood onAdd={this.handleAdd} />
            ) : (
              <button className="button" variant="outline-primary" onClick={this.handleFormShow}>Add new food</button>
            )
          }

          <input onChange={this.handleSearch} type="text" placeholder="Search"></input>

          {
            filteredList.map((food, i) => {
              return <Foodbox key={i} food={food} addQuantity={this.handleQuantity}/>
              })
          }

    </div>
 
    )
  }
}

export default App;