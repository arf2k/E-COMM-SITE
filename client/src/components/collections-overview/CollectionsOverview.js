import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreview.js";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors.js";

const CollectionsOverview = ({ collections }) =>
  collections.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  ));

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
