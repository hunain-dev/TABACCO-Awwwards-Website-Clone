const Textarea = ({ leftData = [], rightData = [], textColor = "black" }) => {
  return (
    <div className="textarea">
      <div className="textarealeft">
        {leftData.length > 0 ? (
          leftData.map((item, index) =>
            typeof item === "object" ? (
              <div key={index} className="sectionleft">
                <h2 key={index} className="left-heading" style={{ color: textColor }}>
                  {item.heading}
                </h2>
<h4 key={index} className="leftparagraph" style={{ color: textColor }}>
  {item.paragraph}
</h4>
              </div>
            ) : (
              <p key={index} className="left-text" style={{ color: textColor }}>
                {item}
              </p>
            )
          )
        ) : (
          <p style={{ color: "gray" }}>No left data available.</p>
        )}
      </div>

      <div className="textarearight">
        {rightData.length > 0 ? (
          rightData.map((item, index) =>
            typeof item === "object" ? (
              <div key={index} className="sectionright">
                <h2 className="right-heading" style={{ color: textColor }}>
                  {item.heading}
                </h2>
                <h4 className="right-paragraph" style={{ color: textColor }}>
                  {item.paragraph}
                </h4>
              </div>
            ) : (
              <p
                key={index}
                className="right-text"
                style={{ color: textColor }}
              >
                {item}
              </p>
            )
          )
        ) : (
          <p style={{ color: "gray" }}>No right data available.</p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
