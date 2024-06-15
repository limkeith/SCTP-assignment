import man from "../assets/man.png";

function Header(){
    return (
        <>
          <img src={man} height="250px" width="250px" alt="man-image" />
          <h2>Keith Lim</h2>
          <h3>Potential Software Developer</h3>
        </>
    )
}


export default Header;