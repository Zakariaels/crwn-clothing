import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectcollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = ( { collections } ) => (
    <CollectionsOverviewContainer>
    <div className = 'collections-overview'>
        { 
            collections.map( ( { id, ...otherCollectionProps } ) => (
              <CollectionPreview key = { id } { ...otherCollectionProps } /> 
            )) 
        }
    </div>
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectcollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);