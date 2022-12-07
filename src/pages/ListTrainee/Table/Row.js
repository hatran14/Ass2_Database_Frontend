import { useState, useEffect } from "react";
import { Button, Row, Modal, InputGroup, Form, Table } from "react-bootstrap";
import ButtonStyles from './button.module.scss';
import TableStyles from './table.module.scss'
import PopupDetail from '../PopupDetail/PopupDetail';
import moment from "moment/moment";
import { getAllYearBySSN, getTraineeResultByYear } from "../../../utils/API";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thông tin cá nhân
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopupDetail trainee={props.trainee}/>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button className={ButtonStyles['green-btn']}>
                <i class="fa-solid fa-pen-to-square me-2"></i>
                Chỉnh sửa
            </Button>
        </Modal.Footer> */}
        {/* {console.log(trainee.phone)} */}
      </Modal>
    );
  }  

function PopupResult(props) {
    const [result, setResult] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(() => {
        (
            async() => {
                await axios.get(`${getAllYearBySSN}/${props.trainee.SSN}`).then (res => {
                    setYears(res.data.result)
                })
            }
        )();
    }, [])

    const handleSelectYear = async(e) => {
        console.log(props.trainee.SSN, e.target.value)
        await axios.get(`${getTraineeResultByYear}/${props.trainee.SSN}/${e.target.value}`)
        .then (res => {
            setResult(res.data.result)
        })
        console.log(result, props.trainee.SSN);
    }


    return (
        <Modal {...props}
        size="500px"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>Kết quả</Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-3">
                <InputGroup>
                    <Form.Select  defaultValue="Chọn mùa" onChange={(e)=>{handleSelectYear(e)}}>
                        <option>Chọn mùa...</option>
                        {years.map((e, index) => 
                                <option key={index} value={e.year}>{e.year}</option>
                        )}
                    </Form.Select>
                </InputGroup>
                <Table className={TableStyles['children-table']}>
                    <thead>
                        <th>Tập</th>
                        <th>Điểm</th>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>abcbcbcb</td>
                            <td>1234</td>
                        </tr> */}
                        {result.map((e, index) => 
                            // <option key={index} value={e.year}>{e.year}</option>
                            <tr key={index}>
                                <td>{e.episode}</td>
                                <td>{e.Score}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Modal.Body>
            {/* {console.log(props.trainee.SSN)} */}
        </Modal>
    )
}  


function RenderButton({trainee}) {
    const [modalShow, setModalShow] = useState(false);
    const [resultShow, setResultShow] = useState(false);

    return (
        <>
            <Button className={ButtonStyles['green-btn']} onClick = {() => setModalShow(true)}>
                <i class="fa-solid fa-circle-info me-2"></i>
                Chi tiết
            </Button>
            <Button className={ButtonStyles['orange-btn']} onClick ={() => setResultShow(true)}>
                <i class="fa-solid fa-seedling me-2"></i>
                Kết quả
            </Button>
            {/* <Button className={ButtonStyles['red-btn']}>
                <i class="fa-solid fa-trash me-2"></i>
                Xóa
            </Button> */}
            <MyVerticallyCenteredModal trainee={trainee}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />   
            {console.log(trainee.phone)}
            <PopupResult trainee={trainee} show={resultShow} onHide={() => setResultShow(false)}/>
        </>
    )
}

export default function RenderRow(trainee) {
    const formatDate = (str) => {
        const day = new Date(str)
        return moment(day).format('L');
    }

    return (
        <>
            {/* <tr>
                <td>Ahn Yu Jin</td>
                <td>01/09/2003</td>
                <td>Starship Entertainment</td>
                <td>
                    <RenderButton/>
                </td>
            </tr>
            <tr>
                <td>Jang Won Young</td>
                <td>31/08/2004</td>
                <td>Starship Entertainment</td>
                <td>
                    <RenderButton/>
                </td>   
            </tr> */}
            <tr key={trainee.SSN}>
                <td> {trainee.SSN} </td>
                <td> 
                    {trainee.fullname}  
                </td>
                <td>
                    <RenderButton trainee={trainee}/>
                </td>      
            </tr>
        </>
    )
}