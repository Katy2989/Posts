import React, { useContext } from "react";
import { Modal, Form, Input, Image, Select } from "antd";
import { UserContext } from "../../Untils/UserContext/userContext";

export const ChangeLoginForm = ({ visible, onChangeLogin, onCancel, image }) => {
  const [form] = Form.useForm();
   const currentUser = useContext(UserContext);
  //  console.log(currentUser.avatar, "jjkbhjvhj");
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
            onChangeLogin(values);
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
          placeholder = "jhnjkbjbhj"> 
          </Input>

        </Form.Item>
        <Image
     width={200}
    style={{ margin:"10px 120px"
    }}
    
    src={image}
  />
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              
              message: "Please input your new name",
            },
            { type: "string", min: 5 },
          ]}
        >
          <Input />
          
        </Form.Item>
        <Form.Item
          name="about"
          label="About"
          rules={[
            {
              
              message: "Please input about",
            },
            { type: "string", min: 5 },
          ]}
        >
          <Input />
          
        </Form.Item>
      </Form>
    </Modal>
  );
};
