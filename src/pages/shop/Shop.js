import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.js";
import { Route } from 'react-router-dom'
import Category from "../category/Category.js"



const Shop = ({ match }) => {
  return (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview}/>
       <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  )
  
}



export default Shop;
