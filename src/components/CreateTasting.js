import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import { createTasting } from '../actions';

const CreateTasting = (props) => {
    const titleEl = useRef(null);
    const descEl = useRef(null);
    const [id, setId] = useState(0);

    const createTastingHandler = () => {
        if (titleEl.current.value) {
            props.createTasting({
                id: id,
                title: titleEl.current.value,
                description: descEl.current.value
            })
            //TODO how to clear fields properly
            titleEl.current.value = null;
            descEl.current.value = null;
            setId(id+1);
        }
    }

    return (
        <>
            <h2>Create tasting</h2>

                <label htmlFor="title">Title</label>
                <input type="text" ref={titleEl} name="title"/>
                <br/>
                <label htmlFor="description">Description</label>
                <input type="text" ref={descEl} name="description"/>
                <br/>
                <button
                    onClick={createTastingHandler}
                >Save</button>

        </>
    )
}


const mapStateToProps = (state) => {
    return {tasting: state.tasting}
}

export default connect(mapStateToProps, {createTasting})(CreateTasting);
