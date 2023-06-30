import PropTypes from "prop-types";
import { format } from "date-fns";
import { useState, useEffect } from "react";
// import XLSX from "xlsx";
// import XLSX from "xlsx-style/dist/xlsx.full.min.js";
// import FileSaver from "file-saver";

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";

export const CustomersTable = (props) => {
  const {
    filteredData = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    count = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const [selectedItems, setSelectedItems] = useState([]);
  const [jsonData, setJsonData] = useState([]);



  const selectedSome =
    selected.length > 0 && selected.length < filteredData.length;
  const selectedAll =
    filteredData.length > 0 && selected.length === filteredData.length;

  const handleSelectOne = (customerId) => {
    console.log(customerId);
    const selectedIndex = selectedItems.indexOf(customerId);
    let newSelectedItems = [];

    if (selectedIndex === -1) {
      newSelectedItems = [...selectedItems, customerId];
    } else if (selectedIndex === 0) {
      newSelectedItems = selectedItems.slice(1);
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelectedItems = selectedItems.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelectedItems = [
        ...selectedItems.slice(0, selectedIndex),
        ...selectedItems.slice(selectedIndex + 1),
      ];
    }

    setSelectedItems(newSelectedItems);

    // if (newSelectedItems.length > 0) {
    //   console.log('Selected Items:', newSelectedItems);
    // }
  };

  const handleExportClick = () => {
    console.log("Selected Items:", selectedItems);

    const exportedData = jsonData.filter((item) =>
      selectedItems.includes(item.node.id)
    );
    console.log("Exported Data:", exportedData);



  // // Convert the data to a worksheet
  // const worksheet = XLSX.utils.json_to_sheet(exportedData);

  // // Create a workbook
  // const workbook = XLSX.utils.book_new();
  // XLSX.utils.book_append_sheet(workbook, worksheet, "Exported Data");

  // // Generate an Excel file
  // const excelBuffer = XLSX.write(workbook, {
  //   bookType: "xlsx",
  //   type: "array",
  //   compression: true,
  // });

  // // Convert the array buffer to a blob
  // const excelBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

  // // Save the file
  // FileSaver.saveAs(excelBlob, "exported_data.xlsx");
  };

  // useEffect(() => {
  //   // Fetch the JSON data
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setJsonData(data))
  //     .catch((error) => {
  //       console.error("Error fetching JSON data:", error);
  //     });
  // }, []);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      console.log("HI");
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Followers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((customer) => {
                const isSelected = selected.includes(customer.node.id);
                const followers =
                  customer.node.socialHandles[0].metrics.followers;

                return (
                  <TableRow hover key={customer.node.id} selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            // onSelectOne?.(customer.node.id);
                            handleSelectOne(customer.node.id);
                          } else {
                            onDeselectOne?.(customer.node.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={customer.node.socialHandles[0].url}>
                          {getInitials(customer.node.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer.node.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.node.email}</TableCell>
                    <TableCell>
                      {customer.node.city}, {customer.node.state},{" "}
                      {customer.node.country}
                    </TableCell>
                    <TableCell>{customer.node.phone}</TableCell>
                    <TableCell>{followers}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <Button onClick={handleExportClick}>Export Selected</Button>
      </Box>
    </Card>
  );
};

CustomersTable.propTypes = {
  filteredData: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};

