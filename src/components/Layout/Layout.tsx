import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { getCall } from "../../axios";
import { SearchBar } from "./components/SearchBar";
import { InfoCard } from "../InfoCard";
import { useData } from "../../context/DataContext";

const Layout = () => {
  // State to store current weather data
  const [currentData, setCurrentData] = useState(null);
  const [isError, setIsError] = useState(false);
  // Retrieve the searchQuery and setSearchQuery function from the DataContext using a custom hook
  const { searchQuery, setSearchQuery } = useData();

  // Function to fetch current weather data
  const fetchData = async () => {
    try {
      // Make an API call to get the current weather data based on the searchQuery
      const response = await getCall("/current.json", { q: searchQuery });
      setCurrentData(response);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  // Function to transform the current weather data into an object suitable for InfoCard
  const currentDataObject = (object: any) => {
    if (object) {
      return {
        icon: object.current.condition.icon,
        temp: object.current.temp_c,
        region: object.location.name,
        country: object.location.country,
      };
    }
    return null;
  };

  // Debounce function for the search query to avoid excessive API requests
  function debounce(func: any, delay: number) {
    let timer: any;
    return function (...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  // Search query handler that uses the debounce function with a 1-second delay
  const handleSearchQuery = debounce((query: string) => {
    setSearchQuery(query);
  }, 1000);

  // Use the useEffect hook to fetch data when the searchQuery changes
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <SearchBar handleSearchQuery={handleSearchQuery} isError={isError} />
      <InfoCard {...currentDataObject(currentData)} />
      <Outlet />
    </>
  );
};

export default Layout;
