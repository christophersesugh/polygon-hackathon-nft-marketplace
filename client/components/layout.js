import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MoralisProvider } from "react-moralis";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NotificationProvider } from "web3uikit";
import Navbar from "./navbar";
import Footer from "./footer";
import ErrorFallback from "./error-fallback";

const NEXT_PUBLIC_SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: NEXT_PUBLIC_SUBGRAPH_URL,
});

export default function Layout({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.history.go()}
    >
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <Navbar />
          <NotificationProvider>
            <main>{children}</main>
          </NotificationProvider>
          <Footer />
        </ApolloProvider>
      </MoralisProvider>
    </ErrorBoundary>
  );
}
