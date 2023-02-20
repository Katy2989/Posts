import React from "react";
import { Modal, Form, Input } from "antd";

export const CreateFormPost = ({ showModal, handleCreatePost, setShowModal }) => {

  const [form] = Form.useForm();

  return (
    <>
      <Modal title="Создать новый пост"
        open={showModal}
        onCancel={() => { setShowModal(false) }}
        onOk={() => {
          form.validateFields()
            .then((values) => {
              form.resetFields();
              handleCreatePost(values);
            })
            .catch((err) => { console.log("Заполните обязательные поля:", err) });
        }
        }
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="title"
            label="Заголовок поста"
            rules={[
              {
                required: true,
                message: "заголовок поста",
              },
              { type: "string", min: 2 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="введите заголовок поста" />
          </Form.Item>
          <Form.Item
            name="text"
            label="Текст поста"
            rules={[
              {
                required: true,
                message: "",
              },
              { whitespace: true },
            ]}
          >
            <Input.TextArea placeholder="введите описание поста" />
          </Form.Item>
          <Form.Item
            label="Url"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input the link to the image of your post",
              },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input placeholder="url картинки поста" />
          </Form.Item>
          <Form.Item label="Тэги" name="tags" rules={[{ whitespace: true }]}>
            <Input placeholder="введите теги через запятую" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
