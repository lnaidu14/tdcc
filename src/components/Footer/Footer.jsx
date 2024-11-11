import { Card } from "primereact/card";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Card className="footer">
        <div className="footer-items">
          <div className="footer-copyright">
            Copyright © 2024 - TechnoDevelop Corporation
          </div>
          <a to={"https://www.linkedin.com/in/dr-prakash-naidu-a1b25633/"}>
            <div className="footer-logo">
              <img src="" alt="" />
            </div>
          </a>

          <div className="footer-logo">Gmail</div>
        </div>
      </Card>
    </>
  );
}
