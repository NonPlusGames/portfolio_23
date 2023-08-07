import TextAdv from "./components/TextAdv";
import Menu from "./components/Menu";
import Web from "./components/Web";
import { useEffect, useState } from "react";
import "./App.css";
import wta from "./assets/wta.png";
import resume from "./assets/resume.jpg";
import Rafael_Resume from "./assets/Rafael_Resume.pdf";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [fade, setFade] = useState("fadeOff");
  /*
  keeps track of what the current page is
  by saving it to [currentPage] after it
  recieves an [item] from the child as a prop
  */
  const handleSelectItem = (item: string) => {
    setCurrentPage(item);
  };
  useEffect(() => {
    const timeout = setInterval(() => {
      setFade("fadeOn");
    }, 2000);
  }, [currentPage]);

  return (
    <>
      <div className="portfolio container-fluid">
        <div className="row">
          <Menu
            targetScale={0.45}
            currentPage={currentPage}
            onSelectItem={handleSelectItem}
          />
        </div>
        <div className="row page d-flex justify-content-center">
          {currentPage == "game" && (
            <div className="game col">
              <a
                href="https://whosthatasciimon-rmota29619.b4a.run/#"
                className="wta"
                style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
              >
                <img className="rounded" src={wta} width="100%" />
              </a>
              <br />
              <br />
              <div
                className="tacomp rounded row"
                style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
              >
                <TextAdv />
              </div>
            </div>
          )}
          {currentPage == "web" && (
            <div
              className="web rounded row"
              style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
            >
              <Web />
            </div>
          )}
          {currentPage == "resume" && (
            <div
              className="resume row"
              style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
            >
              <a href={Rafael_Resume}>
                <img className="rounded" src={resume} width="100%" />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
