import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../UserItem";

export default function UserList() {
  const user = useSelector((state) => state.user.list);

  return (
    <div>
      {user.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
}
