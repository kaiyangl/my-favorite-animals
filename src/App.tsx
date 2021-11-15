import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyFavoriteAnimals from './MyFavoriteAnimals';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <MyFavoriteAnimals />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
