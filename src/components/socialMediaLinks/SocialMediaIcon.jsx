/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./icon.scss";
export default function Intro({ socialMedia, URL }) {
  return (
    <div className="icon" id="icon">
      <a href={URL} className={"fa " + socialMedia}></a>
    </div>
  );
}
