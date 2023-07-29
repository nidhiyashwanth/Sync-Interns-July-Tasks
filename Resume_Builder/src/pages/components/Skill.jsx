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


function Skill() {

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
        <Heading as="h3" size="md" mb={10}>
            Skills  
        </Heading>
        <Text className='head_text' >    
        Choose 5 important skills that show you fit the position. Makke sure they match the key Skills
        mentioned in the job listing (especially when applying via an online system).
        </Text>
            {itemFields   &&
            itemFields.map((item,index) => {
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
                                <FormControl isInvalid={errors.items?.[index]?.skill}    >
                                <FormLabel fontSize="15px" color=" #808080"> Skill </FormLabel>
                                    <Input
                                        type="text"                                          
                                        {...register(`items.${index}.skill`, {
                                            required: " skill is Required"
                                        })}                                           
                                        className='emp_his-acc_input'
                                    />
                                    <FormErrorMessage>
                                        {errors.items?.[index]?.skill?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                </GridItem>
                                <GridItem>
                                <FormControl isInvalid={errors.items?.[index]?.level}   >
                                    <FormLabel fontSize="15px" color=" #808080"> Level </FormLabel>

                                    <Input
                                        type="text" 
                                        {...register(`items.${index}.level`, {
                                            required: "level is Required"
                                        })}
                                        className='emp_his-acc_input' 
                                    
                                    />
                                    <FormErrorMessage>
                                        {errors.items?.[index]?.level?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                </GridItem>                                                                
                            </Grid>
                            
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
                    
                        <Box >
                        <Button    className="btn-emp_his"
                            onClick={() => removeItem(index)}
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
            <Text ml="15px"  color="#0099e6" >Add one more skill</Text>
            </Button>  
        </Box>
        </>
    )

}

export default Skill