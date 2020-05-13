import React from 'react';

import { Jumbotron } from 'react-bootstrap';

const Container = ({children}) => (
  <Jumbotron
    className='col-8 mx-auto'
    style={{ 
      padding: '40px, 50px',  
      paddingTop: '40px',
      marginTop: '30px',
      minHeight: '90vh' 
    }}
  >
    {children}
  </Jumbotron>
)

export default Container;