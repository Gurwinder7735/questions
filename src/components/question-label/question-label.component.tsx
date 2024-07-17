import React from "react";
import { IQuestionLabel } from "./types";
import { Button, Popconfirm } from "antd";
import { DeleteFilled, QuestionCircleOutlined } from "@ant-design/icons";

const QuestionLabel = ({}: IQuestionLabel) => {
  return (
    <div className="flex items-start justify-between">
      <div className="">QuestionLabel </div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button
          icon={<DeleteFilled />}
          iconPosition={"start"}
          danger
          onClick={(props) => {
            props.stopPropagation();
          }}
        ></Button>
      </Popconfirm>
    </div>
  );
};

export default QuestionLabel;
