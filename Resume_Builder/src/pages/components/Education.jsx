import React from 'react'
import  "../pages.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./toolbar/Editor.css"
import EditorToolbar, { modules, formats } from "./toolbar/EditorToolbar"
import {
  Text,
  Box,
  Heading,
  Button,
  Tr, TableContainer, Table, Tbody, Td, FormControl,Input, FormErrorMessage
  ,Grid,GridItem, FormLabel,Accordion,AccordionItem,AccordionButton
  ,AccordionIcon,AccordionPanel,Spacer,Flex
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";


function Education() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    watch,
} = useForm({ mode: "onChange" });

  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
} = useFieldArray({
    control,
    name: "items",
});
if (itemFields.length === 0) {
  appendItem();
}

  return (
    <>
    <Box mt={10}>
      <Heading as="h3" size="md" mb={2}>
        Education
      </Heading>
        <Text className='head_text' >    
          A varied education on your resume sums upto the value that you learning and background will bring to Job
        </Text>
          {itemFields &&
            itemFields.map((itm1, indx) => {
              return (
                <>
                  <Box >
                    <Flex>                       
                      <Accordion defaultIndex={[1]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
                        <AccordionItem>
                          <AccordionButton className='emp_his-accordian_head'  >
                            <Text  >
                              (Not specificy)
                            </Text><Spacer/>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel mt={5} >
                            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                              <GridItem>
                                <FormControl isInvalid={errors.items?.[indx]?.job_title}    >
                                <FormLabel fontSize="15px" color=" #808080"> Job Title </FormLabel>
                                  <Input
                                      type="text"                                          
                                      {...register(`items.${indx}.job_title`, {
                                          required: " job_title is Required"
                                      })}                                           
                                      className='emp_his-acc_input'
                                  />
                                  <FormErrorMessage>
                                      {errors.items?.[indx]?.job_title?.message}
                                  </FormErrorMessage>
                              </FormControl>
                              </GridItem>
                              <GridItem>
                              <FormControl isInvalid={errors.items?.[indx]?.employer}   >
                                  <FormLabel fontSize="15px" color=" #808080"> Employer </FormLabel>

                                  <Input
                                      type="text" 
                                      {...register(`items.${indx}.employer`, {
                                          required: "employer is Required"
                                      })}
                                      className='emp_his-acc_input' 
                                    
                                  />
                                  <FormErrorMessage>
                                      {errors.items?.[indx]?.employer?.message}
                                  </FormErrorMessage>
                              </FormControl>
                              </GridItem>
                              <GridItem>                                 
                                <FormControl isInvalid={errors.items?.[indx]?.date}    >
                                <FormLabel fontSize="15px" color=" #808080"> Date </FormLabel>
                                  <Input
                                      type="date"                                        
                                      {...register(`items.${indx}.date`, {
                                          required: "date is Required"
                                      })}                                           
                                      className='emp_his-acc_input'
                                  />
                                  <FormErrorMessage>
                                      {errors.items?.[indx]?.date?.message}
                                  </FormErrorMessage>
                                </FormControl>                                                                 
                              </GridItem>
                              <GridItem>
                              <FormControl isInvalid={errors.items?.[indx]?.city}   >
                                  <FormLabel fontSize="15px" color=" #808080"> City </FormLabel>
                                  <Input
                                      type="text"                                           
                                      {...register(`items.${indx}.city`, {
                                          required: "city is Required"
                                      })}
                                      className='emp_his-acc_input'                                         
                                  />
                                  <FormErrorMessage>
                                      {errors.items?.[indx]?.city?.message}
                                  </FormErrorMessage>
                              </FormControl>
                              </GridItem>                               
                            </Grid>
                            <Box mt={7}>
                              <FormLabel fontSize="15px" color="#808080" mb="0"> Description </FormLabel>
                              <EditorToolbar toolbarId={'t2'}/>          
                                <ReactQuill
                                  theme="snow"
                                  placeholder={"Write something awesome..."}
                                  modules={modules('t2')}
                                  formats={formats}
                                />   
                                <Text  fontSize="14px" color="#808080" mt={2} >Recruter Tips : Write 200+ character to increase interview chances  &nbsp; &nbsp;&nbsp;&nbsp; 0/200</Text>
                            </Box>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    
                      <Box >
                        <Button    className="btn-emp_his"
                          onClick={() => removeItem(indx)}
                          size="sm"
                          >
                          <DeleteIcon w={3} h={3}  />
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                </>
              )
            })
          }

        <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem()}  >
        <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
        <Text ml="15px"  color="#0099e6" >Add Education</Text>
        </Button>  
    </Box>
   </>
  )
}

export default Education