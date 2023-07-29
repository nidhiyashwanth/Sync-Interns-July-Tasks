import React,{ useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Divider,
  Box,
  Text
} from "@chakra-ui/react";
import ProfileDetails from "./components/ProfileDetails";
import ProfessionalSummary from "./components/ProfessionalSummary";
import EmploymentHistory from "./components/EmploymentHistory";
import Education from "./components/Education";
import SocialLink from "./components/web&SocialLink";
import AddSection from "./components/add_section/AddSection";
import Skill from "./components/Skill"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Tile from "./components/Title"
function EntryForm() {

  return (
    <>
      <DragDropContext>
        <div className="container" >
          <Card px={7}>
            <CardBody>             
                <Box>               
                  <Input htmlSize={4} width="auto" placeholder="Untitle" mx="40%"   />
                </Box>
                <Divider orientation="horizontal" my={10} />                
                <ProfileDetails/>
                <ProfessionalSummary/>
                <Divider orientation="horizontal" my={10} />
                <EmploymentHistory/>
                <Education/>
                <SocialLink/>
                <Skill/>
                <AddSection/>          
              </CardBody>            
          </Card>
        </div>
      </DragDropContext>
    </>
  );
}

export default EntryForm;
