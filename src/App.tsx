import React from "react";
import Routes from "./route-config/route-config";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { BrowserRouter } from "react-router-dom";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(`An error has occurred  ${message}`));
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_BACKEND_URL }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <div className="container mx-auto">
          <Routes />
        </div>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
