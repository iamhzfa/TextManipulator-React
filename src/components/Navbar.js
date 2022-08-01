import React from "react";
// import {useNavigate} from "react-router-dom"

function Navbar(props) {

  // const navigate = useNavigate();


  return (
    <nav className={`border-bottom border-${props.mode==='light'?'white':'dark'} navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        {/* <a className="navbar-brand" style={{color:props.mode==='light' ? '#0d6efd' : 'whitesmoke', cursor:"pointer"}} onClick={()=>navigate('/')} > */}

      {/* this line is for only deploying pages on github */}

        <a className="navbar-brand" style={{color:props.mode==='light' ? '#0d6efd' : 'whitesmoke', cursor:"pointer"}} href="#" >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" style={{fontWeight:700, cursor:"pointer"}} aria-current="page" onClick={()=>navigate('/home')}> */}

              {/* this line is for only deploying pages on github */}

              <a className="nav-link active" style={{fontWeight:700, cursor:"pointer"}} aria-current="page" href="#" >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" style={{fontWeight:400, cursor:"pointer"}} onClick={()=>navigate('/about')}>
                About
              </a>
            </li> */}
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <div>
            <span className="material-symbols-outlined text-light">light_mode</span>
            </div>
            <div className="form-check form-switch" style={{margin:"0 -9px 6px 0"}}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{cursor:'pointer'}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
            <div  style={{marginRight:"15px"}}>
            <span className="material-symbols-outlined" >dark_mode</span>
            {/* style={{color:props.mode==='light'?'blue':'black'}} */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
