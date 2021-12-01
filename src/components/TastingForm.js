import React, {useEffect} from "react";
import {Form, Input, Checkbox, Button} from "antd";

const TastingForm = (props) => {
    const {saveForm, formData} = props;
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(formData);
    }, [formData, form]);

    const onFinish = (values) => {
        saveForm(values);
        form.resetFields();
    }
    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <>
            <h2>Tasting Form</h2>
            <Form
                form={form}
                layout={"vertical"}
                initialValues={{
                    title: '',
                    description: ''
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    rules={[{required: true, message: 'Please input tasting title!'}]}
                    label="Title"
                    name="title"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Show names during tasting"
                    name="open"
                    valuePropName="checked"
                >
                    <Checkbox/>
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default TastingForm;
