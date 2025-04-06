import React, {useState} from "react";
import Navbar from "./Navbar";

const _MainDashboard = () => {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([
    {
      name: "Liam Carter",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      name: "Ava Thompson",
      role: "Marketing Manager",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      name: "Noah Bennett",
      role: "Data Analyst",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      name: "Isabella Hayes",
      role: "UX Designer",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    },
    {
      name: "Ethan Ramirez",
      role: "DevOps Engineer",
      img: "https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg",
    },
    {
      name: "Sophia Brooks",
      role: "Product Manager",
      img: "https://images.pexels.com/photos/1399016/pexels-photo-1399016.jpeg",
    },
    {
      name: "Mason Ellis",
      role: "Cybersecurity Specialist",
      img: "https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg",
    },
    {
      name: "Mia Sullivan",
      role: "Financial Analyst",
      img: "https://images.pexels.com/photos/2169429/pexels-photo-2169429.jpeg",
    },
    {
      name: "Lucas Parker",
      role: "Mobile App Developer",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Emma Foster",
      role: "Human Resources Coordinator",
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <div>_MainDashboard</div>
      <div className='grid grid-cols-3'>
        {employees.map((employee) => {
          return (
            <div className='card card-side bg-base-100 shadow-sm m-4' key={employee.name}>
              <figure>
                <img
                  src={employee.img}
                  style={{ height: "100px", width: "auto" }}
                  alt='Employee Image'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{employee.name}</h2>
                <p>{employee.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default _MainDashboard;
