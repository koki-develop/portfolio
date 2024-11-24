import FontFaceObserver from "fontfaceobserver";
import { useEffect, useState } from "react";

export const useFontLoaded = (fontFamilyName: string) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver(fontFamilyName);

    font.load().finally(() => {
      setShow(true);
    });
  }, [fontFamilyName]);

  return show;
};
