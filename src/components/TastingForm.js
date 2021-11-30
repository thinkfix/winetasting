import React, {useEffect, useState} from "react";
import { Form, Select, Input, Checkbox, Button } from "antd";
import 'antd/dist/antd.css';

// const {Option} = Select;

const TastingForm = (props) => {
    const {saveForm, formData} = props;
    const [formFields, setFormFields] = useState(formData);

    useEffect(() => {
        setFormFields(formData);
    }, [formData]);

    const submitTastingHandler = (e) => {
        saveForm(formFields);
    }

    const inputChangeHandler = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const children = [];

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <h2>{formFields.formTitle}</h2>
            <Form onFinish={submitTastingHandler}>
                <input type="hidden" name="id" value={formFields.id} onChange={inputChangeHandler}/>
                <Form.Item>
                    <label htmlFor="title">Title</label>
                    <Input
                        type="text"
                        rules={[{ required: true, message: 'Please input tasting title!' }]}
                        name="title"
                        value={formFields.title}
                        onChange={inputChangeHandler}/>
                </Form.Item>

                <Form.Item>
                    <label htmlFor="description">Description</label>
                    <Input
                        type="text"
                        name="description"
                        value={formFields.description}
                        onChange={inputChangeHandler}/>
                </Form.Item>

                <Form.Item>
                    <label htmlFor="wines">Wines</label>
                    <Select mode="tags" name="wines" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                        {children}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Checkbox>Show names during tasting</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default TastingForm;
