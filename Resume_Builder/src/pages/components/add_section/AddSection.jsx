import React from 'react'
import "../../pages.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../toolbar/Editor.css"
import EditorToolbar, { modules, formats } from "../toolbar/EditorToolbar"
import {
  Text,
  Box,
  Heading,
  Button,
   FormControl,Input, FormErrorMessage
  ,Grid,GridItem, FormLabel,Accordion,AccordionItem,AccordionButton
  ,AccordionIcon,AccordionPanel,Spacer,Flex,Textarea
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";


function AddSection() {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    watch,
  } = useForm({ mode: "onChange" });

// Custom Section
  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "items",
  });
  const {
    fields: itemFields1,
    append: appendItem1,
    remove: removeItem1,
  } = useFieldArray({
    control,
    name: "item",
  });
// --------------------------

// Course Section
  const {
    fields: itemFields2,
    append: appendItem2,
    remove: removeItem2,
  } = useFieldArray({
    control,
    name: "courses",
  });
  const {
    fields: itemFields3,
    append: appendItem3,
    remove: removeItem3,
  } = useFieldArray({
    control,
    name: "course",
  });
  if (itemFields3.length === 0) {
    appendItem3();
  }

// Extra-curricular Activity
  const {
    fields: itemFields4,
    append: appendItem4,
    remove: removeItem4,
  } = useFieldArray({
    control,
    name: "ecas",
  });
  const {
    fields: itemFields5,
    append: appendItem5,
    remove: removeItem5,
  } = useFieldArray({
    control,
    name: "eca",
  });
  if (itemFields5.length === 0) {
    appendItem5();
  }


//  Internship
  const {
    fields: itemFields6,
    append: appendItem6,
    remove: removeItem6,
  } = useFieldArray({
    control,
    name: "interns",
  });
  const {
    fields: itemFields7,
    append: appendItem7,
    remove: removeItem7,
  } = useFieldArray({
    control,
    name: "intern",
  });
  if (itemFields7.length === 0) {
    appendItem7();
  }


//  Hobbies
  const {
    fields: itemFields8,
    append: appendItem8,
    remove: removeItem8,
  } = useFieldArray({
    control,
    name: "hobby",
  });
 

//  Language 
  const {
    fields: itemFields9,
    append: appendItem9,
    remove: removeItem9,
  } = useFieldArray({
    control,
    name: "langs",
  });
  const {
    fields: itemFields10,
    append: appendItem10,
    remove: removeItem10,
  } = useFieldArray({
    control,
    name: "lang",
  });
  if (itemFields10.length === 0) {
    appendItem10();
  }


