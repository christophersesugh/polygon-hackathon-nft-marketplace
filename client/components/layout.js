import React from "react";
import { MoralisProvider } from "react-moralis";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NotificationProvider } from "web3uikit";
import Navbar from "./navbar";
import Footer from "./footer";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "",
});

export default function Layout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <ApolloProvider client={client}>
        <NotificationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NotificationProvider>
      </ApolloProvider>
    </MoralisProvider>
  );
}
