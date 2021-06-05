import React from "react";

function Footer() {
  var current_yr = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {current_yr} </p>
    </footer>
  );
}

export default Footer;
