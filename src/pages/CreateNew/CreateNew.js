import { Button, Col, InputGroup, Row } from "react-bootstrap";
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
import { validSSN, validPhone, validName } from "./Regex";
import { Link } from "react-router-dom";


// function ModalImageUrl(props) {
//     const inputRef = useRef(null);
//     const [url, setUrl] = useState('');


//     function returnChangeValue() {
//         Images.URL = inputRef.current.value;
//     }

//     const handleChangePhoto = (e) => {
//         setUrl(e.target.value)
//     }

//     const handleClick = () => {
//         props.setFormInput(prev => {
//             return {...prev, photo: url}
//         })
//     }

//     return (
//         <>
//             <Modal {...props} centered size="lg">
//                 <Modal.Header className="fw-bold" closeButton>Nhập URL hình ảnh</Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Control type="text" placeholder="Nhập URL hình ảnh" ref={inputRef} onChange={(e)=>{handleChangePhoto(e)}}/>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer  className="mt-3">
//                     <Button onClick={() =>{handleClick(); props.onHide()}}>Submit</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>    
//     )
// }


function RenderInputField() {
    const [modalShow, setModalShow] = useState(false);
    const [company, setCompany] = useState([]);
    const [formInput, setFormInput] = useState({});
    const [error, setErrors] = useState({});
    const [url, setUrl] = useState('');

    const validSSN = new RegExp();


    const setField = (field, value) => {
        setFormInput ({
            ...formInput,
            [field]: value
        })

        if (!!error[field])
        setErrors({
            ...error,
            [field]: null
        })
    }

    const validatedForm = () => {
        const {fname, lname, dob, ssn, phone, cnumber, address, photo} = formInput;
        const newError = {}
        
        if (!fname || fname === '')  newError.fname = 'Tên là bắt buộc';
        else if (validName.test(fname)) newError.fname = 'Tên phải là chữ cái';
        if (!lname || lname === '') newError.lname = 'Họ và tên đệm là bắt buộc';
        else if (validName.test(lname)) newError.lname = 'Họ và tên đệm phải là chữ cái'
        if (!dob || dob === '') newError.dob = 'Ngày sinh là bắt buộc';
        if (!ssn || ssn === '') newError.ssn = 'Mã số CCCD là bắt buộc';
        // else if (validSSN.test(ssn)) {newError.ssn = 'Mã số CCCD phải gồm 12 chữ số'}
        if (!phone || phone === '') newError.phone = 'Số điện thoại là bắt buộc';
        else if (validPhone.test(phone)) newError.phone = 'Số điện thoại phải gồm 10 chữ số'
        if (!cnumber || cnumber === '') newError.cnumber = 'Mã số công ty là bắt buộc';
        if (!address || address === '') newError.address = 'Địa chỉ là bắt buộc';
        if (!photo || photo === '') newError.photo = 'URL hình ảnh là bắt buộc';

        return newError;
    }

    const handleChangeFname = (e) => {
        setField('fname', e.target.value)
    }

    const handleChangeLname = (e) => {
        setField('lname', e.target.value)
    }

    const handleChangeDOB = (e) => {
        setField('dob', convertDate(e.target.value))
    }
    const handleChangeSSN = (e) => {
        setField('ssn', e.target.value)
    }
    const handleChangePhone = (e) => {
        setField('phone', e.target.value)
    }
    const handleChangeCnumber = (e) => {
        setField('cnumber', e.target.value)
    }
    const handleChangeAddress = (e) => {
        setField('address', e.target.value)
    }

    const handleChangePhoto = (e) => {
        setUrl(e.target.value)
    }

    const handleClickChangePhoto = () => {
        setField('photo', url)
    }

    function convertDate(input) {
        const [year, month, day] =  input.split('-')
        return (`${day}-${month}-${year}`)
    }

    // console.log(formInput)


    const handleOnclickCreate = async() => {
        await axios.post(`${addNew}`,formInput);
        
    }

    const handleSubmit = (e) => {

        const formErrors = validatedForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            handleOnclickCreate();
            alert('Đã lưu thông tin');
        }
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
                <Link to='/list-trainee'>
                    <Button className={Styles['green-btn']}>Quay về danh sách</Button>
                </Link>
            </Row>
            <Row className="mt-5">
                <Col className="col-lg-8">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="lname">
                                <Form.Label for="lname">Họ và tên đệm</Form.Label>
                                <Form.Control
                                    required 
                                    type="text"
                                    id="lname"
                                    value={formInput.lname} 
                                    isInvalid={!!error.lname}
                                    placeholder="Nhập họ và tên đệm" 
                                    onChange={(e)=>{handleChangeLname(e)}}/>
                                <Form.Control.Feedback type="invalid">{error.lname}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="fname">
                                <Form.Label  for="fname">Tên</Form.Label>
                                <Form.Control 
                                    required 
                                    type="text" 
                                    id="fname" 
                                    value={formInput.fname} 
                                    isInvalid={!!error.fname}
                                    placeholder="Nhập tên" 
                                    onChange={(e)=>{handleChangeFname(e)}}/>
                                <Form.Control.Feedback type="invalid">{error.fname}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dob">
                                <Form.Label for='date'>Ngày sinh</Form.Label>
                                <Form.Control
                                    required 
                                    type="date" 
                                    isInvalid={!!error.dob}
                                    placeholder="Nhập ngày sinh" 
                                    onChange={(e)=>{handleChangeDOB(e)}}/>
                                <Form.Control.Feedback type="invalid">{error.dob}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="ssn">
                                <Form.Label for='id'>Mã số CCCD</Form.Label>
                                <Form.Control 
                                    required 
                                    type="ssn" 
                                    placeholder="Nhập số CCCD" 
                                    value={formInput.ssn} 
                                    isInvalid={!!error.ssn}
                                    onChange={(e)=>{handleChangeSSN(e)}}/>
                                <Form.Control.Feedback type="invalid">{error.ssn}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="phone">
                                <Form.Label for='tel'>Số điện thoại</Form.Label>
                                <Form.Control 
                                    required
                                    type="tel"
                                    value={formInput.phone} 
                                    isInvalid={!!error.phone}
                                    placeholder="Nhập số điện thoại" 
                                    onChange={(e)=>{handleChangePhone(e)}}/>
                                <Form.Control.Feedback type='invalid'>{error.phone}</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="cname">
                                <Form.Label>Tên công ty</Form.Label>
                                <Form.Control 
                                    required 
                                    as="select" 
                                    type="select" 
                                    defaultValue="Chọn công ty" 
                                    isInvalid={!!error.cnumber}
                                    onChange={(e)=>{handleChangeCnumber(e)}}>
                                    <option hidden value=''>Chọn công ty...</option>
                                    {company.map((e, index) => 
                                        <option key={index} value={e.cnumber}>{e.Name}</option>
                                    )}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Tên công ty là bắt buộc</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="cnumber">
                                <Form.Label>Mã số công ty</Form.Label>
                                <Form.Control
                                    required 
                                    readOnly
                                    type="text"
                                    value={formInput.cnumber} 
                                    isInvalid={!!error.cnumber}
                                    placeholder="Nhập mã số công ty" />
                                <Form.Control.Feedback type="invalid">{error.cnumber}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3"> 
                            <Form.Group as={Col} controlId="address">
                                <Form.Label>Địa chỉ hiện nay</Form.Label>
                                <Form.Control 
                                    required 
                                    type="text"
                                    value={formInput.address} 
                                    isInvalid={!!error.address}
                                    placeholder="Nhập địa chỉ" 
                                    onChange={(e)=>{handleChangeAddress(e)}}/>
                                <Form.Control.Feedback type="invalid">{error.address}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label>URL hình ảnh</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    isInvalid={!!error.photo}
                                    placeholder='Nhập URL hình ảnh'
                                    onChange={(e)=>{handleChangePhoto(e)}}    
                                />
                                <Button className={Styles['green-btn']} onClick={()=>{handleClickChangePhoto()}}>Enter</Button>
                                <Form.Control.Feedback type="invalid">{error.photo}</Form.Control.Feedback>
                            </InputGroup>
                        </Row>
                        <Button type='submit' className={clsx(Styles['green-btn'], 'mt-3')} onClick={(e) => {handleSubmit(e)}}>Lưu thông tin</Button>    
                    </Form>
                </Col>
                <Col className="mx-auto">
                    <div className='text-center'>
                        <img src={formInput.photo} width='240px'></img>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RenderInputField