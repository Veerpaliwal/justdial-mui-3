import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginModal({ show, handleClose }) {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    if (!mobile) {
      alert("Please enter your mobile number");
      return;
    }
    alert(`OTP sent to ${mobile}`);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      // Strapi ko bhejo
      const res = await axios.post("http://localhost:1337/api/auth/google/callback", {
        token,
      });

      console.log("Strapi Response:", res.data);
      alert("Google Login Successful!");
      handleClose();
    } catch (err) {
      console.error("Google Login Error:", err);
      alert("Google login failed!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">
          <img src="/logo.png" alt="Justdial" height="35" />
          <h6 className="mt-2">Welcome</h6>
          <p className="mb-0 text-muted">Login for a seamless experience</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Enter Mobile Number</Form.Label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <Form.Control
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </Form.Group>

          <Form.Check
            type="checkbox"
            label={
              <span>
                I Agree to{" "}
                <a href="#" className="text-primary">
                  Terms and Conditions
                </a>{" "}
                &{" "}
                <a href="#" className="text-primary">
                  Privacy Policy
                </a>
              </span>
            }
            defaultChecked
            className="mt-3"
          />

          <Button
            className="w-100 mt-3"
            variant="primary"
            onClick={handleLogin}
          >
            LOGIN WITH OTP
          </Button>

          <div className="text-center my-2 text-muted">Or Login Using</div>

          {/* ✅ Google Login Button */}
          <GoogleOAuthProvider clientId="688007779719-qefjh4ej1l1sat3bi8f5tgdh7dkumqc6.apps.googleusercontent.com">
            <div className="d-flex justify-content-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  console.log("Google Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>

          <div className="text-center mt-2">
            <a href="#" onClick={handleClose}>
              Skip for now
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
