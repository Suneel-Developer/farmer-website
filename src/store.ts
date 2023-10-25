// store.ts
import { createStore, Reducer } from 'redux';

// Define the interface for your network object
interface Network {
  id: number;
  title: string;
  network: string;
}

// Define the state type
interface AppState {
  networks: Network[];
}

// Define initial state
const initialState: AppState = {
  networks: [
    {
      id: 1,
      title: "Sepolia",
      network: "Destination",
    },
    {
      id: 2,
      title: "Network",
      network: "Destination Network",
    },
    {
      id: 3,
      title: "Ethereum",
      network: "Destination Network",
    },
  ],
  
};

// Define a reducer to manage state
const networkReducer: Reducer<AppState> = (state = initialState, action) => {
  return state;
};

// Create the Redux store
const store = createStore(networkReducer);

export default store;
