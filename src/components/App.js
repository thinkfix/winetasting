import React, {useEffect, useState} from "react";
import TastingList from "./TastingList";
import TastingForm from "./TastingForm";
import {connect} from "react-redux";
import {createTasting, editTasting, deleteTasting} from "../actions";
import {Button} from "antd";
import 'antd/dist/antd.css';


const App = (props) => {
    const {tasting} = props;
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);
    const [currentEdit, setCurrentEdit] = useState('');

    const saveFormHandler = (data) => {
        (currentEdit === '') ? props.createTasting(data) : props.editTasting(data, currentEdit);
        setCurrentEdit('');
        setFormData(null);
        setShowForm(false);
    }

    const editItemHandler = (index) => {
        setCurrentEdit(index)
    }

    useEffect(() => {
        if (typeof currentEdit === 'number') {
            let data = tasting.filter((item, index) => index === currentEdit);
            setFormData({...data[0]});
            setShowForm(true);
        }
    }, [currentEdit, tasting])


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

