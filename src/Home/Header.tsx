import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Swal from "sweetalert2";

import { supabase } from "../data/Client";

export default function Header() {
  let navigate = useNavigate();
  const [username, setUsername] = React.useState();
  const [dropdownOpen, setOpen] = React.useState(false);

  const user = supabase.auth.user();

  useEffect(() => {
    setUsername(user?.user_metadata?.FN!);

    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  async function logout() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else {
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <header>
      <Nav tabs className="nav-bar__clz">
        <NavbarBrand tag="div" className="pl-2"></NavbarBrand>
        <Dropdown
          nav
          isOpen={dropdownOpen}
          toggle={toggle}
          className="h-100 ml-auto"
        >
          <DropdownToggle caret nav>
            {username}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={logout}>Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </header>
  );
}
