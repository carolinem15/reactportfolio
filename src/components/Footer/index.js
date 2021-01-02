import React from "react";

const styles = {
    footerStyle: {
        background: "lavender",
        textAlign: "center",
        left: 0,
        bottom: 0
    }
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <p>Created using React.js</p>
    </footer>
  );
}

export default Footer;
