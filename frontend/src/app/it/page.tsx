"use client";

import ReactFullpage from "@fullpage/react-fullpage";

const It: React.FC = () => {
  return (
    <ReactFullpage
      debug={true}
      anchors={["firstPage", "secondPage", "3rdPage"]}
      navigationTooltips={["First Section", "Second Section", "Third Section"]}
      navigation={true}
      slidesNavigation={true}
      controlArrows={false}
      licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
      credits={{ enabled: false }}
      render={() => (
        <ReactFullpage.Wrapper>
          {/* Section 1 */}
          <div className="section">
            <div className="intro">
              <h1>IT Services</h1>
              <p>Welcome to our IT Services section.</p>
            </div>
          </div>
          {/* Section 2 with slides */}
          <div className="section">
            <div className="slide">
              <h1>Section 2</h1>
            </div>
            <div className="slide">
              <h1>Slide 2.2</h1>
            </div>
            <div className="slide">
              <h1>Slide 2.3</h1>
            </div>
          </div>
          {/* Section 3 */}
          <div className="section">
            <h1>Section 3</h1>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default It;