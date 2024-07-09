import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Form } from "./form";

export function ReferButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="px-4" onClick={() => setOpenModal(true)}>Refer Now</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Referral Form</Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
}
