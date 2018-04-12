import * as React from 'react';
import { Form, Input, Button, Checkbox, Icon } from 'antd';
const FormItem = Form.Item;

interface Props {
    form?: WrappedFormUtils;
    login?: number;
    value?: string;
}
interface State {
    value: string;
    login?: number;
}
class HtLogin extends React.Component<Props, State,object> {
    constructor (props: any) {
        super(props);
        this.state = {
            login: 1,
            value: ''
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
        this.props.form.validateFields ( ( err: boolean, values: string ) => {
            if ( !err ) {

                console.log ( 'Received values of form: ', values);
            }
        });
    }
    render() {
        console.log(this.props.form);
        const { getFieldDecorator } = this.props.form;
        return(
            <Form>
                 <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入用户名" />
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
                    <a className="login-form-forget" href="javascript:void(0)">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    还没有注册? <a href="javascript:void(0)">赶紧来注册</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(HtLogin)
export default WrappedNormalLoginForm;