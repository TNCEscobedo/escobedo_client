import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { setResponse, clearModal } from "../../actions/modalActions";
import { connect } from "react-redux";

class ModalConfirm extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose(response) {
    this.props.setResponse(response);
    if(response === true) this.props.callback();
    else if(this.props.onClose) this.props.onClose();
    this.props.clearModal();
  }

  render() {
    return (
      <Modal id="modal-confirm" show={this.props.show} style={{borderRadius: 25, zIndex: 2500}} size={this.props.size ? this.props.size : "lg"} onHide={this.props.clear}>
        <Modal.Header>
          <Modal.Title className="pl-3 pr-3">{this.props.title ? <b>{this.props.title}</b> : "Precaución"}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#fff"}}>
          {this.props.component ? this.props.component : <p>{this.props.content}</p>}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#fff"}}className="text-right">
          <SecondaryButton size="sm" title="No" margin="0" styles={{paddingTop: 12, paddingBottom: 12}} handler={() => this.handleClose(false)} />
          <PrimaryButton size="sm" title="Sí" margin="0" styles={{width: 200}} handler={() => this.handleClose(true)} />
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  show: state.modal.show,
  content: state.modal.content,
  callback: state.modal.callback,
  title: state.modal.title,
  onClose: state.modal.onClose,
  component: state.modal.component
})

export default connect(mapStateToProps, { setResponse, clearModal })(ModalConfirm);