
import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    console.log(props)
    console.log(props.leaders)
    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader = {leader} />
        );
    });

    function RenderLeader({leader}) {
        console.log(leader)
        return(
            <div key={leader.id} className="col-12 mt-5">
                <Media tag="li" >
                    <Media left middle>
                        <Media object src={leader.image} alt={leader.name} >

                        </Media>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
            );
        }



    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Orange</h2>
                  
                    <p>Orange is a recipe & travel blog.
                        
Interested in working with us? Occasionally we create sponsored posts for brands that are a good fit. We’re also available for recipe development & photography. </p>
<p>Send us a quick  <a href="mailto:safia.02202@gmail.com">email </a>  for more info!</p>


                </div>
                <div className="col-12 col-md-5">
                    <img src='/assets/images/travel.jpeg' alt="travel"></img>
                </div> 
                
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Orange </p>
                                <footer className="blockquote-footer">  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have A Fun Life.
                                <cite title="Source Title">The good life being</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Author</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;