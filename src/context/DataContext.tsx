// Import necessary dependencies from React
import { createContext, useState, useContext } from "react";

// Create a context named DataContext and provide a default value of null
const DataContext = createContext<any>(null);

// Define a provider component that encapsulates child components
export function DataProvider({ children }: any) {
  // Initialize a state variable 'searchQuery' and a corresponding 'setSearchQuery' function
  // The default value for 'searchQuery' is set to "India"
  const [searchQuery, setSearchQuery] = useState("India");

  // Provide the 'searchQuery' and 'setSearchQuery' as the value to the DataContext
  return (
    <DataContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </DataContext.Provider>
  );
}

// Create a custom hook named useData to access the DataContext
export function useData() {
  // Use the useContext hook to retrieve the DataContext
  return useContext(DataContext);
}
