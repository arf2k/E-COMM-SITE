import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.js'
import { selectCollections } from "../../redux/shop/shopSelectors.js"

const Shop = ({collections}) => {

     return (
     <div className="shop-page">
          {
               collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
     ))
          }

     </div>
     )
     

}

const mapStateToProps = createStructuredSelector({
     collections: selectCollections
})



export default connect(mapStateToProps)(Shop)