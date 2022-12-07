import { Button, Form } from "react-bootstrap";
import LoginStyle from './login.module.scss'
import axios from "axios";
import { useState } from "react";
import { login } from "../../utils/API";
import { Link } from "react-router-dom";


export default function RenderLogin() {
    const [formInput, setFormInput] = useState({
        userName: "",
        password: ""
    })

    const handleChangeUser = (e) => {
        setFormInput(prev => {
            return {...prev, userName: e.target.value}
        })
    }

    const handleChangePassword = (e) => {
        setFormInput(prev => {
            return {...prev, password: e.target.value}
        })
    }

    const handleSubmit = async () => {
        console.log(formInput)
        const data = await axios.post(`${login}`,formInput);
        if (data.data ==='Login success!') {
            window.location.href = "../list-trainee";
        }
        else alert(data.data)

        console.log(data);
    }
    return (
        <div className={LoginStyle.container}>
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control type='text' placeholder="Nhập tên đăng nhập" onChange={handleChangeUser}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type='password' placeholder="Nhập mật khẩu" onChange={handleChangePassword}/>
                    </Form.Group>
                </Form>
            </div>
            <div className="mt-3 mx-auto">
                    <Button onClick={handleSubmit}>Đăng nhập</Button>
            </div>
        </div>

    )
}