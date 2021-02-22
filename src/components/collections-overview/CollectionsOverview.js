import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreview.js";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors.js";
import CollectionsOverviewContainer from "./CollectionsOverviewContainer";

const CollectionsOverview = ({ collections }) => (
 <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
 </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
