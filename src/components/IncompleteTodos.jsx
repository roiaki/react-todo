import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  console.log(onClickComplete);
  return (
    <div className="incomplete-area">
      <p className="title">未完のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{ todo }</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};