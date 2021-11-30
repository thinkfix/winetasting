import React from "react";

const TastingList = (props) => {

    const {list, editItem, deleteItem} = props;

    const tastingList = list.map((item) => {
        return (
            <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span onClick={() => editItem(item.id)}>Edit</span>
                <span onClick={() => deleteItem(item.id)}>Delete</span>
            </li>
        )});
    return (
        <>
            {list.length > 0
                ? <ul>{tastingList}</ul>
                : <h1>Create first tasting</h1>
            }
        </>
    );
}

export default TastingList;