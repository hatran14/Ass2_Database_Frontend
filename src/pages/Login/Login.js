import { Button, Form } from "react-bootstrap";
import LoginStyle from './login.module.scss'


export default function RenderLogin() {
    return (
        <div className={LoginStyle.container}>
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control type='text' placeholder="Nhập tên đăng nhập" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type='password' placeholder="Nhập mật khẩu" />
                    </Form.Group>
                </Form>
            </div>
            <div className="mt-3 mx-auto">
                <Button>Đăng nhập</Button>
            </div>
        </div>

    )
}