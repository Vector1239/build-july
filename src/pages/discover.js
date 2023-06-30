import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { applyPagination } from 'src/utils/apply-pagination';
import { InfluencerSearch } from 'src/sections/discover/influencer-search';
import { InfluencerTable } from 'src/sections/discover/influencer-table';
import axios from "axios";
import { is } from 'date-fns/locale';

const now = new Date();

const useFetchedData = (page, rowsPerPage, fetchedData, isLoaded) => {
  return useMemo(
    () => {
      return applyPagination(fetchedData, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useFetchedDataId = (influencers) => {
  return useMemo(
    () => {
      return influencers.map((influencer) => influencer.id);
    },
    [influencers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [fetchedData, setFetchedData] = useState([]);
  const [nextPageCursor, setNextPageCursor] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalFilteredRows, setTotalFilteredRows] = useState(0);
  const [searchParameters, setSearchParameters] = useState({});

  useEffect(() => {
    // Here is where you would make your API call with the searchParameters as your request body/query parameters
    // For now I will just console log it
    console.log(searchParameters);

    // Once you receive the data from the API you can set your data state
    // setData(response.data);
  }, [searchParameters]);


  // write code which fetches data from the API endpoint and stores them into
  // the `data` variable
  const fetchInfluencersGcc = async () => {
    const next = rowsPerPage * page;
    const filters = convertSearchParams(searchParameters);
    console.log('next: ', next)
    console.log('hoping this function does run')
        const options = {
        method: 'POST',
        url: 'https://gateway.goodcreator.co/graphql',
        headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            Authorization: 'Bearer eyJ0eXBlIjoiYXQiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMzRhYTRhOS0wYTk3LTRlZGUtYTMzYi01NzgyNjE2YzQ4YWEiLCJwYXJ0bmVyUHJvZmlsZUlkIjoxNzIwOCwiaXNzIjoiQnVsYnVsLnR2IiwiaXNBZG1pbiI6ZmFsc2UsImRldmljZUlkIjoibnVsbCIsInNpZCI6IjM0MmRiZDVlLTliMWUtNDRhMi05ZmFmLWZkMjQwM2ZhNWM5MSIsInVpZCI6NDk4NjY1NCwiY2lkeCI6Im53bnZReEZ4OGlLdjVCd3pIVUtzIiwiYXR5cGUiOiJCUkFORCIsInNjb3BlIjoiYXBpIiwidXNlckFjY291bnRJZCI6NDk2Mzk4MiwiYW5vbnltb3VzIjpmYWxzZSwicGFydG5lclByb2ZpbGVXZWJlbmdhZ2VVc2VySWQiOiI0OTYzOTgyIiwicGFydG5lcklkIjoxMTE3MywiZXhwIjoxNjg5MjQ5ODc0LCJpYXQiOjE2ODY2NTc4NzR9.yS6xxpUgxW2OOGTm9hKJdTLoxFoxy7f2Hh_EhzSnvo4',
            Connection: 'keep-alive',
            Origin: 'https://campaignmanager.goodcreator.co',
            Referer: 'https://campaignmanager.goodcreator.co/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-apollo-operation-name': 'searchInfluencers',
            'x-bb-channelid': 'WEB',
            'x-bb-clientid': 'nwnvQxFx8iKv5BwzHUKs',
            'x-bb-clienttype': 'BRAND',
            'x-bb-deviceid': 'null'
        },
        data: {
            operationName: 'searchInfluencers',
            variables: {
            after: next.toString(),
            size: rowsPerPage,
            query: {
                filters: filters,
                orderBy: null,
                orderDirection: null
            }
            },
            query: 'query searchInfluencers($before: String, $after: String, $size: Int, $query: SearchQuery) {\n  searchInfluencers(before: $before, after: $after, size: $size, query: $query) {\n    pageInfo {\n      total\n      totalFiltered\n      hasNextPage\n      __typename\n    }\n    edges {\n      node {\n        id\n        onGcc\n        instaVerified\n        blackListedBy\n        blackListedReason\n        isBlackListed\n        name\n        email\n        socialHandles {\n          id\n          platform\n          handle\n          url\n          metrics {\n            followers\n            following\n            avgEngagement\n            avgLikes\n            avgComments\n            numOfPosts\n            avgVideoViews\n            subscribers\n            totalVideos\n            avgReach\n            totalViews\n            __typename\n          }\n          __typename\n        }\n        gender\n        contentCategories {\n          id\n          name\n          __typename\n        }\n        label\n        languages\n        country\n        state\n        city\n        bio\n        dob\n        age\n        barterAllowed\n        isPlixxoUser\n        profileImage {\n          url\n          __typename\n        }\n        whatsappNumber\n        whatsappOptin\n        creatorPrograms {\n          id\n          tag\n          level\n          __typename\n        }\n        creatorCohorts {\n          id\n          tag\n          level\n          __typename\n        }\n        phone\n        comment\n        commercials {\n          id\n          price\n          format\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}'
        }
        };
        axios.request(options).then(function (response) {
        //console.log(response.data);
        console.log('filters: ', filters);
        const result = response.data;
        //setFetchedData(result.data.searchInfluencers.edges);
        const influencers = result.data.searchInfluencers.edges.map(edge => edge.node);
        setFetchedData(influencers);

        setTotalFilteredRows(result.data.searchInfluencers.pageInfo.totalFiltered);
        setIsLoaded(true)
        }).catch(function (error) {
            setIsLoaded(false);
        console.error(error);
        });
  }

  const fetchInfluencers = async () => {
    const next = rowsPerPage * page;
    //const filters = convertSearchParams(searchParameters);
    const filters = '{"field":"platform","filterType":"EQ","value":"INSTAGRAM"}';
    console.log('next: ', next)
    console.log('hoping this function does run')
      const options = {
        method: 'GET',
        url: 'https://tall-supreme-helenium.glitch.me/api/v1/search',
        params: {
          after: next.toString(),
          size: rowsPerPage,
          filters: filters.toString()
        }
      };
        axios.request(options).then(function (response) {
        //console.log(response.data);
        console.log('filters: ', filters);
        const result = response.data;
        //setFetchedData(result.data.searchInfluencers.edges);
        const influencers = result.data.searchInfluencers.edges.map(edge => edge.node);
        setFetchedData(influencers);

        setTotalFilteredRows(result.data.searchInfluencers.pageInfo.totalFiltered);
        setIsLoaded(true)
        }).catch(function (error) {
            setIsLoaded(false);
        console.error(error);
        });
  }

  const convertSearchParams = (searchParameters) => {
    let filters = [
      {field: 'platform', filterType: 'EQ', value: 'INSTAGRAM'}
    ];

    if(searchParameters.minFollowers)
      filters.push({field: 'followers', filterType: 'GTE', value: searchParameters.minFollowers});

    if(searchParameters.maxFollowers)
      filters.push({field: 'followers', filterType: 'LTE', value: searchParameters.maxFollowers});

    if(searchParameters.minFollowing)
      filters.push({field: 'following', filterType: 'GTE', value: searchParameters.minFollowing});

    if(searchParameters.maxFollowing)
      filters.push({field: 'following', filterType: 'LTE', value: searchParameters.maxFollowing});

    if(searchParameters.minEng)
      filters.push({field: 'averageEngagement', filterType: 'GTE', value: searchParameters.minEng});

    if(searchParameters.maxEng)
      filters.push({field: 'averageEngagement', filterType: 'LTE', value: searchParameters.maxEng});

    if(searchParameters.minLikes)
      filters.push({field: 'averageLikes', filterType: 'GTE', value: searchParameters.minLikes});

    if(searchParameters.maxLikes)
      filters.push({field: 'averageLikes', filterType: 'LTE', value: searchParameters.maxLikes});

    if(searchParameters.minPost)
      filters.push({field: 'numOfPosts', filterType: 'GTE', value: searchParameters.minPost});

    if(searchParameters.maxPost)
      filters.push({field: 'numOfPosts', filterType: 'LTE', value: searchParameters.maxPost});

    if(searchParameters.gender)
      filters.push({field: 'gender', filterType: 'IN', value: [searchParameters.gender]});

    if(searchParameters.selectedLanguage)
      filters.push({field: 'languages', filterType: 'IN', value: [searchParameters.selectedLanguage]});

    if(searchParameters.selectedLocations && searchParameters.selectedLocations.length > 0)
      filters.push({field: 'location', filterType: 'IN', value: searchParameters.selectedLocations});

    if(searchParameters.selectedCategories){
      let selectedCategoriesArray = [];
      for (let [key, value] of Object.entries(searchParameters.selectedCategories)) {
        if(value) selectedCategoriesArray.push(key);
      }
      if(selectedCategoriesArray.length > 0)
        filters.push({field: 'contentCategories', filterType: 'IN', value: selectedCategoriesArray});
    }

    return filters;
  }

  useEffect(() => {
    fetchInfluencers();
    console.log('rows entered: ', rowsPerPage);
    console.log('heres filter selections: ', convertSearchParams(searchParameters));
  }, [page, rowsPerPage, searchParameters]);

    const influencers = useFetchedData(page, rowsPerPage, fetchedData);
    const influencersId = useFetchedDataId(influencers);
    const influencersSelection = useSelection(influencersId);

console.log('fetched data: ', fetchedData);
// console.log(fetchedData.length);
// console.log('influencers: ', influencers);
// console.log('influencersId: ', influencersId);
// console.log('total found: ', totalFilteredRows);
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
if(!isLoaded){
    return(<p>loading...</p>)
}
  return (
    <>
      <Head>
        <title>
          Discover Influencers - Demo for influencer search engine
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Influencers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )

                }
                  variant="contained"
                >
                  Create Plan
                </Button>
              </div>
            </Stack>
            <InfluencerSearch setSearchParameters={setSearchParameters}/>
            <InfluencerTable
              count={totalFilteredRows}
              items={fetchedData}
              onDeselectAll={influencersSelection.handleDeselectAll}
              onDeselectOne={influencersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={influencersSelection.handleSelectAll}
              onSelectOne={influencersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={influencersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
