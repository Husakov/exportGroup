import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const Toast = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert className='ml-3' color="secondary" isOpen={visible} toggle={onDismiss}>
      {props.info}
    </Alert>
  );
}

export default Toast;