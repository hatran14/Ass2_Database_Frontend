import MyImage from '../../../assets/image/ahn-yu-jin.jfif'
import { Button, Col, Row } from 'react-bootstrap'
import DetailStyle from './detail.module.scss'
import { Modal } from 'react-bootstrap'

function RenderImg() {
    return(
        <div className='text-center'>
            <img src={MyImage} width='150px'></img>
            <div className={DetailStyle.title}>Ahn Yu Jin</div>
        </div>
    )
}

function RenderInfo() {
    return (
        <>
            <p>Ngày sinh: 01/09/2003</p>
            <p>Số điện thoại: 0339770064</p>
            <p>Số CCCD: 056700004972</p>
            <p>Địa chỉ: Seoul, Hàn Quốc</p>
            <p>Số mùa tham gia: 2</p>
            <p>Thành tích cao nhất: Tập 4 - Mùa 2020</p>
        </>
    )
}

export default function RenderDetail({detail}) {
    return (
        <>
            <Row>
                <Col>
                    <RenderImg/>
                </Col>
                <Col>
                    <RenderInfo detail={detail}/>
                </Col>
            </Row>
        </>    
    )
}