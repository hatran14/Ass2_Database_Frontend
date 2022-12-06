import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Styles from './styles.module.scss'
import MyImage from '../../assets/image/ahn-yu-jin.jfif'
import clsx from "clsx";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Images from './img.json'
import axios from "axios";
import {getAllCompany, addNew} from '../../utils/API'


function ModalImageUrl(props) {
    const inputRef = useRef(null);
    const [url, setUrl] = useState('');


    function returnChangeValue() {
        Images.URL = inputRef.current.value;
    }

    const handleChangePhoto = (e) => {
        setUrl(e.target.value)
    }

    const handleClick = () => {
        props.setFormInput(prev => {
            return {...prev, photo: url}
        })
    }

    return (
        <>
            <Modal {...props} centered size="lg">
                <Modal.Header className="fw-bold" closeButton>Nhập URL hình ảnh</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" placeholder="Nhập URL hình ảnh" ref={inputRef} onChange={(e)=>{handleChangePhoto(e)}}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer  className="mt-3">
                    <Button onClick={() =>{handleClick(); props.onHide()}}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>    
    )
}


function RenderInputField() {
    const [modalShow, setModalShow] = useState(false);
    const [company, setCompany] = useState([]);
    const [validated, setValidated] = useState(false);
    const [formInput, setFormInput] = useState({
        fname: '',
        lname: '',
        dob: '',
        ssn: '',
        phone: '',
        cnumber: '',
        address: '',
        photo: '',
    })

    const handleChangeFname = (e) => {
        setFormInput(prev => {
            return {...prev, fname: e.target.value}
        })
    }

    const handleChangeLname = (e) => {
        setFormInput(prev => {
            return {...prev, lname: e.target.value}
        })
    }

    const handleChangeDOB = (e) => {
        setFormInput(prev => {
            return {...prev, dob: convertDate(e.target.value)}
        })
    }
    const handleChangeSSN = (e) => {
        setFormInput(prev => {
            return {...prev, ssn: e.target.value}
        })
    }
    const handleChangePhone = (e) => {
        setFormInput(prev => {
            return {...prev, phone: e.target.value}
        })
    }
    const handleChangeCnumber = (e) => {
        setFormInput(prev => {
            return {...prev, cnumber: e.target.value}
        })
    }
    const handleChangeAddress = (e) => {
        setFormInput(prev => {
            return {...prev, address: e.target.value}
        })
    }

    function convertDate(input) {
        const [year, month, day] =  input.split('-')
        return (`${day}-${month}-${year}`)
    }

    // console.log(formInput)


    const handleOnclickCreate = async() => {
        await axios.post(`${addNew}`,formInput);
        alert(formInput.dob + "đã lưu");
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    }

    useEffect(() => {
        (
            async() => {
                await axios.get(`${getAllCompany}`).then (res => {
                    setCompany(res.data.result)
                })
            }
        )();
    }, [])
    return (
        <>
            <Row>
                <Col className="col-lg-8">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupFName">
                                <Form.Label for="lname">Họ và tên đệm</Form.Label>
                                <Form.Control required type="text" id="lname" placeholder="Nhập họ và tên đệm" onChange={(e)=>{handleChangeLname(e)}}/>
                                <Form.Control.Feedback type="invalid">Họ và tên đệm là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupLName">
                                <Form.Label  for="fname">Tên</Form.Label>
                                <Form.Control required type="text" id="fname" placeholder="Nhập tên" onChange={(e)=>{handleChangeFname(e)}}/>
                                <Form.Control.Feedback type="invalid">Tên là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupDOB">
                                <Form.Label for='date'>Ngày sinh</Form.Label>
                                <Form.Control required type="date" placeholder="Nhập ngày sinh" onChange={(e)=>{handleChangeDOB(e)}}/>
                                <Form.Control.Feedback type="invalid">Ngày sinh là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupCCCD">
                                <Form.Label for='id'>Mã số CCCD</Form.Label>
                                <Form.Control required type="text" placeholder="Nhập số CCCD" onChange={(e)=>{handleChangeSSN(e)}}/>
                                <Form.Control.Feedback type="invalid">Mã số CCCD là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupTel">
                                <Form.Label for='tel'>Số điện thoại</Form.Label>
                                <Form.Control pattern="abc" required type="tel"placeholder="Nhập số điện thoại" onChange={(e)=>{handleChangePhone(e)}}/>
                                <Form.Control.Feedback type='invalid'>Số điện thoại là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupCompanyName">
                                <Form.Label>Tên công ty</Form.Label>
                                <Form.Control required as="select" type="select" defaultValue="Chọn công ty" onChange={(e)=>{handleChangeCnumber(e)}}>
                                    <option hidden value=''>Chọn công ty...</option>
                                    {company.map((e, index) => 
                                        <option key={index} value={e.cnumber}>{e.Name}</option>
                                    )}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Tên công ty là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupCompanyID">
                                <Form.Label>Mã số công ty</Form.Label>
                                <Form.Control required type="text"placeholder="Nhập mã số công ty" value={formInput.cnumber}/>
                                <Form.Control.Feedback type="invalid">Mã số công ty là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGroupAddress">
                                <Form.Label>Địa chỉ hiện nay</Form.Label>
                                <Form.Control required type="text"placeholder="Nhập địa chỉ" onChange={(e)=>{handleChangeAddress(e)}}/>
                                <Form.Control.Feedback type="invalid">Địa chỉ là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type='submit' className={clsx(Styles['green-btn'], 'mt-5')} onClick={handleOnclickCreate}>Lưu thông tin</Button>    
                    </Form>
                </Col>
                <Col className="mx-auto">
                    <div className='text-center'>
                        <img src={formInput.photo} width='240px'></img>
                        <br/>
                        <Button className={clsx(Styles['green-btn'], 'text-center')} onClick = {() => setModalShow(true)}>
                            <i class="fa-solid fa-image me-2"></i>
                            Chọn ảnh
                        </Button>
                    </div>
                </Col>
            </Row>

            <ModalImageUrl setFormInput={setFormInput} show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
}

export default RenderInputField