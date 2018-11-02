import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from 'reactstrap';
import PropTypes from  'prop-types'

const AddBoard = ({modal, closeModalCreateBoard, addBoard})=> {
  let titleBoard

  return (
  <div>
    <form>
    <Modal toggle={closeModalCreateBoard} isOpen={modal}  >
        <ModalHeader toggle={closeModalCreateBoard}>
        <input className="mb-2 form-control" placeholder="Add a title to the board"  ref={node => titleBoard = node} />
        </ModalHeader>
        <ModalBody className="container-fluid">
        <Input type="select">
          <option> Mettre les teams </option>
        </Input>
        </ModalBody>
        <ModalFooter>
          <Button block color="success" type="submit" onClick={e => {e.preventDefault()
            addBoard(titleBoard.value)
            titleBoard.value = ''
          }}>Create board</Button>
          <Button color="danger" onClick={closeModalCreateBoard}>Cancel</Button>
        </ModalFooter>
   </Modal>
   </form>
</div>
  );
}

AddBoard.propTypes={
    closeModalCreateBoard: PropTypes.func.isRequired,
    modal: PropTypes.bool,
    addBoard: PropTypes.func.isRequired,
  
}
export default AddBoard