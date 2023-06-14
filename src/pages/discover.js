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

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'carson.darrin@devias.io',
    name: 'Carson Darrin',
    phone: '304-428-3097'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'Atlanta',
      country: 'USA',
      state: 'Georgia',
      street: '1865  Pleasant Hill Road'
    },
    avatar: '/assets/avatars/avatar-fran-perez.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'fran.perez@devias.io',
    name: 'Fran Perez',
    phone: '712-351-5711'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'North Canton',
      country: 'USA',
      state: 'Ohio',
      street: '4894  Lakeland Park Drive'
    },
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'jie.yan.song@devias.io',
    name: 'Jie Yan Song',
    phone: '770-635-2682'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'Madrid',
      country: 'Spain',
      name: 'Anika Visser',
      street: '4158  Hedge Street'
    },
    avatar: '/assets/avatars/avatar-anika-visser.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'anika.visser@devias.io',
    name: 'Anika Visser',
    phone: '908-691-3242'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    address: {
      city: 'San Diego',
      country: 'USA',
      state: 'California',
      street: '75247'
    },
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: 'miron.vitold@devias.io',
    name: 'Miron Vitold',
    phone: '972-333-4106'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    address: {
      city: 'Berkeley',
      country: 'USA',
      state: 'California',
      street: '317 Angus Road'
    },
    avatar: '/assets/avatars/avatar-penjani-inyene.png',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: 'penjani.inyene@devias.io',
    name: 'Penjani Inyene',
    phone: '858-602-3409'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    address: {
      city: 'Carson City',
      country: 'USA',
      state: 'Nevada',
      street: '2188  Armbrester Drive'
    },
    avatar: '/assets/avatars/avatar-omar-darboe.png',
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: 'omar.darobe@devias.io',
    name: 'Omar Darobe',
    phone: '415-907-2647'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    address: {
      city: 'Los Angeles',
      country: 'USA',
      state: 'California',
      street: '1798  Hickory Ridge Drive'
    },
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
    createdAt: subDays(subHours(now, 2), 5).getTime(),
    email: 'siegbert.gottfried@devias.io',
    name: 'Siegbert Gottfried',
    phone: '702-661-1654'
  },
  {
    id: '5e8877da9a65442b11551975',
    address: {
      city: 'Murray',
      country: 'USA',
      state: 'Utah',
      street: '3934  Wildrose Lane'
    },
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    createdAt: subDays(subHours(now, 8), 6).getTime(),
    email: 'iulia.albu@devias.io',
    name: 'Iulia Albu',
    phone: '313-812-8947'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    address: {
      city: 'Salt Lake City',
      country: 'USA',
      state: 'Utah',
      street: '368 Lamberts Branch Road'
    },
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    createdAt: subDays(subHours(now, 1), 9).getTime(),
    email: 'nasimiyu.danai@devias.io',
    name: 'Nasimiyu Danai',
    phone: '801-301-7894'
  }
];

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
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalFilteredRows, setTotalFilteredRows] = useState(0);

  // write code which fetches data from the API endpoint and stores them into
  // the `data` variable
  useEffect(() => {
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
            after: null,
            size: 50,
            query: {
                filters: [{field: 'platform', filterType: 'EQ', value: 'INSTAGRAM'}],
                orderBy: null,
                orderDirection: null
            }
            },
            query: 'query searchInfluencers($before: String, $after: String, $size: Int, $query: SearchQuery) {\n  searchInfluencers(before: $before, after: $after, size: $size, query: $query) {\n    pageInfo {\n      total\n      totalFiltered\n      hasNextPage\n      __typename\n    }\n    edges {\n      node {\n        id\n        onGcc\n        instaVerified\n        blackListedBy\n        blackListedReason\n        isBlackListed\n        name\n        email\n        socialHandles {\n          id\n          platform\n          handle\n          url\n          metrics {\n            followers\n            following\n            avgEngagement\n            avgLikes\n            avgComments\n            numOfPosts\n            avgVideoViews\n            subscribers\n            totalVideos\n            avgReach\n            totalViews\n            __typename\n          }\n          __typename\n        }\n        gender\n        contentCategories {\n          id\n          name\n          __typename\n        }\n        label\n        languages\n        country\n        state\n        city\n        bio\n        dob\n        age\n        barterAllowed\n        isPlixxoUser\n        profileImage {\n          url\n          __typename\n        }\n        whatsappNumber\n        whatsappOptin\n        creatorPrograms {\n          id\n          tag\n          level\n          __typename\n        }\n        creatorCohorts {\n          id\n          tag\n          level\n          __typename\n        }\n        phone\n        comment\n        commercials {\n          id\n          price\n          format\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}'
        }
        };
        axios.request(options).then(function (response) {
        //console.log(response.data);
        const result = response.data;
        //setFetchedData(result.data.searchInfluencers.edges);
        setFetchedData(result.data.searchInfluencers.edges);
        setTotalFilteredRows(result.data.searchInfluencers.pageInfo.totalFiltered);
        setIsLoaded(true)
        }).catch(function (error) {
            setIsLoaded(false);
        console.error(error);
        });
    }, []);

    const influencers = useFetchedData(page, rowsPerPage, fetchedData);
    const influencersId = useFetchedDataId(influencers);
    const influencersSelection = useSelection(influencersId);

console.log('fetched data: ', fetchedData);
console.log(fetchedData.length);
console.log('influencers: ', influencers);
console.log('influencersId: ', influencersId);
console.log('total found: ', totalFilteredRows);
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
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <InfluencerSearch />
            <InfluencerTable
              count={totalFilteredRows}
              items={influencers}
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
