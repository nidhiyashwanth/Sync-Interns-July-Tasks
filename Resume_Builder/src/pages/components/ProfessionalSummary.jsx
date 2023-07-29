import React,{ useState } from 'react'
import {
  Text,
  Box,
  Heading,
  FormControl,
  FormErrorMessage
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./toolbar/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./toolbar/Editor.css"
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setProSummary } from '../../features/profileSummary';
 

function ProfessionalSummary() {
  
//  const [val, setValue] = useState("")
  
//   const dispatch = useDispatch();
//   dispatch(setProSummary(val))
 
  
  

  return (
   <>
    <Box mt={10}>
      <Heading as="h3" size="md" mb={2}>
        Professional Summary 
      </Heading>
        <Text color="#808080" fontSize="14px">Write 2-4 short & energetic sentences to interest the reader! Mention your role,
         experience & most importantly - your biggest achievements, best qualities and skills.</Text>
        <EditorToolbar toolbarId={'t1'}/> 

      
        <ReactQuill
          theme="snow"
          placeholder={"Write something awesome..."}
         
          
          // modules={modules('t1')}
          // formats={formats}
        />    
                          
    </Box>
   </>
  )
}

export default ProfessionalSummary;