import React, { useEffect, useState } from "react";
import { openNotification } from "../../components/Notification/Notification";
import { Modal, Form, Input, Button } from "antd";
import api from "../../Untils/api";
import s from "./style.module.css";


export const PostCommentForm = ({
    visible,
    onComments,
    onCancel,
    _id,
    comments,
    currentUser,

}) => {
    const [values, setValues] = useState({});
    const [formChanged, setFormChanged] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        api.getPostById(_id).then((values) => {
            const valuesTags = { ...values, tags: values.tags.join() }
            setValues(valuesTags);
        });
    }, []);

    function onValuesChange(value) {
        setFormChanged(true);
    }

    function handleClick() { }

    useEffect(() => {
        api.getUser().then((data) => setUsers(data));
    }, []);

    const getUser = (id) => {

        if (!users.length) return 'User';
        const user = users.find((el) => el._id === id);
        return user?.name ?? 'User';
    };

    const [form] = Form.useForm();

    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };

    return (
        <Modal
            open={visible}
            title="Комментарии"
            okText="Добавить"
            cancelText="Закрыть"
            onCancel={onCancel}
            onOk={() => {

            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                onValuesChange={onValuesChange}
            >

            </Form>
            <div className={s.reviews}>
                {comments?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((e) => (
                    <div key={e.created_at} className={s.review}>
                        <div className={s.review__author}>
                            <div>
                                <span>{getUser(e.author)} </span>
                                <span className={s.review__date}>
                                    {new Date(e.created_at).toLocaleString('ru', options)}
                                </span>
                            </div>
                        </div>
                        <div className={s.text}>
                            <span>{e.text}</span>
                        </div>
                        {e.author === currentUser?._id && (<Button type="primary" style={{ margin: "10px 0", backgroundColor: "blue" }}
                            onClick={handleClick} >
                            Удалить
                        </Button>)}
                    </div>
                ))}

            </div>
        </Modal>
    );
};
