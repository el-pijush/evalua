import { useEffect, useState  } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


export const EmployeeDetails = () => {


  const { id } = useParams();
  const [user, setUser] = useState({});
  // const { isAuth } = useContext(AuthContext);



  useEffect(() => {
    
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      setUser(data);
    })
  }, []);

  console.log(user);



  return (


    <div className="user_details">
      <img className="user_image" src={user.image} alt="img" />
      <h4 className="user_name">{user.username}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
        <li className="task">{user.team}</li>
      </span>
      Status: <b className="status">{user.status}</b>
      Title: <b className="title">{user.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {user.status === "terminated" ? null : <button className="fire">Fire Employee</button>}
      
      {user.title !== "Team Lead"&& user.status !=="terminated" ? <button className="promote">promote</button> : null}
      
    </div>
  );
};