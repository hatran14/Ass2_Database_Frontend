import { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import ButtonStyles from './button.module.scss';
import PopupDetail from '../PopupDetail/PopupDetail';
import moment from "moment/moment";

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
          <PopupDetail/>
        </Modal.Body>
        <Modal.Footer>
            <Button className={ButtonStyles['green-btn']}>
                <i class="fa-solid fa-pen-to-square me-2"></i>
                Chỉnh sửa
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }


function RenderButton() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button className={ButtonStyles['green-btn']} onClick = {() => setModalShow(true)}>
                <i class="fa-solid fa-circle-info me-2"></i>
                Chi tiết
            </Button>
            <Button className={ButtonStyles['orange-btn']}>
                <i class="fa-solid fa-seedling me-2"></i>
                Kết quả
            </Button>
            {/* <Button className={ButtonStyles['red-btn']}>
                <i class="fa-solid fa-trash me-2"></i>
                Xóa
            </Button> */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />   
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
            </tr> */console.log(trainee)}
            <tr key={trainee.SSN}>
                <td> {trainee.fullname} </td>
                <td> 
                    {formatDate(trainee.DoB)}  
                </td>
                <td> {trainee.Cname}</td>
                <td>
                    <RenderButton/>
                </td>      
            </tr>
        </>
    )
}