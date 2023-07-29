import React from 'react'
import { Editable, EditableInput, EditablePreview , ButtonGroup, IconButton, Flex
} from "@chakra-ui/react";
import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Tile() {
    /* Here's a custom control */
    function EditableControls({ isEditing, onSubmit, onCancel, onRequestEdit }) {
      return isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
       
          <EditIcon icon="close" onClick={onCancel} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <EditIcon size="sm" icon="edit" onClick={onRequestEdit} />
        </Flex>
      );
    }
  
    return (
      <Editable
      mx="40%" 
      width="auto"
        textAlign="center"
        defaultValue="Rasengan "
        fontSize="xl"
        isPreviewFocusable={true}
        submitOnBlur={true}
      >
        {props => (
          <>
            <EditablePreview />
            <EditableInput />
            <EditableControls {...props} />
          </>
        )}
      </Editable>
    );
  }

export default Tile;

