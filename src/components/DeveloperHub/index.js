import React, { useState } from "react";
import DeveloperProfile from "../DeveloperProfile";
import developersData from "../developersData.json";

import "./index.css";

const DeveloperHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = developersData.filter((developer) => {
      const { name, skills, location } = developer;
      const searchValue = event.target.value.toLowerCase();
      // Check if the developer's name, skills, or location matches the search value
      return (
        name.toLowerCase().includes(searchValue) ||
        skills.some((skill) => skill.toLowerCase().includes(searchValue)) ||
        location.toLowerCase().includes(searchValue)
      );
    });
    setFilteredDevelopers(filtered);
  };

  return (
    <div>
      <div className="input-container">
        <input
          className="search"
          type="text"
          placeholder="Search developers..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="outer-developer-profile">
        {filteredDevelopers.map((developer, id) => (
          <DeveloperProfile key={id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default DeveloperHub;
