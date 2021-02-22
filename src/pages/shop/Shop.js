import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.js";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection.js";
import { connect } from "react-redux";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/Firebase.utils";
import { fetchCollectionsStart, fetchCollectionsStartAsync } from "../../redux/shop/shopActions"
import WithSpinner from "../../components/with-spinner/WithSpinner.js"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
    unsubscribeFromSnapshot = null;

state = {
    loading: true
}
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} /> )} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionWithSpinner isLoading={loading} {...props}/> )} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
