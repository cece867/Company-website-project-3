import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const services = [
    "Web Application Development",
    "Mobile App Development",
  ]
  // const Home = [Hello]
  const companyName = "Mickey Productions"

  const staffMembers = [
    { name: "Mickey Mouse", position: "Vice President" },
    { name: "Donald Duck", position: "Janitorial Supervisor" },
    { name: "Goofy", position: "Security"},
    { name: "Scooby Doo", position: "Senior Security"},
    { name: "Minnie Mouse", position: "President"},
  ] 

  const companyContact = [
    { email: "GhostBusters@123.com" , phone: "555-555-9647", address: "15 nowhere lane, ghosthaven, NV 22666" }

  
  ]

  const companyHistoryText = `Founded in 1901 by Minnie Mouse, ${companyName} began as a full service looney company who specializes in how to descretely goof off while working. Over the decades we have had several satisfied clientele. We are a global leader in goofing off.`
  

  const pastWork = `working for Lucille Ball and many other famous celebrities teaching them to master our goofing off techniques and how not to get caught. we work with some of the biggest companies and names. We are looking for more in the future. We have a new program, how to goof off at chuch and not get caught. The particular course is geared toward elementary school age children.`

  
  
  const externalLinks = [
  {name: "pcworld", url: "https://www.pcworld.com/article/495117/10_ways_to_goof_off_at_work_and_not_get_caught.html" },
  {name: "reddit", url: "https://www.reddit.com/r/AskReddit/comments/bcka9n/how_do_you_goof_off_on_the_job_and_not_get_caught/" },
  ]


  // const sections = ["Home", "History", "Past Work", "Staff", "Contact", "External Links"];
  return (
    <>


      <Navbar setCurrentPage={setCurrentPage}/>
      
      <section title = "home">
      <h1>
        {companyName}
      </h1>

        <p> Welcome To Our Website Where we Serve Clients Globally </p>

      </section>

      {currentPage === "companyHistory" && (
      <section title = "history">
      <p> Company History </p>
      <p> {companyHistoryText} </p>
      </section>
      )}

      {currentPage === "pastWork" && (
       <section title = "past work">
      <p> Work History </p>
      <p> {pastWork}</p>
      </section>
      )}

      {currentPage === "companyStaff" && (
         <section title = "staff">
      <h2> Company Staff </h2>
      {staffMembers.map((staff, index) => (
            <p key={index}><strong>{staff.name}</strong> — {staff.position}</p>
          ))} 
      </section>
      )}
     
       {currentPage === "contactUs" && (
       <section title = "contact">
      <p> Contact Us </p>
      {companyContact.map((company, index) => (
        <p key={index}><strong>email: {company.email}</strong> <br/> phone: {company.phone} <br/> address: {company.address}</p>
      ))}
      </section>
       )}

        {currentPage === "externalLinks" && (
       <section title = "external links">
      <p> External Links </p>
      
       <ul>
      {externalLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
      </section>

    )}


    </>
  );
};
export default App;
