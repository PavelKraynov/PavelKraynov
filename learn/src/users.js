import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserName, updateUserList } from "./redux/reducers/users";

const Users = () => {

  const userName = useSelector((s) => s.users.name)
  const userList = useSelector((s) => s.users.list)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(updateUserList())
  }, [])
  return (
    <div>
      {userName}
      {JSON.stringify(userList)}
      <div>
        <input
          type="text"
          value={userName}
          className = "border-black border-2"
          onChange={(e) => dispatch(updateUserName(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Users