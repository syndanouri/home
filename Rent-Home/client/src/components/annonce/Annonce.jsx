import React, { useState } from "react";
import { addannonce } from "../../api/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  // MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Annonce = (props) => {
  const [Name, setname] = useState("");
  const [City, setcity] = useState("");
  const [Type, settype] = useState("");
  const [Price, setprice] = useState("");
  const [Message, setmessage] = useState("");
  const [Rooms, setrooms] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async () => {
    await addannonce({ Name, City, Type, Price, Message, Rooms })
      .then((res) => {
        console.log(res);
        navigate("/signIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Create <br />
            <span style={{ color: "#27ae60" }}>a new annonce</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    id="form1"
                    type="Name"
                    onChange={(e) => setname(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="City"
                    id="form1"
                    type="City"
                    onChange={(e) => setcity(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Type"
                    id="form1"
                    type="Type"
                    onChange={(e) => settype(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Price"
                    id="form1"
                    type="Price"
                    onChange={(e) => setprice(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Message"
                id="form1"
                type="Message"
                onChange={(e) => setmessage(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Rooms"
                id="form1"
                type="Romms"
                onChange={(e) => setrooms(e.target.value)}
              />

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                style={{ backgroundColor: "#27ae60" }}
                onClick={() => handelSubmit()}
              >
                Add Annonce
              </MDBBtn>

              <div className="text-center">
                <p>or contact us with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Annonce;