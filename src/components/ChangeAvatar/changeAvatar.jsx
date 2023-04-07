import React, { useContext } from "react";
import { Modal, Form, Input, Image, Select } from "antd";
import { UserContext } from "../../Untils/UserContext/userContext";

export const ChangeAvatar = ({ visible, onChangeAvatar, onCancel, image }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Изменить данные"
      okText="Изменить"
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onChangeAvatar(values);
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
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="avatar"
          label="Avatar"
          rules={[
            {
              required: true,
              message: "Please input the link to your new Avatar",
            },
            { type: "url", warningOnly: true },
            { type: "string", min: 6 },
          ]}
        >
          <Input
            placeholder={image}>
          </Input>
        </Form.Item>
        <Image
          width={200}
          style={{
            margin: "10px 120px"
          }}

          src={image}
        />

      </Form>
    </Modal>
  );
};
