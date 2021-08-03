import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionForOverview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({collections}) => {
    
    return(
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionForOverview
})

export default connect(mapStateToProps)(CollectionsOverview);
