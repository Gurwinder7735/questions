"use client";
import React, { useState } from "react";
import { IQuestions } from "./types";
import type { CollapseProps } from "antd";
import { Button, Collapse, Flex, Form, Input, Modal } from "antd";
import QuestionSingle from "../question-single";
import QuestionLabel from "../question-label";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <QuestionLabel />,
    children: <QuestionSingle />,
  },
  {
    key: "2",
    label: <QuestionLabel />,
    children: <QuestionSingle />,
  },
  {
    key: "3",
    label: <QuestionLabel />,
    children: <QuestionSingle />,
  },
];

const Questions = ({}: IQuestions) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>();
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  return (
    <>
      <div className="mb-3 ml-auto">
        <Button
          onClick={(props) => {
            setOpen(true);
          }}
        >
          Add new
        </Button>
      </div>
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: "public" }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        ></Form.Item>
      </Modal>

      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
        className="w-full"
      />
    </>
  );
};

export default Questions;
