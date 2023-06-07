import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './App.css';
import Users from './components/Users';
import { Route } from 'react-router-dom';

const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache:new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
     
          <Route>
          <Users/>
          </Route>
    
    </ApolloProvider>
  );
}

export default App;
