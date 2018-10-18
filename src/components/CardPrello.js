import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';

class CardPrello extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        }
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

  render() {
    console.log(this.props)
      return(
    <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.card.title}</ModalHeader>
        <ModalBody>
          {this.props.card.description}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <Card outline className="mb-1" color="secondary" onClick={this.toggle}>
              <CardBody>
                <CardTitle>{this.props.card.title}</CardTitle>
              </CardBody>
            </Card>
          </div>
        )}
      </Draggable>
    </div>);
  }
}
export default CardPrello