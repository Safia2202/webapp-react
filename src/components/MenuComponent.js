
import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardSubtitle,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


    function RednerMenuItem({dish, onClick}) {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardSubtitle>Category: {dish.category}</CardSubtitle>
                        {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>  */}
                    </CardBody>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) =>{

            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RednerMenuItem dish={dish}/>
                </div>
                )
            });

            if (props.dishes.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(
                <div className="container">
                    <div className="row">
                        {/* <Breadcrumb>
                            <BreadcrumbItem><Link to="/Menu">Home</Link></BreadcrumbItem>
                            {/* <BreadcrumbItem active>Menu</BreadcrumbItem> *
                        </Breadcrumb> */}
                        <div className="col-12">
                            <h3>Collection</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;