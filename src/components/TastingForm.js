import React, {useEffect, useState} from "react";

const TastingForm = (props) => {
    const {saveForm, formData} = props;
    const [formFields, setFormFields] = useState(formData);

    useEffect(() => {
        setFormFields(formData);
    }, [formData]);

    const submitTastingHandler = (e) => {
        e.preventDefault();
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

    return (
        <>
            <h2>{formFields.formTitle}</h2>
            <form onSubmit={submitTastingHandler}>
                <input type="text" name="id" value={formFields.id} onChange={inputChangeHandler}/>
                <br/>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    required
                    name="title"
                    value={formFields.title}
                    onChange={inputChangeHandler}/>
                <br/>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={formFields.description}
                    onChange={inputChangeHandler}/>
                <br/>
                <button type='submit'>Save</button>
            </form>
        </>
    )
}

export default TastingForm;
