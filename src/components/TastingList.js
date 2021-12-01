import React from "react";
import {Button, List, Typography} from "antd";

const TastingList = (props) => {

    const {list, editItem, deleteItem} = props;

    return (
        <>
            {list.length > 0
                ? <List
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <Button onClick={() => editItem(index)}>Edit</Button>,
                                <Button danger onClick={() => deleteItem(index)}>Delete</Button>
                            ]}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={<span>{item.description}</span>}
                            />
                        </List.Item>
                    )}/>
                : <Typography.Title
                    type="secondary"
                    italic="false"
                >Create first tasting</Typography.Title>
            }
        </>
    );
}

export default TastingList;