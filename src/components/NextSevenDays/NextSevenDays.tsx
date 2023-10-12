import { useEffect, useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import { getCall } from "../../axios";
import { useData } from "../../context/DataContext";

const NextSevenDays = () => {
  // State to store forecast data
  const [foreCastData, setForeCastData] = useState([]);

  // Retrieve the searchQuery from the DataContext using a custom hook
  const { searchQuery } = useData();

  // Function to fetch weather data for the next seven days
  const fetchData = async () => {
    try {
      // Make an API call to get the weather forecast data
      const response = await getCall("/forecast.json", {
        q: searchQuery,
        days: 7,
        aqi: "no",
        alerts: "no",
      });
      if (response) {
        // Extract and set the forecast data in the state
        setForeCastData(() => response.forecast.forecastday);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to transform the forecast data into an object suitable for InfoCard
  const foreCastDataObject = (object: any) => {
    if (object) {
      return {
        icon: object.day.condition.icon,
        temp: object.day.maxtemp_c,
        date: object.date,
        status: object.day.condition.text,
      };
    }
    return null;
  };

  // Use the useEffect hook to fetch data when the searchQuery changes
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <div className="my-4">
        <h1 className="text-2xl">Next Seven Days Forecast</h1>
        <div className="flex flex-row justify-center space-x-4">
          {foreCastData?.map((e: any, i: number) => {
            // Transform the forecast data into a suitable format for InfoCard
            const filteredData = foreCastDataObject(e);
            return <InfoCard key={`card-${i}`} {...filteredData} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NextSevenDays;
