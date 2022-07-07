import React from 'react';
import Card from 'react-bootstrap/Card';
import inscipcion from "./inscipcion.jpeg";

function Cards(){
    return ( 
        <Card>            
            <Card.Body>
                <Card.Title>Inscripción ciclo lectivo 2021 - Nivel Secundario</Card.Title>
                <Card.Img variant="top" src={inscipcion} />
                <Card.Text>
                Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
                </Card.Text>
            </Card.Body>
        </Card>             
     );
}
 
export default Cards;