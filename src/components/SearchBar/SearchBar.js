import React from 'react';
import './SearchBar.css'

// The search bar will communicate with the Yelp API
// reate an object with keys and values that conform to what the API expects to receive 
// (as shown in the documentation https://www.yelp.com/developers/documentation/v3/business_search)
// Create an object called sortByOptions
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

// Create the <SearchBar /> Component
class SearchBar extends React.Component{
    // The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options 
    // (Best Match, Highest Rated, Most Reviewed).
    renderSortByOptions(){
        // To iterate through the object, you’ll need to start by accessing the keys of the sortByOptionsobject. 
        // Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.
        // This will return an array of sortByOptions keys
        // Pass a callback function to the map() method as an argument. 
        // The callback function should have one parameter called sortByOption. The callback function should also use arrow syntax.
        // This will return the values in the array.
        return Object.keys(sortByOptions).map(sortByOption => {
            // Let’s store the object values in a variable. Inside of the callback function, 
            // access the sortByOptions values using the sortByOption parameter of the callback function. 
            // Store values in variable called sortByOptionValue.
            // Use square brackets to access the value in sortByOptions
            let sortByOptionValue = sortByOptions[sortByOption];
            // Use key to keep track of the element. key attribute is React-specific and a unique value like sortByOptionValue
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
};

// This list component will need to be rendered again by another component, so you’ll need to export it.
export default SearchBar;