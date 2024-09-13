/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./icon.scss";

interface IntroProps {
  socialMedia: string;
  URL: string;
}

export default function Intro({ socialMedia, URL }: IntroProps) {
  return (
    <div className="icon" id="icon">
      <a href={URL} className={"fa " + socialMedia}></a>
    </div>
  );
}
