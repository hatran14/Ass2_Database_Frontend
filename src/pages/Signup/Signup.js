import { Button, Form } from "react-bootstrap";
import SignupStyle from './signup.module.scss'


export default function RenderSignup() {
    return (
        <div className={SignupStyle.container}>
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
                    <Form.Group className="mt-3">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control type='password' placeholder="Nhập lại mật khẩu" />
                    </Form.Group>
                </Form>
            </div>
            <div className="mt-3 mx-auto">
                <Button>Đăng kí</Button>
            </div>
        </div>

    )
}