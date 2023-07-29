import React  from "react";
import EntryForm from "../pages/EntryForm";
import Output from "../pages/Output";
import { Flex,Center, Text, Box, Square } from "@chakra-ui/react";
import  "../pages/pages.css"; 
const Layout = () => {
  return (
    <>        
      <Flex  >      
        <Box flex='1' bg='#f2f2f2' >
          <EntryForm/>
        </Box>
        <Box flex='1' bg='grey'  >
          <Output />
        </Box>       
      </Flex>
    </>
  );
};

export default Layout;
