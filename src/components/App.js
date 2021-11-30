import React, {useState} from "react";

import './App.css';
import TastingList from "./TastingList";
import TastingForm from "./TastingForm";
import {connect} from "react-redux";
import {createTasting, editTasting, deleteTasting} from "../actions";
import {Button} from "antd";


const App = (props) => {
    const {tasting} = props;
    const [showForm, setShowForm] = useState(false);

    const initialFormData = {
        formTitle: 'Create tasting',
        id: '',
        title: '',
        description: ''
    };
    const [formData, setFormData] = useState(initialFormData);

    const saveFormHandler = (data) => {
        if (data && typeof data.id === 'number') {
            props.editTasting(data);
        } else {
            props.createTasting({
                ...data,
                id: tasting.length ? +tasting[tasting.length - 1].id + 1 : 0
            })
        }
        setShowForm(false);
        setFormData(initialFormData);
    }

    const editItemHandler = (id) => {
        let data = tasting.filter(item => item.id === id);
        console.log('Line: 38', data);
        setFormData({...data[0], formTitle: 'Edit tasting'});
        setShowForm(true);
    }


    return (
        <>
            {showForm
                ? <TastingForm saveForm={saveFormHandler} formData={formData}/>
                : <TastingList list={tasting} editItem={editItemHandler} deleteItem={id => props.deleteTasting(id)}/>
            }
            <Button block onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add tasting' : 'Hide form'}</Button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        tasting: state.tasting
    }
}

export default connect(mapStateToProps, {createTasting, editTasting, deleteTasting})(App);

