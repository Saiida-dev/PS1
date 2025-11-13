import React, { useRef, useEffect, useContext } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoo.png";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("header--scrolled");
      } else {
        headerRef.current.classList.remove("header--scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header header--visible" ref={headerRef}>
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            {/* Navigation Links */}
            <div className="nav__wrapper">
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="nav__right d-flex align-items-center gap-4">
              <ul className="menu nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <li className="nav__item username">{user.username}</li>
                    <li className="nav__item">
                      <button className="logout__link filled__btn" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav__item">
                      <NavLink
                        to="/login"
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink
                        to="/register"
                        className={(navClass) =>
                          navClass.isActive ? "active__link filled__btn" : "filled__btn"
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