//  Reference 
  const {
    fields: itemFields11,
    append: appendItem11,
    remove: removeItem11,
  } = useFieldArray({
    control,
    name: "refs",
  });
  const {
    fields: itemFields12,
    append: appendItem12,
    remove: removeItem12,
  } = useFieldArray({
    control,
    name: "ref",
  });
  if (itemFields12.length === 0) {
    appendItem12();
  }


  return (
    <>
    {/* Custom Section  */}
      <Box>
        {itemFields1 &&
          itemFields1.map((item1, index1) => {
            return(
              <>
                <Box mt={10}   >
                  <Heading as="h3" size="md" mb={2}>
                    Untitle <DeleteIcon className='del_btn'  onClick={() => removeItem1(index1)} />
                  </Heading>
                
                    {itemFields &&
                      itemFields.map((item, index) => {
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
                                          <FormControl isInvalid={errors.items?.[index]?.etc}    >
                                          <FormLabel fontSize="15px" color=" #808080"> Name, job title, book etc.. </FormLabel>
                                            <Input
                                                type="text"                                          
                                                {...register(`items.${index}.etc`, {
                                                    required: "Activity name is Required"
                                                })}                                           
                                                className='emp_his-acc_input'
                                            />
                                            <FormErrorMessage>
                                                {errors.items?.[index]?.etc?.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        </GridItem>
                                        <GridItem>
                                        <FormControl isInvalid={errors.items?.[index]?.city1}   >
                                            <FormLabel fontSize="15px" color=" #808080"> City </FormLabel>

                                            <Input
                                                type="text" 
                                                {...register(`items.${index}.city1`, {
                                                    required: "city1 is Required"
                                                })}
                                                className='emp_his-acc_input' 
                                              
                                            />
                                            <FormErrorMessage>
                                                {errors.items?.[index]?.city1?.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        </GridItem>
                                        <GridItem>                                 
                                          <FormControl isInvalid={errors.items?.[index]?.date}    >
                                          <FormLabel fontSize="15px" color=" #808080"> Date </FormLabel>
                                            <Input
                                                type="date"                                        
                                                {...register(`items.${index}.date`, {
                                                    required: "date is Required"
                                                })}                                           
                                                className='emp_his-acc_input'
                                            />
                                            <FormErrorMessage>
                                                {errors.items?.[index]?.date?.message}
                                            </FormErrorMessage>
                                          </FormControl>                                                                 
                                        </GridItem>
                                                                  
                                      </Grid>
                                      <Box mt={7}>
                                        <FormLabel fontSize="15px" color="#808080" mb="-10px"> Description </FormLabel>
                                        <EditorToolbar toolbarId={'t2'}/>          
                                          <ReactQuill
                                            theme="snow"
                                            placeholder={"Write something awesome..."}
                                            modules={modules('t2')}
                                            formats={formats}
                                          />   
                                      </Box>
                                    </AccordionPanel>
                                  </AccordionItem>
                                </Accordion>
                              
                                <Box >
                                  <Button    className="btn-emp_his"
                                    onClick={() => removeItem(index1)}
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
                  <Text ml="15px"  color="#0099e6" >Add item</Text>
                  </Button>  
                </Box>
              </>
            )
          })
        }
      </Box>
    {/* --------------------------------------------- */}
    {/* --------------------------------------------- */}

    {/* Course Section */}    
      <Box>
        {itemFields2 &&
          itemFields2.map((item2, index2) => {
            return(
              <>
                <Box mt={10}>
                  <Heading as="h3" size="md" mb={10}>
                    Course <DeleteIcon  className='del_btn' onClick={() => removeItem2(index2)} />
                  </Heading>
                  {itemFields3 &&
                    itemFields3.map((itme3, index3) => {
                      return (
                        <>
                          <Box >
                            <Flex>                       
                              <Accordion defaultIndex={[0]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
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
                                        <FormControl isInvalid={errors.course?.[index3]?.course_name}    >
                                        <FormLabel fontSize="15px" color=" #808080">  Course Name</FormLabel>
                                          <Input
                                              type="text"                                          
                                              {...register(`course.${index3}.course_name`, {
                                                  required: " course_name is Required"
                                              })}                                           
                                              className='emp_his-acc_input'
                                          />
                                          <FormErrorMessage>
                                              {errors.course?.[index3]?.course_name?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                      <GridItem>
                                      <FormControl isInvalid={errors.course?.[index3]?.institute}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Institute </FormLabel>

                                          <Input
                                              type="text" 
                                              {...register(`course.${index3}.institute`, {
                                                  required: "institute is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.course?.[index3]?.institute?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                      <GridItem>                                 
                                        <FormControl isInvalid={errors.course?.[index3]?.date3}    >
                                        <FormLabel fontSize="15px" color=" #808080"> Date </FormLabel>
                                          <Input
                                              type="date"                                        
                                              {...register(`course.${index3}.date3`, {
                                                  required: "date is Required"
                                              })}                                           
                                              className='emp_his-acc_input'
                                          />
                                          <FormErrorMessage>
                                              {errors.course?.[index3]?.date3?.message}
                                          </FormErrorMessage>
                                        </FormControl>                                                                 
                                      </GridItem>
                                                                
                                    </Grid>
                                    
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            
                              <Box >
                                <Button    className="btn-emp_his"
                                  onClick={() => removeItem3(index3)}
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
                  <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem3()}  >
                    <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
                    <Text ml="15px"  color="#0099e6" >Add one more course</Text>
                    </Button>  
                </Box>
              </>
            )
          })
        }
      </Box>
    {/* --------------------------------------------- */}
    {/* --------------------------------------------- */}

    {/* Extra-curricular Activity*/}    
      <Box>
      {itemFields4 &&
        itemFields4.map((item4,index4) => {
          return(
            <>
              <Box mt={10}>
                <Heading as="h3" size="md" mb={10}>
                  Extra-curricular Activity <DeleteIcon className='del_btn' onClick={() => removeItem4(index4)} />
                </Heading>
                {itemFields5 &&
                  itemFields5.map((item5,index5) => {
                    return (                     
                      <>
                        <Box >
                          <Flex>                       
                            <Accordion defaultIndex={[0]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
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
                                      <FormControl isInvalid={errors.eca?.[index5]?.etc}    >
                                      <FormLabel fontSize="15px" color=" #808080">  Function Title</FormLabel>
                                        <Input
                                            type="text"                                          
                                            {...register(`eca.${index5}.etc`, {
                                                required: "Activity name is Required"
                                            })}                                           
                                            className='emp_his-acc_input'
                                        />
                                        <FormErrorMessage>
                                            {errors.eca?.[index5]?.etc?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    </GridItem>
                                    <GridItem>
                                      <FormControl isInvalid={errors.eca?.[index5]?.employer}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Employer </FormLabel>

                                          <Input
                                              type="text" 
                                              {...register(`eca.${index5}.employer`, {
                                                  required: "employer is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.eca?.[index5]?.employer?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                  
                                    <GridItem>                                 
                                      <FormControl isInvalid={errors.eca?.[index5]?.date5}    >
                                      <FormLabel fontSize="15px" color=" #808080"> Date </FormLabel>
                                        <Input
                                            type="date"                                        
                                            {...register(`eca.${index5}.date5`, {
                                                required: "date is Required"
                                            })}                                           
                                            className='emp_his-acc_input'
                                        />
                                        <FormErrorMessage>
                                            {errors.eca?.[index5]?.date5?.message}
                                        </FormErrorMessage>
                                      </FormControl>                                                                 
                                    </GridItem>
                                    <GridItem>
                                    <FormControl isInvalid={errors.eca?.[index5]?.city5}   >
                                        <FormLabel fontSize="15px" color=" #808080"> City </FormLabel>

                                        <Input
                                            type="text" 
                                            {...register(`eca.${index5}.city5`, {
                                                required: "city is Required"
                                            })}
                                            className='emp_his-acc_input' 
                                          
                                        />
                                        <FormErrorMessage>
                                            {errors.eca?.[index5]?.city5?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    </GridItem>                            
                                  </Grid>
                                  <Box mt={7}>
                                    <FormLabel fontSize="15px" color="#808080" mb="-10px"> Description </FormLabel>
                                    <EditorToolbar toolbarId={'t5'}/>          
                                      <ReactQuill
                                        theme="snow"
                                        placeholder={"Write something awesome..."}
                                        modules={modules('t5')}
                                        formats={formats}
                                      />   
                                  </Box>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          
                            <Box >
                              <Button    className="btn-emp_his"
                                onClick={() => removeItem5(index5)}
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
                <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem5()}  >
                  <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
                  <Text ml="15px"  color="#0099e6" >Add one more activity</Text>
                  </Button>  
              </Box>
            </>
          )
        })
      }
      </Box>
    {/* --------------------------------------------- */}
    {/* --------------------------------------------- */}

    {/* Internship  Section */}    
      <Box>
      {itemFields6 &&
        itemFields6.map((item6,index6) => {
          return(
            <>
              <Box mt={10}>
                <Heading as="h3" size="md" mb={10}>
                Internship <DeleteIcon className='del_btn' onClick={() => removeItem6(index6)} />
                </Heading>
                {itemFields7 &&
                  itemFields7.map((item7,index7) => {
                    return (                     
                      <>
                        <Box >
                          <Flex>                       
                            <Accordion defaultIndex={[0]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
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
                                      <FormControl isInvalid={errors.intern?.[index7]?.job_title7}    >
                                      <FormLabel fontSize="15px" color=" #808080">  job Title </FormLabel>
                                        <Input
                                            type="text"                                          
                                            {...register(`intern.${index7}.job_title7`, {
                                                required: "Activity name is Required"
                                            })}                                           
                                            className='emp_his-acc_input'
                                        />
                                        <FormErrorMessage>
                                            {errors.intern?.[index7]?.job_title7?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    </GridItem>
                                    <GridItem>
                                      <FormControl isInvalid={errors.intern?.[index7]?.employer7}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Employer </FormLabel>

                                          <Input
                                              type="text" 
                                              {...register(`intern.${index7}.employer7`, {
                                                  required: "employer is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.intern?.[index7]?.employer7?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                  
                                    <GridItem>                                 
                                      <FormControl isInvalid={errors.intern?.[index7]?.date7}    >
                                      <FormLabel fontSize="15px" color=" #808080"> Date </FormLabel>
                                        <Input
                                            type="date"                                        
                                            {...register(`intern.${index7}.date7`, {
                                                required: "date is Required"
                                            })}                                           
                                            className='emp_his-acc_input'
                                        />
                                        <FormErrorMessage>
                                            {errors.intern?.[index7]?.date7?.message}
                                        </FormErrorMessage>
                                      </FormControl>                                                                 
                                    </GridItem>
                                    <GridItem>
                                    <FormControl isInvalid={errors.intern?.[index7]?.city7}   >
                                        <FormLabel fontSize="15px" color=" #808080"> City </FormLabel>

                                        <Input
                                            type="text" 
                                            {...register(`intern.${index7}.city7`, {
                                                required: "city is Required"
                                            })}
                                            className='emp_his-acc_input' 
                                          
                                        />
                                        <FormErrorMessage>
                                            {errors.intern?.[index7]?.city7?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    </GridItem>                            
                                  </Grid>
                                  <Box mt={7}>
                                    <FormLabel fontSize="15px" color="#808080" mb="-10px"> Description </FormLabel>
                                    <EditorToolbar toolbarId={'t7'}/>          
                                      <ReactQuill
                                        theme="snow"
                                        placeholder={"Write something awesome..."}
                                        modules={modules('t7')}
                                        formats={formats}
                                      />   
                                  </Box>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          
                            <Box >
                              <Button    className="btn-emp_his"
                                onClick={() => removeItem7(index7)}
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
                <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem7()}  >
                  <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
                  <Text ml="15px"  color="#0099e6" >Add one more internship</Text>
                  </Button>  
              </Box>
            </>
          )
        })
      }
      </Box>
    {/* -------------------------------------------- */}
    {/* -------------------------------------------- */}

    {/* Hobbies Section */}    
      <Box>
      {itemFields8 &&
        itemFields8.map((item8,index8) => {
          return(
            <>
              <Box mt={10}>
                <Heading as="h3" size="md" mb={5}>
                Hobbies <DeleteIcon className='del_btn' onClick={() => removeItem8(index8)} />
                </Heading>
                <Box>
                  <FormControl isInvalid={errors.hobby?.[index8]?.hobbies}    >
                  <FormLabel fontSize="15px" color=" #808080">  What do you like ?</FormLabel>
                    <Textarea
                        type="text"                                          
                        {...register(`hobby.${index8}.hobbies`, {
                            required: "hobbies is Required"
                        })}                                           
                        className='emp_his-acc_textarea'
                        placeholder="e.g.Skiing,Skydiving,Painting"
                    />
                    <FormErrorMessage>
                        {errors.hobby?.[index8]?.hobbies?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </Box>

            </>
          )
        })
      }
      </Box>
    {/* -------------------------------------------- */}
    {/* -------------------------------------------- */}

    {/* Langage Section */}    
      <Box>
        {itemFields9 &&
          itemFields9.map((item9,index9) => {
            return(
              <>
                <Box mt={10}>
                  <Heading as="h3" size="md" mb={10}>
                    Language <DeleteIcon  className='del_btn' onClick={() => removeItem9(index9)} />
                  </Heading>
                  {itemFields10 &&
                    itemFields10.map((item10,index10) => {
                      return (
                        <>
                          <Box >
                            <Flex>                       
                              <Accordion defaultIndex={[0]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
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
                                        <FormControl isInvalid={errors.lang?.[index10]?.language}    >
                                        <FormLabel fontSize="15px" color=" #808080"> Language </FormLabel>
                                          <Input
                                              type="text"                                          
                                              {...register(`lang.${index10}.language`, {
                                                  required: " language is Required"
                                              })}                                           
                                              className='emp_his-acc_input'
                                          />
                                          <FormErrorMessage>
                                              {errors.lang?.[index10]?.language?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                      <GridItem>
                                      <FormControl isInvalid={errors.lang?.[index10]?.level}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Level </FormLabel>

                                          <Input
                                              type="text" 
                                              {...register(`lang.${index10}.level`, {
                                                  required: "level is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.lang?.[index10]?.level?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>                                                                
                                    </Grid>
                                    
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            
                              <Box >
                                <Button    className="btn-emp_his"
                                  onClick={() => removeItem10(index10)}
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
                  <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem10()}  >
                    <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
                    <Text ml="15px"  color="#0099e6" >Add one more language</Text>
                    </Button>  
                </Box>
              </>
            )
          })
        }
      </Box>
    {/* --------------------------------------------- */}
    {/* --------------------------------------------- */}

    {/* Reference Section */}    
      <Box>
        {itemFields11 &&
          itemFields11.map((item11,index11) => {
            return(
              <>
                <Box mt={10}>
                  <Heading as="h3" size="md" mb={10}>
                    Reference <DeleteIcon  className='del_btn' onClick={() => removeItem11(index11)} />
                  </Heading>
                  {itemFields12 &&
                    itemFields12.map((item12,index12) => {
                      return (
                        <>
                          <Box >
                            <Flex>                       
                              <Accordion defaultIndex={[0]} allowMultiple width="100%" className="emp_his-accordian" mb={6}>
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
                                        <FormControl isInvalid={errors.ref?.[index12]?.full_name}    >
                                        <FormLabel fontSize="15px" color=" #808080"> Referent's Full Name </FormLabel>
                                          <Input
                                              type="text"                                          
                                              {...register(`ref.${index12}.full_name`, {
                                                  required: "Full Name is Required"
                                              })}                                           
                                              className='emp_his-acc_input'
                                          />
                                          <FormErrorMessage>
                                              {errors.ref?.[index12]?.full_name?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                      <GridItem>
                                      <FormControl isInvalid={errors.ref?.[index12]?.company}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Company </FormLabel>

                                          <Input
                                              type="text" 
                                              {...register(`ref.${index12}.company`, {
                                                  required: "Company is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.ref?.[index12]?.company?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>    
                                      <GridItem>
                                        <FormControl isInvalid={errors.ref?.[index12]?.numbers}    >
                                        <FormLabel fontSize="15px" color=" #808080"> Phone  </FormLabel>
                                          <Input
                                              type="number"                                          
                                              {...register(`ref.${index12}.numbers`, {
                                                  required: "Number is Required"
                                              })}                                           
                                              className='emp_his-acc_input'
                                          />
                                          <FormErrorMessage>
                                              {errors.ref?.[index12]?.numbers?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>
                                      <GridItem>
                                      <FormControl isInvalid={errors.ref?.[index12]?.emailId}   >
                                          <FormLabel fontSize="15px" color=" #808080"> Email </FormLabel>

                                          <Input
                                              type="email" 
                                              {...register(`ref.${index12}.emailId`, {
                                                  required: "Email is Required"
                                              })}
                                              className='emp_his-acc_input' 
                                            
                                          />
                                          <FormErrorMessage>
                                              {errors.ref?.[index12]?.emailId?.message}
                                          </FormErrorMessage>
                                      </FormControl>
                                      </GridItem>                                                               
                                    </Grid>                                    
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            
                              <Box >
                                <Button    className="btn-emp_his"
                                  onClick={() => removeItem12(index12)}
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
                  <Button  className='emp_button'  size="sm" borderStyle="none"  onClick={() => appendItem12()}  >
                    <FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
                    <Text ml="15px"  color="#0099e6" >Add one more reference</Text>
                    </Button>  
                </Box>
              </>
            )
          })
        }
      </Box>
    {/* --------------------------------------------- */}
    {/* --------------------------------------------- */}


    <Heading as="h3" size="md" mb={5}  mt={10}>
      Add Section
    </Heading>  
 
    <Box className='icon_box' >
      <Box className='custom_icon icn_hov'  onClick={() => appendItem1()}  >
      Customer Section  
      </Box>

      <Box className='course_icon icn_hov'  onClick={() => appendItem2()}  >
      Courses
      </Box>

      <Box className='eca_icon icn_hov' onClick={() => appendItem4()}    >
        Extra-curricular Activity
      </Box>

      <Box className='intern_icon icn_hov' onClick={() => appendItem6()} >
      Internship
      </Box>

      <Box className='hobby_icon icn_hov' onClick={() => appendItem8()}>
        Hobbies
      </Box>

      <Box className='lang_icon icn_hov' onClick={() => appendItem9()} >
      Language
      </Box>

      <Box className='ref_icon icn_hov'  onClick={() => appendItem11()}>
      Reference
      </Box>        
    </Box>
    
   </>
  )
}

export default AddSection