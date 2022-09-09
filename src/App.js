import './App.css';

function App() {
  return (
      <nav className="navbar bgBlue fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
			    <img src="mylittlepet.png" alt="logo de Amazing Bake"></img>
				</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title fontFamly" id="offcanvasNavbarLabel">My little pet</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body fontSize">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menú
              </a>
              <ul className="dropdown-menu">
              <li><a class="dropdown-item" href="#">Selecione el animal al que quiere conocer</a></li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
                <li><a className="dropdown-item" href="#">Perros</a></li>
                <li><a className="dropdown-item" href="#">Gatos</a></li>
                <li><a className="dropdown-item" href="#">Hurones</a></li>
                <li><a className="dropdown-item" href="#">Peces</a></li>
              </ul>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    
  );
}

export default App;
