import { useState } from "react";
//  import axios from "axios";

export const Admin = () => {

  
  const [formData, setFormData] = useState({
    employee_name: '',
		employee_id: '',
		title: '',
		salary: 0,
		image: "",
		username: "",
		password: "",
		tasks: [""],
    status: "",
    team: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:value,
    })
  };

  const handleSubmit = (e) => {
   e.preventDefault()
    fetch("http://localhost:8080/employee", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
    
    }


  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" id="1" onChange={handleChange} value={formData.employee_name} name="employee_name" />
      <input type="text" placeholder="Employee id" id="2" onChange={handleChange} value={formData.employee_id} name="employee_id" />
      <select name="title" onChange={handleChange} value={formData.title} id="3">
        <option value="intern" >Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" onChange={handleChange} value={formData.salary} name="salary"  id="4"/>
      <input type="text" placeholder="Image" onChange={handleChange} value={formData.image} name="image" id="5" />
      <input type="text" placeholder="User Name" onChange={handleChange} value={formData.username} name="username" id="6" />
      <input type="password" placeholder="Password" onChange={handleChange} value={formData.password} name="password" id="7" />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        value={formData.tasks}
        onChange={handleChange}
        id="8"
      />
      <select name="status" id="status" onChange={handleChange} value={formData.status}  >
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
        <option value="promoted">Promoted</option>

      </select>
      <select name="team" id="team" onChange={handleChange} value={formData.team} >
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};