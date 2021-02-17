import React from "react";
import { connect } from 'react-redux';
import { selectCollection } from "../../redux/shop/shopSelectors.js";
import CollectionItem from "../../components/collection-item/CollectionItem.js";
import "./collection-page.styles.scss";

const Collection = ({ collection }) =>{
     return (
          <div className="collection-page">
               <h2>CATEGORY PAGE</h2>
          </div>
     )
}

const mapStateToProps = (state, ownProps) => ({
     collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)

