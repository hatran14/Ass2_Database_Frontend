import MyImage from '../../../assets/image/ahn-yu-jin.jfif'
import { Button, Col, Row } from 'react-bootstrap'
import DetailStyle from './detail.module.scss'
import { Modal } from 'react-bootstrap'

function RenderImg({trainee}) {
    return(
        <div className='text-center'>
            <img src={trainee.photo} width='150px'></img>
            <div className={DetailStyle.title}>{trainee.fullname}</div>
            {console.log(trainee.photo)}
        </div>
    )
}

function RenderInfo({trainee}) {
    return (
        <>
            <p>Số điện thoại: {trainee.phone}</p>
            <p>Số CCCD: {trainee.SSN}</p>
            <p>Địa chỉ: {trainee.address}</p>
            <p>Số mùa tham gia: {trainee.number_of_seasons_participating}</p>
            <p>Thành tích cao nhất: Tập 4 - Mùa 2020</p>
        </>
    )
}

export default function RenderDetail({trainee}) {
    return (
        <>
            <Row>
                <Col>
                    <RenderImg trainee={trainee}/>
                    {console.log(trainee.phone)}
                </Col>
                <Col>
                    <RenderInfo trainee={trainee}/>
                </Col>
            </Row>
        </>    
    )
}