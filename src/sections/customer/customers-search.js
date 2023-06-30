import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Card,
  FormControl,
  FormLabel,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  Button,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { CustomersTable } from "./customers-table";
const axios = require("axios");

export const CustomersSearch = () => {
  // const apiUrl = "https://tall-supreme-helenium.glitch.me/api/v1/search";
  const after = null;
  const size = 50;

  const [count, setCount] = useState("");

  const [value, setValue] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [suggestedCategories, setSuggestedCategories] = useState([]);

  const [minFollowers, setMinFollowers] = useState("");
  const [maxFollowers, setMaxFollowers] = useState("");

  const [minFollowing, setMinFollowing] = useState("");
  const [maxFollowing, setMaxFollowing] = useState("");

  const [minEng, setMinEng] = useState("");
  const [maxEng, setMaxEng] = useState("");

  const [minView, setMinView] = useState("");
  const [maxView, setMaxView] = useState("");

  const [minLikes, setMinLikes] = useState("");
  const [maxLikes, setMaxLikes] = useState("");

  const [minPost, setMinPost] = useState("");
  const [maxPost, setMaxPost] = useState("");

  const [locations, setLocations] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const [minAge, setMinAge] = useState([]);
  const [maxAge, setMaxAge] = useState([]);

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [gender, setGender] = useState({
    male: false,
    female: false,
  });

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleLocation = (event) => {
    setLocations(event.target.value);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMinFollower = (event) => {
    setMinFollowers(event.target.value);
  };

  const handleMaxFollower = (event) => {
    setMaxFollowers(event.target.value);
  };

  const handleMinFollowingChange = (event) => {
    setMinFollowing(event.target.value);
  };

  const handleMaxFollowingChange = (event) => {
    setMaxFollowing(event.target.value);
  };

  const handleMinEngChange = (event) => {
    setMinEng(event.target.value);
  };

  const handleMaxEngChange = (event) => {
    setMaxEng(event.target.value);
  };

  const handleMinLikesChange = (event) => {
    setMinLikes(event.target.value);
  };

  const handleMaxLikesChange = (event) => {
    setMaxLikes(event.target.value);
  };

  const handleMinPostChange = (event) => {
    setMinPost(event.target.value);
  };

  const handleMaxPostChange = (event) => {
    setMaxPost(event.target.value);
  };

  const handleMinViewChange = (event) => {
    setMinView(event.target.value);
  };

  const handleMaxViewChange = (event) => {
    setMaxView(event.target.value);
  };

  const handleMinAge = (event) => {
    setMinAge(event.target.value);
  };

  const handleMaxAge = (event) => {
    setMaxAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  function getDateOfBirthFromAge(lowerLimit, upperLimit) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const latestDOBYearLower = currentYear - lowerLimit;
    const earliestDOBYearLower = latestDOBYearLower - 1;

    const latestDOBYearUpper = currentYear - upperLimit;
    const earliestDOBYearUpper = latestDOBYearUpper - 1;

    const latestDOBLower = new Date(
      latestDOBYearLower,
      currentMonth,
      currentDay
    );
    const earliestDOBLower = new Date(
      earliestDOBYearLower,
      currentMonth,
      currentDay
    );

    const latestDOBUpper = new Date(
      latestDOBYearUpper,
      currentMonth,
      currentDay
    );
    const earliestDOBUpper = new Date(
      earliestDOBYearUpper,
      currentMonth,
      currentDay
    );

    const formatDOB = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
    };

    return latestDOBLower, earliestDOBUpper;

    //     return [
    //       { field: 'dateOfBirth', filterType: 'LTE', value: formatDOB(latestDOBLower) },
    //       { field: 'dateOfBirth', filterType: 'GTE', value: formatDOB(earliestDOBUpper) }
    //     ];
  }

  const apiUrl = `https://tall-supreme-helenium.glitch.me/api/v1/search`;

  console.log(apiUrl);

  const { start, end } = getDateOfBirthFromAge(minAge, maxAge);

  const allLocation = async () => {
    const locationAPI =
      "https://tall-supreme-helenium.glitch.me/api/v1/get_all_locations";
    try {
      const responseLocation = await axios.get(locationAPI, {});

      console.log(responseLocation.data.locations);

      setLocationData(responseLocation.data.locations);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          after,
          size,
          filters: JSON.stringify([
            { field: "platform", filterType: "EQ", value: "INSTAGRAM" },

            // { field: "searchPhrase", filterType: "LIKE", value: searchQuery },

            // {"field":"location","filterType":"IN","value":value},

            { field: "followers", filterType: "GTE", value: minFollowers },
            { field: "followers", filterType: "LTE", value: maxFollowers },

            // { field: "following", filterType: "GTE", value: minFollowing },
            // { field: "following", filterType: "LTE", value: maxFollowing },

            // { field: "averageEngagement", filterType: "GTE", value: minEng },
            // { field: "averageEngagement", filterType: "LTE", value: maxEng },

            // { field: "averageLikes", filterType: "GTE", value: minLikes },
            // { field: "averageLikes", filterType: "LTE", value: maxLikes },

            // { field: "averageVideoViews", filterType: "GTE", value: minView },
            // { field: "averageVideoViews", filterType: "LTE", value: maxView },

            // { field: "dateOfBirth", filterType: "LTE", value: start },
            // { field: "dateOfBirth", filterType: "GTE", value: end },

            // { field: "gender", filterType: "IN", value: gender },
          ]),
        },
      });

      console.log('response: ' + response)

      const finalData = response.data.data.searchInfluencers.edges;

      console.log(finalData);

      const allFilterCount = response.data.data.searchInfluencers.pageInfo.totalFiltered;

      setCount(allFilterCount);

      console.log(allFilterCount);

      setFilteredData(finalData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("byee");
    // fetchData();
    allLocation();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hiii");
    fetchData();
  };

  console.log(filteredData);

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };

  return (
    <Card sx={{ p: 2 }}>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <Button onClick={() => onSearch(value)}> Search </Button>
        </div>

        <div>
          {locationData.filter(item => {
            const searchTerm = value.toLowerCase();
            const fullName = item.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
          })
          .map((item) => (
            <div onClick={() => onSearch(item)} key={item}>{item}</div>
          ))}
        </div>

        {/* <div>
          {locationData.map((item) => (
          <div>
            {item}
          </div>))}
        </div> */}
      </div>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Search customer</FormLabel>
          <OutlinedInput
            defaultValue=""
            placeholder="Search customer"
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </InputAdornment>
            }
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </FormControl>

        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <FormControl fullWidth>
            <FormLabel>Followers Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minFollowers}
                placeholder="Min"
                onChange={handleMinFollower}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxFollowers}
                placeholder="Max"
                onChange={handleMaxFollower}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Following Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minFollowing}
                placeholder="Min"
                onChange={handleMinFollowingChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxFollowing}
                placeholder="Max"
                onChange={handleMaxFollowingChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Engagement Rate Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minEng}
                placeholder="Min"
                onChange={handleMinEngChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxEng}
                placeholder="Max"
                onChange={handleMaxEngChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>
        </div>

        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <FormControl fullWidth>
            <FormLabel>Avg. Video Views Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minView}
                placeholder="Min"
                onChange={handleMinViewChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxView}
                placeholder="Max"
                onChange={handleMaxViewChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Avg. Likes Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minLikes}
                placeholder="Min"
                onChange={handleMinLikesChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxLikes}
                placeholder="Max"
                onChange={handleMaxLikesChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>No. Of Post Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minPost}
                placeholder="Min"
                onChange={handleMinPostChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxPost}
                placeholder="Max"
                onChange={handleMaxPostChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>
        </div>

        <FormControl fullWidth>
          <FormLabel>Age</FormLabel>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OutlinedInput
              value={minAge}
              placeholder="Min"
              onChange={handleMinAge}
              sx={{ width: 120, marginRight: 1 }}
            />
            <span>to</span>
            <OutlinedInput
              value={maxAge}
              placeholder="Max"
              onChange={handleMaxAge}
              sx={{ width: 120, marginLeft: 1 }}
            />
          </div>
        </FormControl>

        <FormControl component="fieldset" fullWidth sx={{ mb: 2 }}>
          <FormLabel component="legend">Gender</FormLabel>

          <RadioGroup value={gender} onChange={handleGenderChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Select Language</FormLabel>
          <Select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            sx={{ width: 200 }}
          >
            <MenuItem value="">All Languages</MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="hindi">Hindi</MenuItem>
          </Select>
        </FormControl>

        {/* <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Start Date</FormLabel>
          <OutlinedInput
            type="date"
            value={startDate}
            onChange={handleStartDate}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>End Date</FormLabel>
          <OutlinedInput type="date" value={endDate} onChange={handleEndDate} />
        </FormControl> */}

        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      <CustomersTable filteredData={filteredData} count={count} />
    </Card>
  );
};
