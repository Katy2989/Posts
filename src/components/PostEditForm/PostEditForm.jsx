import React, { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";
import api from "../../Untils/api";


export const PostEditForm = ({
  visible,
  onEdit,
  onCancel,
  _id,

}) => {
  const [values, setValues] = useState({});
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    api.getPostById(_id).then((values) => {
      values = {...values, tags: values.tags.join()}
      setValues(values);
    });
  }, []);

  function onValuesChange(value) {
    setFormChanged(true);
  }

  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Изменение поста"
      okText="Изменить"
      cancelText="Закрыть"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            if (formChanged) {
                form.resetFields();
                onEdit(values);
            } else {
               onCancel();
            }
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        onValuesChange = {onValuesChange}
        initialValues={{
          title: values.title,
          image: values.image,
          text: values.text,
          tags: values.tags,
        }}
      >
        <Form.Item
          name="title"
          label="Заголовок поста"
          rules={[
            {
              required: true,
            },
            { type: "string", min: 2 },
            { whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="text"
          label="Текст поста"
          rules={[
            {
              required: true,
            },
            { whitespace: true },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Url картинки"
          name="image"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="введите ссылку на картинку поста" />
        </Form.Item>

        <Form.Item label="Тэги" name="tags">
          <Input placeholder="введите теги через запятую" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
