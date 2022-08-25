
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function HeartHealth({ snackHealth }) {

  // console.log("LINE 6:",snackHealth.fiber)

  const [isOpen, setIsOpen] = useState(true);

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  const hideModal = () => {
    setIsOpen(false);
  };


  return (

    <>
    <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Health Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {snackHealth.fiber > 5 || snackHealth.protein > 5 || snackHealth.added_sugar < 5   ? 'This snack is UNHEALTHY' : 'This snack is HEALTHY'}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>THANK YOU</button>
          {/* <button>Save</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeartHealth;
