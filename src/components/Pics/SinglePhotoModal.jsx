import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SinglePhotoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Here comes the caption!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <img className="modalPhoto" src={this.props.imgSrc} alt="jdncjsndj" />
                    </Modal.Body>
                    
                </Modal>

                


            </div>
        );
    }
}

export default SinglePhotoModal;