import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [ selectShop ],
    shop => shop.collections
);

export const selectcollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (CollectionUrlParam) => (
    createSelector(
        [selectCollections],
        collections => collections ? collections[CollectionUrlParam] : null
    )
)