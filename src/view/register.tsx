/*
 * @author xiaoxiao78
 * @email 951402661@qq.com
 * @create date 2018-04-012 12:02:51
 * @modify date 2018-04-24 14:02:51
 * @desc '登录' 页面
*/

import * as React from 'react';
import { Form, Input, Select, Button} from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

import styled from 'styled-components';

const FormItem = Form.Item;
const Option = Select.Option;

const FormBox = styled.div`
    padding-top: 20%;
    width: 100%;
    height: 100%;
`;

interface Props {
    form: WrappedFormUtils;
}
interface State {
    confirmDirty?: boolean;
    autoCompleteResult: object
}

class RegistrationForm extends React.Component<Props ,State>{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labalCol:{
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
              },
        }
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          const prefixSelector = getFieldDecorator('prefix',{
            initialValue: '86',
          })(
              <Select style={{width: '70px'}}>
                    <Option value="86"></Option>
                    <option value="87"></option>
              </Select>
          )
        return(
            <FormBox>
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                {
                    getFieldDecorator('email',{
                        rules:[
                            {
                                type: 'email',
                                message: '请输入正确的邮箱',
                            },
                            {
                                required: true,
                                message: "请输入您的常用邮箱"
                            }
                        ]
                    })(
                        <Input />
                    )
                }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = 'Password'
                >
                    {
                        getFieldDecorator('password',{
                            rules: [
                                {
                                required: true,
                                message: '请设置您的密码'
                            },
                        ]
                        })(
                            <Input type="password" placeholder="请输入密码" />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = "confirm Password"
                >
                    {
                        getFieldDecorator('confirm',{
                            rules: [{
                                required: true, message: '请输入确认密码',
                            }]
                        })(
                            <Input type="password"/>
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = "name"
                >
                    {getFieldDecorator('userName',{
                       rules:[{
                           required: true,
                           message: "请输入您的用户名"
                       }] 
                    })(
                        <Input />
                    )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="phone" 
                >
                    {getFieldDecorator('phone',{
                        rules: [{
                            required: true,
                            message: "请输入您的电话号码"
                        }]
                    })(
                        <Input type="tel" addonBefore={{prefixSelector}}/>
                    )
                    }
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
            </FormBox>  
        )

    }
   
}
const RegistrationForm2 = Form.create<Props>()(RegistrationForm);
export default RegistrationForm2