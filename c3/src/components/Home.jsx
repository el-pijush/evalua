import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {

  const [ne, setnew] = useState(0);
  const [ter, setter] = useState(0);
  const [pro, setpro] = useState(0);


  const [users, setUsers] = useState([]);



  function details(users) {
    

    users.forEach((el, i) => {
      
      if (el.status === "terminated") {
        setter(prev => prev + 1);
      }
      else if (el.status === "promoted") {
        setpro(prev => prev + 1);
      }else {
        setnew(prev => prev + 1);
      } 

    })
      
    }


  useEffect(() => {

    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setUsers(data);
      details(data);
    })

    


  }, [])

  console.log(users);

 
    
   

  return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees: <span className="totalemp">{users.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{ter}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{pro}</span>
          </div>
          <div>
            Total New: <span className="total_new">{ne}</span>
          </div>
        </div>
      </>
    );
  };