import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const CommonNavbar = (props) => {
  const { query } = useRouter()
  const {name = "USER"} = query; 
  return (
    <>
      <Navbar className="navbar-top" expand="md" id="navbar-main">
        <Container fluid>
          <Link href="/dashboard">
            <a className="h4 mb-0 text-uppercase d-none d-lg-inline-block">
              {props.brandText}
            </a>
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0"  style={{height:"50px",width:"200px"}}>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/user.png")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold" >
                      <h3>{name.toUpperCase()} </h3>
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <Link href="/profile">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                </Link>
                <Link href="/profile">
                  <DropdownItem>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                </Link>
                <Link href="/profile">
                  <DropdownItem>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                </Link>
                <Link href="/help">
                  <DropdownItem>
                    <i className="ni ni-support-16" />
                    <span>Help</span>
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CommonNavbar;
