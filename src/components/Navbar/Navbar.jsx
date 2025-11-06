const Navbar = ({setCurrentPage}) => {
  return (
    <nav id="top-navbar">
     <button onClick={() => setCurrentPage("Home")}>Home</button>
     <button onClick={() => setCurrentPage("companyHistory")}>Company History</button>
     <button onClick={() => setCurrentPage("pastWork")}>Past Work</button>
     <button onClick={() => setCurrentPage("companyStaff")}>Company Staff</button>
     <button onClick={() => setCurrentPage("contactUs")}>Contact US</button>
     <button onClick={() => setCurrentPage("externalLinks")}>External Links</button>

    </nav>
  );
};

export default Navbar;