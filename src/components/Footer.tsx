import logo_amnh from "../assets/logo_amnh.jpg";
import logo_barnard from "../assets/logo_barnard.jpg";
import logo_citadel from "../assets/logo_citadel.webp";
import logo_cloud from "../assets/logo_cloud.png";
import logo_GM from "../assets/logo_GM.jpg";
import logo_sa from "../assets/logo_sa.png";
import logo_smith from "../assets/logo_smith.webp";
import logo_seo from "../assets/logo_seo.png";
import logo_blank from "../assets/logo_blank.webp";

function Footer() {
  return (
    <>
      <div className="footer row">
        <div className="row">
          <div className="col">
            <h1>AFFILIATIONS</h1>
            <div className="row d-flex align-items-center">
              <div className="col">
                <a href="https://www.amnh.org/" className="round noround">
                  <img src={logo_amnh} title="AMNH" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.seo-usa.org/"
                  className="round noround txt_logo_bg"
                >
                  <img src={logo_seo} title="seo" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.barnard.edu/" className="round">
                  <img src={logo_barnard} title="barnard" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.smithschool.org/" className="round">
                  <img src={logo_smith} title="smith" className="rounded" />
                </a>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col">
                <a href="https://www.scholastic.com/" className="round">
                  <img src={logo_sa} title="sa" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.giantmachines.com/"
                  className="round noround txt_logo_bg"
                >
                  <img src={logo_GM} title="GM" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.cloud-kent.com/" className="round noround">
                  <img src={logo_cloud} title="cloud" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.citadel.com/"
                  className="round noround txt_logo_bg citadel"
                >
                  <img src={logo_citadel} title="citadel" className="rounded" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h1>SKILLS</h1>
            <div className="row">
              <div className="col">Java</div>
              <div className="col">Javascript</div>
              <div className="col">HTML/CSS</div>
              <div className="col">Typescript</div>
              <div className="col">Unity</div>
            </div>
            <div className="row">
              <div className="col">Python</div>
              <div className="col">Flask</div>
              <div className="col">MongoDB</div>
              <div className="col">C#</div>
              <div className="col">Adobe CC</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
