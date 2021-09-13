import React, { useState } from "react";
import {
  Table,
  Checkbox,
  Button,
  Modal,
  Input,
  Select,
  message,
  Popconfirm,
} from "antd";
import { connect } from "react-redux";
import { markTodoStatus, addATodo, deleteATodo } from "../Redux/Actions/Todo";

const ListTodos = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [importance, setImportance] = useState();

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item, data, index) => {
        return (
          <Checkbox
            defaultChecked={item}
            checked={item}
            onChange={() => {
              let data = {
                index: index,
                status: !item,
              };
              props.markTodoStatus(data);
            }}
          />
        );
      },
      width: 50,
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Popconfirm
            title={"Are you sure you want to delete this task?"}
            onConfirm={() => props.deleteATodo(item.key)}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <div style={{ marginLeft: 250, marginTop: 20, marginRight: 250 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Todos List</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>
          Add Todo
        </Button>
      </div>
      <Table dataSource={props.todos} columns={columns} key={1} />
      <Modal
        title="Add todo"
        visible={showModal}
        onOk={() => {
          if (task && importance) {
            let data = {
              key: props.todos.length,
              task: task,
              status: false,
              priority: importance,
            };
            props.addATodo(data);
            setShowModal(false);
          } else {
            message.error("Please fill all the values");
          }
        }}
        onCancel={() => setShowModal(false)}
      >
        <p>Todo:</p>
        <Input.TextArea
          onChange={(event) => setTask(event.target.value)}
          rows={4}
          style={{ marginTop: 10, marginBottom: 10 }}
          placeholder="Enter your todo text ...."
        />
        <p>Importance:</p>
        <Select
          style={{ width: "100%" }}
          placeholder="Select importance of the task"
          onChange={(value) => {
            setImportance(value);
          }}
        >
          <Select.Option value="✅ Not Important">
            ✅ Not Important
          </Select.Option>
          <Select.Option value="✅ ✅ Important">✅ ✅ Important</Select.Option>
          <Select.Option value="✅ ✅ ✅ Very Important">
            ✅ ✅ ✅ Very Important
          </Select.Option>
        </Select>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = {
  markTodoStatus,
  addATodo,
  deleteATodo,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todosList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
