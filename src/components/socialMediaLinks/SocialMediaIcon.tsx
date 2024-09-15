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
