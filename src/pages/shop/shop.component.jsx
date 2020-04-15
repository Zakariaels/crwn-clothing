import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshop => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
            updateCollections(collectionsMap);
            this.setState( { loading: false } )
        });
    }

    // componentWillUnmount() {
    //     this.unsubscribFromSnapshot();
    // }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className = 'shop-page'>
                <Route exact path = { `${match.path}` } render = { (props) => <CollectionsOverviewWithSpinner isLoading = { loading }  { ...props }  /> } />
                <Route path = { `${match.path}/:collectionId` } render = { (props) => <CollectionPageWithSpinner isLoading = { loading }  { ...props } /> } />
            </div>
        );
    }
    
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);