import { Button, Form, Row, Col } from 'react-bootstrap';




const Formulario = () => {
   return (
      <Form>
         <Row>
            <Col md={6}>
               <Form.Group>
                  <Form.Label>
                     Nombre Bebida
                  </Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='Eje: Tequila'
                     name="nombre"
                  />

               </Form.Group>
            </Col>
            <Col md={6}>
               2
            </Col>
         </Row>
      </Form>
   );
};

export default Formulario;