interface IntroProps {
  socialMedia: string;
  URL: string;
  ariaLabel?: string; // Added ariaLabel for accessibility
}

export default function Intro({ socialMedia, URL, ariaLabel }: IntroProps) {
  return (
    <div className="icon" id="icon">
      <a
        href={URL}
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer"
        className={"fa " + socialMedia}
        aria-label={ariaLabel} // Accessibility for screen readers
      ></a>
    </div>
  );
}
