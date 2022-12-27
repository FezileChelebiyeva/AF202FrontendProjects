import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./index.scss";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setUsersData(response.data));
  }, []);

  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountryData(response.data));
  }, []);

  return (
    <div id="users-page">
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Users</title>
          <link rel="canonical" href="http://users.com" />
        </Helmet>
        <h1>Users</h1>
        <ChakraProvider>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Surname</Th>
                  <Th>Country</Th>
                  <Th>City</Th>
                  <Th>Flag</Th>
                </Tr>
              </Thead>
              <Tbody>
                {usersData.map((elem) => {
                  return (
                    <Tr key={elem.id}>
                      <Td>{elem.name}</Td>
                      <Td>{elem.surname}</Td>
                      <Td>{elem.country}</Td>
                      <Td>{elem.city}</Td>
                      {countryData.map((el) => {
                        return (
                          el.name == elem.country && (
                            <Td key={el.name}>
                              <img
                                className="flag-img"
                                src={el.flags?.png}
                                alt=""
                              />
                            </Td>
                          )
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </ChakraProvider>
      </div>
    </div>
  );
};

export default UsersPage;
