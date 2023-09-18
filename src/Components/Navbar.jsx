import '../App.css'; // Import the CSS file for styling

// Navbar component definition
const Navbar = () => {
  return (
    // Navigation menu with links
    <nav className='flex justify-start gap-x-20 ml-12 m-5 text-[#1B4965] font-sans hover:font-serif'>
      <p><b>Home</b></p>
      <p><b>About</b></p>
      <p><b>Contact</b></p>
      <p><b>Portfolio</b></p>
      <p><b>Reviews</b></p>
    </nav>
  );
}

export default Navbar; // Export the Navbar component for use in other parts of the application
