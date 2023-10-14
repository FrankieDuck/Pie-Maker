import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const styles = {
  logo: {
    fontSize: "22px",
    color: "white",
    paddingRight: "10px",
    display: "flex",
    alignItems: "flex-start",
  },
  text: {
    fontSize: "18px",
    color: "white",
  },
  container: {
    paddingRight: "600px",
    height: "80px",
  },
  searchBar: {
    paddingLeft: "380px",
  },
  cart: {
    paddingLeft: "25px",
  },
  title: {
    fontSize: "18px",
    color: "white",
    paddingLeft: "540px",
  },
};
function Header() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Navbar,
      { bg: "dark", expand: "lg", style: styles.container },
      React.createElement(
        Container,
        null,
        React.createElement(
          Navbar.Brand,
          { style: styles.logo },
          React.createElement(
            "a",
            { href: "/" },
            React.createElement("img", {
              alt: "PieIcon",
              src: "/images/pie_two.svg",
              width: "50",
              height: "50",
            })
          )
        ),
        React.createElement(Navbar.Toggle, {
          "aria-controls": "basic-navbar-nav",
        }),
        React.createElement(
          Navbar.Collapse,
          { id: "basic-navbar-nav" },
          React.createElement(
            Nav,
            { className: "me-auto" },
            React.createElement(
              Nav.Link,
              { href: "/", style: styles.text },
              "Home"
            ),
            React.createElement(
              Nav.Link,
              { href: "/menu", style: styles.text },
              "Menu"
            ),
            React.createElement(
              Nav.Link,
              { href: "/custom", style: styles.text },
              "Custom"
            ),
            React.createElement(
              Navbar.Brand,
              { style: styles.title },
              React.createElement("h2", null, "FAT FRANK'S PIES")
            )
          ),
          React.createElement(
            Form,
            { className: "d-flex", style: styles.searchBar },
            React.createElement(Form.Control, {
              style: { width: "240px" },
              type: "search",
              placeholder: "Search",
              className: "me-2",
              "aria-label": "Search",
            }),
            React.createElement(
              Button,
              { variant: "outline-success" },
              "Search"
            )
          ),
          React.createElement(
            "div",
            { style: styles.cart },
            React.createElement(
              "a",
              { href: "/checkout" },
              React.createElement("img", {
                alt: "",
                src: "/images/Logos/cart.png",
                width: "50",
                height: "50",
                href: "",
              })
            )
          )
        )
      )
    )
  );
}
export default Header;
