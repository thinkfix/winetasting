import React from "react";
import {Button, List, Avatar} from "antd";

const TastingList = (props) => {

    const {list, editItem, deleteItem} = props;

    return (
        <>
            {list.length > 0
                ? <List
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button onClick={() => editItem(item.id)}>Edit</Button>,
                                <Button danger onClick={() => deleteItem(item.id)}>Delete</Button>
                            ]}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={<span>{item.description}</span>}
                            />
                        </List.Item>
                    )}/>
                : <h1>Create first tasting</h1>
            }
        </>
    );
}

export default TastingList;