import { useLayoutEffect, useState } from "react";

export const useWindowPosition = (id: string) => {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      if (window) {
        const offSetHeight = window!.document!.getElementById(id)!.offsetHeight;
        // console.log("offSetHeight", offSetHeight); // Maximum Height of the current Page
        // console.log("window.pageYOffset", window.pageYOffset); // current point in the current page

        if (window.pageYOffset > offSetHeight * 0.7) {
          setAnimation(true);
        }
      }
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);

  return animation;
};
