import React from "react";
import {connect} from "react-redux";
import {deleteTasting} from "../actions";

const TastingList = (props) => {

    const {tasting} = props;

    const tastingList = tasting.map((item) => {
        return <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <span>Edit</span>
            <span onClick={() => props.deleteTasting(item.id)}>Delete</span>
        </li>
    });

    return (
        <ul>
            {tastingList}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        tasting: state.tasting
    }
}

export default connect(mapStateToProps, {deleteTasting})(TastingList) ;