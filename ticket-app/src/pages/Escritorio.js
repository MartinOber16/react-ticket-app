import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const Escritorio = () => {

    useHideMenu( false );

    const [ usuario ] = useState( getUsuarioStorage() );
    const history = useHistory();

    if( !usuario.agente || !usuario.escritorio ) {
        return <Redirect to="/ingresar" />
    }

    const salir = () => {
        localStorage.clear();
        history.replace('/ingresar');
    }

    const siguienteTicket = () => {
        console.log('siguienteTicket');
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={ 2 }>{ usuario.agente }</Title>
                    <Text>Usted esta trabajando en el escritorio: </Text>
                    <Text type="success">{ usuario.escritorio }</Text>
                </Col>
                <Col span={4} align="right">
                    <Button
                        shape="round" 
                        type="danger"
                        onClick={ salir }
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />
            
            <Row>
                <Col>
                    <Text>Esta atendiendo el ticket numero: </Text>
                    <Text 
                        style={{ fontSize: 30 }} 
                        type="danger"
                    > 
                    55 
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={ 18 } span={ 6 } align="right">
                    <Button
                        onClick={ siguienteTicket } 
                        shape="round" 
                        type="primary"
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}
