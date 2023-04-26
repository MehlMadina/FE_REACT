import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../UserItem";

export default function UserList() {
  const { list, status, error } = useSelector((state) => state.user);
  
  if (status === "rejected") {
    alert(error);
  }

  return (
    <div>
      {list.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
}
