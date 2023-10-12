const AboutUs = () => {
  return (
    <div className="mt-4 w-50% mx-auto">
      {/* Section Title: About Us */}
      <h1 className="text-2xl">About Us</h1>
      {/* Introduction Paragraph */}
      <p>
        Welcome to Weather Insights, your go-to source for accurate and
        up-to-date weather information. We are passionate about delivering
        comprehensive weather data to keep you informed and prepared for any
        weather conditions.
      </p>
      {/* Section Title: Our Mission */}
      <h2 className="text-xl">Our Mission</h2>
      {/* Mission Statement */}
      <p>
        At Weather Insights, our mission is to make the world's weather data
        accessible to everyone, ensuring that you can plan your day with
        confidence and make informed decisions. Our app is designed with the
        user in mind, offering a seamless and intuitive experience for weather
        enthusiasts, travelers, and everyday users.
      </p>
      {/* Section Title: What We Offer */}
      <h2 className="text-xl">What We Offer</h2>
      {/* List of Offerings */}
      <ul>
        <li>
          <b>Real-Time Weather:</b> Get the latest weather conditions for your
          location at a glance. Our app provides you with instant access to
          temperature, humidity, wind speed, and more.
        </li>
        <li>
          <b>Accurate Forecasts:</b> Plan your week or even your vacation with
          our reliable weather forecasts, ranging from hourly updates to
          long-term predictions.
        </li>
        <li>
          <b>Location-Based:</b> Whether you're at home or exploring a new
          destination, we tailor our weather information to your specific
          location, ensuring you have the most relevant data.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
