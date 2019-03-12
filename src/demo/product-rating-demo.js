import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  toast
} from "mdbreact";
import {MDBCardImage, MDBCardTitle, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBView, MDBMask } from "mdbreact";
import RatingComponent from "../components/rating/js/rating-component.js";

class ProductRatingDemo extends Component{

  newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  }

  overallRatingValue = 0;


  state = {
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
    if(this.overallRatingValue > 0) {
      this.reviewNow();
    }
  }

  reviewNow = () => {
    toast.info("Thank you for the overall rating of " + this.overallRatingValue, {
      position: "top-center"
    });
    this.overallRatingValue = 0;

  }

  overallRating = (value,text) => {
        this.overallRatingValue = value;
  }

  render() {
    return (
      <>
      <MDBContainer style={{paddingTop: '40px'}}>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shirt</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Denim Shirt</a>
                </strong>
              </MDBCardTitle>
              <div>
              <RatingComponent
                name="denim-shirt"
                showValues={false}
                theme={"css-stars"}
                showSelectedRating={false}
                selectionCallback={(value, text) => {
                }}
              >
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </>
              </RatingComponent>
              </div>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong><span>&#8377; &nbsp;</span>4900</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-share-alt grey-text ml-3"
                    tooltipContent="Share"
                  />
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport Wear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Sweatshirt</a>
                </strong>
              </MDBCardTitle>
              <div>
              <RatingComponent
                name="sweatshirt"
                showValues={false}
                showSelectedRating={false}
                theme={"css-stars"}
                selectionCallback={(value, text) => {
                }}
              >
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </>
              </RatingComponent>
              </div>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong><span>&#8377; &nbsp;</span>6000</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-share-alt grey-text ml-3"
                    tooltipContent="Share"
                  />
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://images.samsung.com/in/smartphones/galaxy-s10/buy/m-img-s10e-prismblack-01.png"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Samsung</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Galaxy s10</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                <MDBBtn color="info" onClick={this.toggle(14)}>Review</MDBBtn>
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong><span>&#8377; &nbsp;</span>67000</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-share-alt grey-text ml-3"
                    tooltipContent="Share"
                  />
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce >
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Black jacket</a>
                </strong>
              </MDBCardTitle>
              <div>
              <RatingComponent
                name="blackjacket"
                showValues={false}
                showSelectedRating={false}
                theme={"css-stars"}
                selectionCallback={(value, text) => {
                }}
              >
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </>
              </RatingComponent>
              </div>
              <MDBCardText className="blackjacket">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong><span>&#8377; &nbsp;</span>2000</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-share-alt grey-text ml-3"
                    tooltipContent="Share"
                  />
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Create Review</MDBModalHeader>
          <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" lg="12" sm="12">
                <form>
                  <p className="h4 mb-4">Rate features</p>
                  <p className="grey-text">
                    Camera
                  </p>
                  <RatingComponent
                    name="ratingCamera"
                    showValues={true}
                    showSelectedRating={false}
                    theme={"bars-square"}
                    selectionCallback={(value, text) => {
                    }}
                  >
                    <>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </>
                  </RatingComponent>

                  <p className="grey-text">
                    Screen Quality
                  </p>
                  <RatingComponent
                    name="ratingScreen"
                    showValues={true}
                    showSelectedRating={false}
                    theme={"bars-square"}
                    selectionCallback={(value, text) => {
                    }}
                  >
                    <>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </>
                  </RatingComponent>


                  <p className="grey-text">
                    Battery Life/Charging
                  </p>
                  <RatingComponent
                    name="ratingBattery"
                    showValues={true}
                    showSelectedRating={false}
                    theme={"bars-square"}
                    selectionCallback={(value, text) => {
                    }}
                  >
                    <>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </>
                  </RatingComponent>



                  <p className="h4 mb-4 mt-4">
                    Overall Rating
                  </p>
                  <RatingComponent
                    name="ratingOverall"
                    showValues={true}
                    showSelectedRating={false}
                    theme={"bars-square"}
                    selectionCallback={(value, text) => {
                      this.overallRating(value,text);
                    }}
                  >
                    <>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </>
                  </RatingComponent>

                  <p className="h4 mb-4 mt-4">
                    Write Review
                  </p>

                  <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder={"What do you like or dislike?"}
                  />

                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.toggle(14)}>Review Now</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
  <MDBContainer>
      <MDBCard
            className="my-5 px-5 mx-auto"
            style={{ fontWeight: 300, maxWidth: "90%" }}
          >
            <MDBCardBody style={{ paddingTop: 0 }}>
              <h2 className="h1-responsive font-weight-bold my-5 text-center">
                Rate Documentaries
                </h2>
              <MDBRow>
                <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                      <a href="#!">
                        <MDBBadge color="pink">
                          <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                          Adventure
                          </MDBBadge>
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <div className="d-flex justify-content-between" style={this.newsStyle}>
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="font-weight-bold">
                        ABC Documentary
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                  <div style={{textAlign: "center"}}>
                  <RatingComponent
                    name="ratingTwo"
                    showValues={false}
                    theme={"bars-movie"}
                    selectionCallback={(value, text) => {
                      toast.info("Thank you for rating " + value, {
                        position: "top-right"
                      });
                    }}
                  >
                    <>
                      <option value="Bad">Bad</option>
                      <option value="Mediocre">Mediocre</option>
                      <option value="Good">Good</option>
                      <option value="Awesome">Awesome</option>
                    </>
                  </RatingComponent>
                  </div>

                </MDBCol>

                <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                      <a href="#!">
                        <MDBBadge color="deep-orange">
                          <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                          Travel
                          </MDBBadge>
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <div className="d-flex justify-content-between" style={this.newsStyle}>
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="font-weight-bold">
                        XYZ Documentary
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                  <div style={{textAlign: "center"}}>
                  <RatingComponent
                    name="ratingTwo"
                    showValues={false}
                    theme={"bars-movie"}
                    selectionCallback={(value, text) => {
                      toast.info("Thank you for rating " + value, {
                        position: "top-right"
                      });
                    }}
                  >
                    <>
                      <option value="Bad">Bad</option>
                      <option value="Mediocre">Mediocre</option>
                      <option value="Good">Good</option>
                      <option value="Awesome">Awesome</option>
                    </>
                  </RatingComponent>
                  </div>



                </MDBCol>

                <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                      <a href="#!">
                        <MDBBadge color="success">
                          <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                          Nature
                          </MDBBadge>
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <div className="d-flex justify-content-between" style={this.newsStyle}>
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="font-weight-bold">
                        JSH Documentary
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                  <div style={{textAlign: "center"}}>
                  <RatingComponent
                    name="ratingTwo"
                    showValues={false}
                    theme={"bars-movie"}
                    selectionCallback={(value, text) => {
                      toast.info("Thank you for rating " + value, {
                        position: "top-right"
                      });
                    }}
                  >
                    <>
                      <option value="Bad">Bad</option>
                      <option value="Mediocre">Mediocre</option>
                      <option value="Good">Good</option>
                      <option value="Awesome">Awesome</option>
                    </>
                  </RatingComponent>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
            </MDBContainer>
      </>
    )
  }
}

export default ProductRatingDemo;
