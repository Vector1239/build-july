import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  Radio,
  RadioGroup,
  Button,
  Select,
  MenuItem,
} from "@mui/material";


import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const LocationSearchBar = ({ setSelectedLocations, selectedLocations }) => {
  const [locations, setLocations] = useState([]);
  //const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Fetch data when component mounts
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch("https://tall-supreme-helenium.glitch.me/api/v1/get_all_locations");
      const data = await response.json();
      setLocations(data.locations);
    };
    fetchLocations();
  }, []);

  // Update searchInput state when the user types
  const handleInputChange = (event, value) => {
    setSearchInput(value);
  };

  // Add selected location to selectedLocations array and clear the search input
  const handleLocationSelect = (event, value) => {
    if (value !== null) {
      setSelectedLocations(prevLocations => [...prevLocations, value]);
    }
    setSearchInput('');
  };

  return (
    <div>
      <Autocomplete
        value={searchInput}
        onInputChange={handleInputChange}
        onChange={handleLocationSelect}
        options={locations}
        renderInput={(params) => <TextField {...params} label="Search location" />}
      />
      <div>
        <h3>Selected Locations</h3>
        <ul>
          {selectedLocations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const CategorySearchBar = ({ setSelectedCategories, selectedCategories }) => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://tall-supreme-helenium.glitch.me/api/v1/get_all_categories");
      const data = await response.json();
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategories({ ...selectedCategories, [event.target.name]: event.target.checked });
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const filterCategories = () =>
    categories.filter((category) =>
      category.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      (category.exp && category.exp.toLowerCase().includes(searchValue.toLowerCase())) ||
      (category.tags && category.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase())))
    );

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup>
          <TextField
            label="Search categories"
            variant="outlined"
            value={searchValue}
            onChange={handleSearchChange}
          />
          {filterCategories().map((category, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategories[category.category] || false}
                  onChange={handleCategoryChange}
                  name={category.category}
                />
              }
              label={category.category}
              key={index}
            />
          ))}
        </FormGroup>
      </FormControl>
      <div>
        <h3>Selected Categories</h3>
        <ul>
          {Object.keys(selectedCategories).map((category, index) =>
            selectedCategories[category] && <li key={index}>{category}</li>
          )}
        </ul>
      </div>
    </div>
  );
};





export const InfluencerSearch = ({setSearchParameters}) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('');

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

  const [gender, setGender] = useState({
    male: false,
    female: false,
  });

  const [searchQuery, setSearchQuery] = useState(""); // Added searchQuery state
  const [filteredData, setFilteredData] = useState([]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleMinInputChange = (event) => {
    setMinFollowers(event.target.value);
  };

  const handleMaxInputChange = (event) => {
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

  const handleCheckboxChange = (event) => {
    setGender({
      ...gender,
      [event.target.name]: event.target.checked,
    });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value); // Update searchQuery state
  };

  const filterData = (data) => {
    // Filter the data based on the selected input and search query
    const filteredData = data.filter((item) => {
      // Filter by followers count
      const followers = item.node.socialHandles[0].metrics.followers;
      if (minFollowers && parseInt(minFollowers) > parseInt(followers)) {
        return false;
      }
      if (maxFollowers && parseInt(maxFollowers) < parseInt(followers)) {
        return false;
      }

      // // Filter by gender
      // const itemGender = item.node.gender.toLowerCase();
      // if (
      //   (gender.male && itemGender !== 'male') ||
      //   (gender.female && itemGender !== 'female')
      // ) {
      //   return false;
      // }
      // Filter by gender
      if (gender && item.node.gender.toLowerCase() !== gender.toLowerCase()) {
        return false;
      }

      // Filter by search query
      const itemName = item.node.name.toLowerCase();
      const bio = item.node.bio.toLowerCase();
      const finalKey = itemName + " " + bio;
      if (!finalKey.includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    // Set the filtered data
    setFilteredData(filteredData);

    // Print the filtered data in the console
    console.log(filteredData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchParameters = {
      minFollowers,
      maxFollowers,
      minFollowing,
      maxFollowing,
      minEng,
      maxEng,
      minView,
      maxView,
      minLikes,
      maxLikes,
      minPost,
      maxPost,
      gender,
      selectedLanguage,
      selectedLocations,
      selectedCategories,
      searchQuery,
    };

    setSearchParameters(searchParameters);
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

    const latestDOBLower = new Date(latestDOBYearLower, currentMonth, currentDay);
    const earliestDOBLower = new Date(earliestDOBYearLower, currentMonth, currentDay);

    const latestDOBUpper = new Date(latestDOBYearUpper, currentMonth, currentDay);
    const earliestDOBUpper = new Date(earliestDOBYearUpper, currentMonth, currentDay);

    const formatDOB = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    return [
      { field: 'dateOfBirth', filterType: 'LTE', value: formatDOB(latestDOBLower) },
      { field: 'dateOfBirth', filterType: 'GTE', value: formatDOB(earliestDOBUpper) }
    ];
  }


  // Test
  //console.log(getDateOfBirthFromAge(18, 24));


  return (


    <Card sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Search Influencer</FormLabel>
          <OutlinedInput
            defaultValue=""
            placeholder="Enter Keywords to capture Bio, Name, Username, etc."
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </InputAdornment>
            }
            value={searchQuery} // Bind searchQuery state to the input value
            onChange={handleSearchInputChange} // Handle search input change
          />
        </FormControl>

        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          {/* Followers Count */}
          <FormControl fullWidth>
            <FormLabel>Followers Count</FormLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <OutlinedInput
                value={minFollowers}
                placeholder="Min"
                onChange={handleMinInputChange}
                sx={{ width: 120, marginRight: 1 }}
              />
              <span>to</span>
              <OutlinedInput
                value={maxFollowers}
                placeholder="Max"
                onChange={handleMaxInputChange}
                sx={{ width: 120, marginLeft: 1 }}
              />
            </div>
          </FormControl>

          {/* Following Count */}
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

          {/* Engagement Rate Count */}
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
          {/* Avg. Video Views Count */}
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

          {/* Avg. Likes Count */}
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

          {/* No. Of Post Count */}
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

        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel>Select Language</FormLabel>
          <Select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            sx={{ width: 200 }}
          >
            <MenuItem value="">All Languages</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Bengali">Bengali</MenuItem>
            <MenuItem value="Marathi">Marathi</MenuItem>
            <MenuItem value="Telugu">Telugu</MenuItem>
            <MenuItem value="Tamil">Tamil</MenuItem>
            <MenuItem value="Malayalam">Malayalam</MenuItem>
            <MenuItem value="Gujarati">Gujarati</MenuItem>
            <MenuItem value="Kannada">Kannada</MenuItem>
            <MenuItem value="Odia">Odia</MenuItem>
            <MenuItem value="Punjabi">Punjabi</MenuItem>
            <MenuItem value="Urdu">Urdu</MenuItem>
          </Select>
        </FormControl>

        <LocationSearchBar setSelectedLocations={setSelectedLocations} selectedLocations={selectedLocations} />
        <CategorySearchBar setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories} />

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

        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {/* Pass the filteredData to the CustomersTable component */}
      {/* <InfluencerTable filteredData={filteredData} /> */}
    </Card>
  );
};
