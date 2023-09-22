import {ApolloClient, InMemoryCache} from "@apollo/client";
const client = new ApolloClient({

    uri: "https://api-ca-central-1.hygraph.com/v2/clkiesvdi075f01tca5rzh7w1/master",
    cache: new InMemoryCache(),
});

export default client