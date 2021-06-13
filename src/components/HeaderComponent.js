import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);

    }

    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    // handleLogin(event) {
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + " Password: " + this.password.value
    //         + " Remember: " + this.remember.checked);
    //     event.preventDefault();

    // }

    render() {
    return(
        <div>
        <Navbar dark expand="md">

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Subscirbe</ModalHeader>
            <ModalBody>

            <Form onSubmit={this.handleLogin}>
            {/* <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input} />
            </FormGroup> */}
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" required id="email" name="email"
                    innerRef={(input) => this.email = input}  />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="agree" required
                    innerRef={(input) => this.agree = input }  />
                    I Agree with webside policy
                </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Subscirbe</Button>
        </Form>
            </ModalBody>
        </Modal>

            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/Menu"><img src='assets/images/s-orange.png' height="30" width="41" alt='Orange' /></NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Home</NavLink>
                    </NavItem> 
                    {/* <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Subscirbe</Button>
                    </NavItem>
                </Nav>

                </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Orange </h1>
                        <p>Do you love food? Stay with Us-A food blog with simple and tasty recipes.  </p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    </div>
    );
  }
}

export default Header;