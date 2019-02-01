import React from "react";
import "../css/footer.css";

const Footer = (props) => {
  return (
    <footer style={{backgroundColor: props.background}}>
      <p>
        This is a Free Code Camp project made by Alex Gouge-Schajer, using{" "}
        <a href="https://gist.github.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/">
          camperbot
        </a>
        's random quote library
      </p>
      Icons and favicon made by
      <a className="footerA" href="https://www.freepik.com/" title="Freepik">
        Freepik
      </a>
      from
      <a className="footerA" href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
      <br />
      and is licensed by
      <a
        className="footerA"
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
      >
        CC 3.0 BY
      </a>
    </footer>
  );
};

export default Footer;
