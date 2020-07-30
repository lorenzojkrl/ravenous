const { default: Business } = require("../components/Business/Business");

const apiKey =
  "dw8jwzLhpsIT3wIGFpoUBTtTJxpPfnx7xzmyB3wI6JfP4xX_O3y9ye_6z8uXVPgFSY8mMBQMO1voOFYAJ-XKQF65zvTyA5w-pUHnTv1AXGxFLDXz4CydWH-kdZQiX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.reviewCount,
            };
          });
        }
      });
  },
};

export default Yelp;
