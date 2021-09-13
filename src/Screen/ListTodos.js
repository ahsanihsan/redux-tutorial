import React from "react";
import { Table, Checkbox } from "antd";
import { connect } from "react-redux";
import { markTodoStatus } from "../Redux/Actions/Todo";

const ListTodos = (props) => {
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item, data, index) => {
        return (
          <Checkbox
            value={item}
            onChange={() => {
              let data = {
                index: index,
                status: !item,
              };
              console.log(props);
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
  ];
  console.log(props.todos);
  return (
    <div style={{ marginLeft: 300, marginTop: 20, marginRight: 300 }}>
      <Table dataSource={props.todos} columns={columns} />
    </div>
  );
};

const mapDispatchToProps = {
  markTodoStatus,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todosList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
