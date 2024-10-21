const useSmoothScroll = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,// for some unknown reason, this is the only way to get it working on both iOS and others.
        behavior: "smooth",
      });
    }
  };

  return scrollToElement;
};

export default useSmoothScroll;