import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Styles from './styles.module.scss'
import MyImage from '../../assets/image/ahn-yu-jin.jfif'
import clsx from "clsx";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useRef } from "react";
import Images from './img.json'


function ModalImageUrl(props) {
    const inputRef = useRef(null);

    function returnChangeValue() {
        Images.URL = inputRef.current.value;
    }

    return (
        <>
            <Modal {...props} centered size="lg">
                <Modal.Header className="fw-bold">Nhập URL hình ảnh</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" placeholder="Nhập URL hình ảnh" ref={inputRef}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>{returnChangeValue(); props.onHide()}}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>    
    )
}


function RenderInputField() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Row>
                <Col className="col-lg-8">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupFName">
                                <Form.Label for="fname">Họ và tên đệm</Form.Label>
                                <Form.Control type="text" id="fname" placeholder="Nhập họ và tên đệm" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupLName">
                                <Form.Label  for="lname">Tên</Form.Label>
                                <Form.Control type="text" id="fname" placeholder="Nhập tên" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupDOB">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control type="date" placeholder="Nhập ngày sinh" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupCCCD">
                                <Form.Label>Mã số CCCD</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số CCCD" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupTel">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="tel"placeholder="Nhập số điện thoại" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupCompanyName">
                                <Form.Label>Tên công ty</Form.Label>
                                <Form.Select defaultValue="Chọn công ty">
                                    <option>Chọn công ty...</option>
                                    <option>Starship Entertainment</option>
                                    <option>SM Entertainment</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupCompanyID">
                                <Form.Label>Mã số công ty</Form.Label>
                                <Form.Control type="text"placeholder="Nhập mã số công ty" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGroupAddress">
                                <Form.Label>Địa chỉ hiện nay</Form.Label>
                                <Form.Control type="text"placeholder="Nhập địa chỉ" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
                <Col className="mx-auto">
                    <div className='text-center'>
                        <img src='https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg' width='240px' className={clsx('mb-3', 'text-center')}></img>
                        <br/>
                        <Button className={clsx(Styles['green-btn'], 'text-center')} onClick = {() => setModalShow(true)}>
                            <i class="fa-solid fa-image me-2"></i>
                            Chọn ảnh
                        </Button>
                    </div>
                </Col>
            </Row>
            <Button className={clsx(Styles['green-btn'], 'mt-5')}>Lưu thông tin</Button>

            <ModalImageUrl show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
}

export default RenderInputField