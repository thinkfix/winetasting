import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { createTasting, editTasting } from '../actions';

const TastingForm = (props) => {
    const {tasting} = props;
    console.log('Line: 7', tasting);
    const initialFormData = {
        id: '',
        editable: false,
        title: '',
        description: ''
    }

    const [formFields, setFormFields] = useState(initialFormData)
    const [t, seT] = useState({})
    const clearForm = () => {setFormFields(initialFormData)}

    console.log('Line: 18', tasting);
    tasting.filter(i=>i.editable === true).map(i=>{
        console.log('Line: 20', i);
        setFormFields(0);
        let data = {...i};
        //data.editable=false
        //seT(data);
    })
    // tasting.map(item => {
    //     if (item.editable) {
    //         setFormFields(item);
    //         console.log('Line: 23', item);
    //        // console.log('Line: 24', formFields);
    //         //item.editable = false;
    //     }
    //     return item;
    // });

    useEffect(()=>{
        console.log('Line: 31', t);
    },[t])
    const submitTastingHandler = (e) => {
        console.log('Line: 41', 3232);
        if(!formFields.id) {
            props.createTasting({
                id: props.tasting.length ? +props.tasting[props.tasting.length - 1].id + 1 : 0,
                editable: false,
                title: formFields.title,
                description: formFields.description
            });
        }

        clearForm();

        e.preventDefault();
    }

    const inputChangeHandler = (e) => {
        console.log('Line: 55', 21);
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


const mapStateToProps = (state) => {
    return {tasting: state.tasting}
}

export default connect(mapStateToProps, {createTasting, editTasting})(TastingForm);
