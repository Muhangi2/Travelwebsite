import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle the form submission (e.g., search, date range, etc.)
    // console.log("Search Term:", searchTerm);
    // console.log("Check-in Date:", startDate);
    // console.log("Check-out Date:", endDate);
  };

  return (
    <section className="form_section">
      <form onSubmit={handleFormSubmit} className="form">
        <div className="search-input-container">
          <label>Where You Want to go</label>
          <div className="search_icon">
            <FaSearch className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="custom-date-picker"
              placeholder="search your location"
            />
          </div>
        </div>
        <div className="border_div"></div>
        <div>
          <label>Check-in</label><br/>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            placeholderText="Add Date"
            className="custom-date-picker"
          />
        </div>
        <div className="border_div"></div>
        <div>
          <label>Check-out</label><br/>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            endDate={endDate}
            // startDate={startDate}
            // minDate={startDate}
            placeholderText="Add Date"
            className="custom-date-picker"
          />
        </div>
        <div className="search_button">
          <button type="submit">EXPLORE NOW</button>
        </div>
      </form>
    </section>
  );
};

export default Search;
