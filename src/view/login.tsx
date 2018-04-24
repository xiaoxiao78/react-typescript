/*
 * @author xiaoxiao78
 * @email 951402661@qq.com
 * @create date 2018-04-012 12:02:51
 * @modify date 2018-04-24 14:02:51
 * @desc '登录' 页面
*/

import * as React from 'react';
import { Form, Input, Button, Checkbox, Icon, Modal } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import styled from 'styled-components';
import axios from 'axios';
const FormItem = Form.Item;
// style
const LoginBox = styled.div`
    padding-top: 20%;
    width: 100%;
    height: 100%;
`;
const LoginForm = styled.div`
    margin: 0 auto;
    max-width: 320px;
    height: 340px;
    box-shadow: 0 0 100(0,0,0,.8);
    background: #fff;
`;
const Img = styled.img`
    width: 320px;
    border: 0;
    margin-bottom: 20px
`;

interface Props {
    form: WrappedFormUtils;
    login?: number;
    value?: string;
    fildsValue?: object;
    visible?: boolean;
    txt?: string;
}
interface State {
    value: string;
    login?: number;
    fildsValue?: object;
    visible?: boolean;
    txt?: string;
}
class HtLogin extends React.Component<Props, State> {
    constructor (props: any) {
        super(props);
        this.state = {
            login: 1,
            value: '',
            visible: false,
            txt: '',
        };
   }
    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event: any) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
              axios({
                url: '/user',
                method: 'get',
                params: {
                    userName: values.userName,
                    password: values.userPassWord,
                }
            })
                .then( (res: any) => {
                    console.log(res);
                    const msg = res.data.msg;
                    console.log(msg);
                    this.setState({
                        visible: true,
                        txt: msg
                    });
                    this.modal();
                });
            }
        });
    }
    modal = () => {
        Modal.error({
            title: this.state.txt,
            content: (<div>'返回什么信息提示什么信息'</div>),
        }); 
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <LoginBox>
                <Img src="/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png" />
                <LoginForm>
                    <Form style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input 
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="输入用户名" 
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('userPassWord', {
                                rules: [{required: true, message: '请输入密码'}]
                            })(
                                <Input 
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                                    type="password"
                                    placeholder="输入密码"
                                />
                            )
                            }
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('options', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox> 
                            )
                            }
                            <a className="login-form-forgot" href="javascript:void(0)">忘记密码</a>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                className="login-form-button" 
                                style={{width: '100%'}}
                                onClick={this.handleSubmit}
                            >
                                登录
                            </Button>
                            还没有注册? <a href="javascript:void(0)">赶紧来注册</a>
                        </FormItem>
                    </Form>
                </LoginForm>
            </LoginBox>
        );
    }
}
const WrappedNormalLoginForm = Form.create<Props>()(HtLogin);
export default WrappedNormalLoginForm;