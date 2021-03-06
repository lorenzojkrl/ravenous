import React from "react";
import "./Business.css";
// The purpose of the <Business /> component is
// to represent how a business (a restaurant) in Ravenous will be formatted and styled.

// Create a React component called Business. The component should extend React.Component.
// Components can be functions or class
class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      // Change all the class attributes (JS) to className to write HTML/JS as JSX
      // Instead of hardcoding text, change that to values from the business object keys
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

// Make this component available to the rest of the Ravenous app.
export default Business;
