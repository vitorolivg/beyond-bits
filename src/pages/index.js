import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
};
const headingAccentStyles = {
  color: "#45B69C",
};
const paragraphStyles = {
  marginBottom: 48,
};
const linkStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
  textDecoration: "none",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Beyond Bits</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          — you just spotted a wonderful opportunity!{" "}
        </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Do you want this domain?{" "}
        <a style={linkStyles} href="mailto:vitor.gomes@algoritmoprudente.com">
          Please reach out!
        </a>
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  );
};

export default IndexPage;
