const InfoCard = (data: any) => {
  return (
    <div className="flex justify-center mt-5 ">
      <div className="bg-white rounded-lg shadow-md w-[200px]">
        {/* Weather Icon */}
        <img
          src={data.icon} // Replace with the actual image path
          alt="Image"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="p-4">
          {/* Temperature */}
          <h2 className="text-2xl font-semibold text-gray-800">
            {data.temp}&deg;C
          </h2>
          {/* Region and Country */}
          {data.region && data.country ? (
            <p className="text-gray-600 mt-2">
              {data?.region}, {data?.country}
            </p>
          ) : (
            ""
          )}
          {/* Weather Status */}
          {data.status ? <p>{data.status}</p> : ""}
          {/* Date */}
          {data.date ? <p>{data.date}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
