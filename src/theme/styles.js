const styles = {
    global: {
      "html, body": {
        backgroundColor: "#E4E9EC",
        color: "#000000",
      },
      svg: {
        cursor: "pointer",
      },
      ".table": {

      },
      ".tr": {
        display: "flex",
        width: "fit-content",
      },
      ".th, .td": { backgroundColor: "#FAFAFA" },
      ".th": {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black.400",
        padding: "0.5rem",
        fontWeight: "bold",
        fontSize: "xs",
        textTransform: "uppercase",
        textAlign: "center",
      },
      
      ".tr .th:first-child": {
        borderRadius: "10px 0 0 10px",
      },
      ".tr .th:last-child": {
        borderRadius: "0 10px 10px 0",
      },

      ".td > input": {
        m: "1",
        padding: "0.2rem",
        bg: "transparent",
        maxW: "100%",
        borderRadius: "10px",
      },
      ".date-wrapper": {
        display: "flex",
        alignItems: "center",
        w: "100%",
        h: "100%",
      },
      ".resizer": {
        position: "absolute",
        opacity: 0,
        top: 0,
        right: 0,
        h: "100%",
        w: "5px",
        bg: "#27bbff",
        cursor: "col-resize",
        userSelect: "none",
        touchAction: "none",
        borderRadius: "6px",
      },
      ".resizer.isResizing": {
        bg: "#2eff31",
        opacity: 1,
      },
      "*:hover > .resizer": {
        opacity: 1,
      },
    },
  };
  
  export default styles;