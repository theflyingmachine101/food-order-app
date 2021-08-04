import React, { useState } from "react";
import mealImg from "../../../assets/images/meals.jpg"
import HeaderCartButton from '../../Cart/HeaderCartButton/HeaderCartButton'
import classes from './Header.module.css'
import Cart from '../../Cart/Cart'

const Header=()=>{
    const [modalVisible,setModalVisible]=useState(false);

    const ModalVisibleHandler=()=>{
        const newState=!modalVisible;
        setModalVisible(newState);
    }

    return <React.Fragment>
        <header className={classes.header}>
            <h1>BestMeal</h1>
           <HeaderCartButton CartModalHandler={ModalVisibleHandler}/>
           {modalVisible &&< Cart CartModalHandler={ModalVisibleHandler}/>}
        </header>
        <div>
        <img src={mealImg} alt="Delicious Meal" className={classes['main-image']} />   
        </div>
            
    </React.Fragment>
}

export default Header;