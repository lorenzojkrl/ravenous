import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../../src/util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    // Commented because hard coded as a sample preview
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}!`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* Add BusinessList and SearchBar components */}
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
