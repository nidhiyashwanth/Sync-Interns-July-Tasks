import React from 'react'
import  "../pages.css"
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


function  SocialLink() {

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
    <Box  mt={10}>
      <Heading as="h3" size="md" mb={2} >
            Websites & Social Links
        </Heading>
          <Text  className='head_text' >    
         You can add links to websites you want hiring managers to see! Perhaps It will be a link to your 
         portfolio. LinkedIn profile. or personal website. 
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
                                  <FormControl isInvalid={errors.items?.[indx]?.label}    >
                                  <FormLabel fontSize="15px" color=" #808080"> Label </FormLabel>
                                    <Input
                                        type="text"                                          
                                        {...register(`items.${indx}.label`, {
                                            required: " label is Required"
                                        })}                                           
                                        className='emp_his-acc_input'
                                    />
                                    <FormErrorMessage>
                                        {errors.items?.[indx]?.label?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                </GridItem>
                                <GridItem>
                                <FormControl isInvalid={errors.items?.[indx]?.link}   >
                                    <FormLabel fontSize="15px" color=" #808080"> Link </FormLabel>

                                    <Input
                                        type="text" 
                                        {...register(`items.${indx}.link`, {
                                            required: "link is Required"
                                        })}
                                        className='emp_his-acc_input' 
                                      
                                    />
                                    <FormErrorMessage>
                                        {errors.items?.[indx]?.link?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                </GridItem>                                                            
                              </Grid>                             
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
          <Text ml="15px"   color="#0099e6" >Add one more link</Text>
          </Button>  
      </Box>
   </>
  )
}

export default  SocialLink