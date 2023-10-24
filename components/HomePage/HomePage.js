import React, { useState } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.searchContainer}>
        <h1 className={styles.heading}>Find Your Dream Home</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
