import React, { useContext } from "react";
import { Modal, Form, Input, Image, Select } from "antd";
import { UserContext } from "../../Untils/UserContext/userContext";

export const ChangeName = ({ visible, onChangeName, onCancel, name, about }) => {
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
            onChangeName(values);
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
          name="name"
          label="Name"
          rules={[
            {
              message: "Пожалуйста введите имя",
            },
              { type: "string", min: 2 },
          ]}
        >

          <Input
            placeholder={name}>
          </Input>

        </Form.Item>
        <Form.Item
          name="about"
          label="About"
          rules={[
            {
              message: "Пожалуйста введите о себе",
            },
              { type: "string", min: 2 },
          ]}
        >
          <Input
            placeholder={about}>
          </Input>

        </Form.Item>
      </Form>
    </Modal>
  );
};
