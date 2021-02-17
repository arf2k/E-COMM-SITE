import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.js";
import { Route } from 'react-router-dom'
import Collection from "../collection/Collection.js"



const Shop = ({ match }) => {
  return (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview}/>
       <Route path={`${match.path}/:collection.Id`} component={Collection} />
    </div>
  )
  
}



export default Shop;
