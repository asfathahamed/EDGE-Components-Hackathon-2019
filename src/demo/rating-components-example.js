import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  ToastContainer,
  toast
} from "mdbreact";
import RatingComponent from "../components/rating/js/rating-component.js";

class RatingPanelSection extends Component {
  render() {
    return (
      <>
      <MDBContainer>
        <MDBRow className="mt-4 mb-4">
          <MDBCol md="12" lg="12">
            <MDBCard className="ratingPanelSection">
            <MDBCardHeader color=" light-blue darken-1" className="h4 text-center py-4">
              Rating/Review Components
            </MDBCardHeader>
              <MDBCardBody>
                <MDBContainer>
                  <MDBRow className="mb-4">
                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="orange  lighten-1">
                          1/10 Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
                              }}
                              name="ratingOne"
                              theme={"bars-1to10"}
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
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="blue">
                          Horizontal Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
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
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="orange lighten-1">
                          1/10 Vertical Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              name="ratingThree"
                              reverse={true}
                              theme={"bars-horizontal"}
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
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
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="blue">
                          Square Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              name="ratingFour"
                              showValues={true}
                              theme={"bars-square"}
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
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
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="default-color lighten-1">
                          Text Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              name="ratingFive"
                              showValues={true}
                              showSelectedRating={false}
                              theme={"bars-pill"}
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
                              }}
                            >
                              <>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </>
                            </RatingComponent>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol lg="6" sm="6">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="default-color lighten-1">
                          Text Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              name="ratingSix"
                              reverse={true}
                              theme={"bars-reversed"}
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
                              }}
                            >
                              <>
                                <option value="Strongly Agree">
                                  Strongly Agree
                                </option>
                                <option value="Agree">Agree</option>
                                <option value="Neither Agree or Disagree">
                                  Neither Agree or Disagree
                                </option>
                                <option value="Disagree">Disagree</option>
                                <option value="Strongly Disagree">
                                  Strongly Disagree
                                </option>
                              </>
                            </RatingComponent>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol lg="12" sm="12">
                      <MDBCard
                        className="text-center"
                        style={{ marginTop: "1rem" }}
                      >
                        <MDBCardHeader color="default-color lighten-1">
                          Star Rating
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <RatingComponent
                              name="ratingSeven"
                              showValues={false}
                              showSelectedRating={false}
                              theme={"css-stars"}
                              selectionCallback={(value, text) => {
                                toast.info("Thank you for rating " + value, {
                                  position: "top-right"
                                });
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
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                  <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                  />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    );
  }
}

export default RatingPanelSection;
