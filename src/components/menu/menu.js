import React, {useState} from 'react'
import HotDrinks from './item-categories/hot-drinks'
import ColdDrinks from './item-categories/cold-drinks'
import Breakfast from './item-categories/breakfast'
import Lunch from './item-categories/lunch'

import '../../styles/components/menu.scss'


const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('hotDrinks');
  let SelectedCategory;
  if (menuCategory === 'hotDrinks' ) {
    SelectedCategory = HotDrinks;
  } else if (menuCategory === 'coldDrinks') {
    SelectedCategory = ColdDrinks
  } else if (menuCategory === 'breakfast') {
    SelectedCategory = Breakfast
  } else if (menuCategory === 'lunch') {
    SelectedCategory = Lunch
  }
  
  return (
    <div className="menu">
      <h2>MENU</h2>
      <ul className="menuHeaders" id="header">
        <li className="menuHeader" onClick={() => setMenuCategory('hotDrinks')}>Hot Drinks</li>
        <li className="menuHeader" onClick={() => setMenuCategory('coldDrinks')}>Cold Drinks</li>
        <li className="menuHeader" onClick={() => setMenuCategory('breakfast')}>Breakfast</li>
        <li className="menuHeader" onClick={() => setMenuCategory('lunch')} >Lunch</li>
      </ul>
      <SelectedCategory className="menuStyles"/>
    </div>
  )
}

export default Menu;