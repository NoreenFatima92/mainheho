import React from 'react';

import logo from '../../image/download.jpeg'
const Navbar = (props) => {

    console.log("props",props);
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">

                {/* <a class="navbar-brand" href="#"><img src="./images/download (1).jpeg" alt="" style={{height:"50px"}}/></a> */}

                <img src={logo} alt="" style={{ height: "50px" }} />


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                {
                                    props.navlinks.home
                                }
                                
                                
                                
                                </a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                {
                                    props.navlinks.about
                                }
                                
                                
                                
                                </a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                {
                                    props.navlinks.project
                                }
                                
                                
                                
                                </a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                {
                                    props.navlinks.experience
                                }
                                
                                
                                
                                </a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                {
                                    props.navlinks.contact
                                }
                                
                             </a>
                        </li>
                       
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
export default Navbar