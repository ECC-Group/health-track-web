import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';

const ToastComponent = ({
 onClose, show, title, message,
}: any) => (

  <ToastContainer position="bottom-center" className="p-3">
    <Toast
        onClose={onClose}
        show={show}
        delay={3000}
        autohide
        style={{
            backgroundColor: '#f8d7da',
            zIndex: 9999,

        }}
    >
      <Toast.Header style={{
            backgroundColor: '#f8d7da',
        }}
      >
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
    <Toast.Body>{message}</Toast.Body>
    </Toast>
  </ToastContainer>
    );

export default ToastComponent;
