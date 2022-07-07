import logo from "./logo.png";
import './App.css';

function Navbar() {
  return (
    <header classNameName="header-campus box-shadow">
    <nav classNameName="navbar navbar-expand-lg container">
      <a classNameName="navbar-brand" href="#">
        <h1 classNameName="d-none">Campus ORT</h1>
        <img classNameName="img-fluid campus-logo" src={logo} alt="Campus ORT"></img>
      </a>
      <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classNameName="navbar-toggler-icon"></span>
      </button>

      <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classNameName="navbar-nav ml-auto">
          <li classNameName="nav-item">
            <a classNameName="nav-link" href="#">
              <svg classNameName="bi bi-person-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li classNameName="nav-item">
            <a classNameName="nav-link" href="#">
              <svg classNameName="bi bi-list" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
</header>
  );
}

export default Navbar;