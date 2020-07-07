import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

// The point of the <BusinessList /> component is to simulate what a returned list of businesses would look like in Ravenous 
// (after querying the Yelp API, for example). 
// To help this simulation, <BusinessList /> will make use of the <Business /> component repeatedly. 
// To use the <Business /> component, you’ll have to import it. Import the <Business /> component on line 3.

class BusinessList extends React.Component{
    render(){
        return(
            // Remmeber to change class attributes to className to render as JSX
            <div className="BusinessList">
                {/* Return Business component */}
                {
                    this.props.businesses.map((business) => {
                        return <Business business={business} />;  
                    })
                }
            </div>
        );
    }
};

// This list component will need to be rendered again by another component, so you’ll need to export it. 
export default BusinessList;