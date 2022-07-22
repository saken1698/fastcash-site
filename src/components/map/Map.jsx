import DG from "2gis-maps";
import React from "react";

export function Map(props) {
  const elRef = React.useRef();
  const [hasMap, setHasMap] = React.useState(false);

  React.useEffect(() => {
    DG.then(() => {
      if (!hasMap) {
        setHasMap(true);
        DG.then(() => {
          const map = DG.map(elRef.current, {
            center: [43.229872, 76.950424],

            zoom: 13,
          });
          DG.marker([43.229872, 76.950424]).addTo(map);
        });
      }
    });
  }, [hasMap]);

  return (
    <div
      ref={elRef}
      style={{
        width: "100%",
        height: props.height,
      }}
    ></div>
  );
}
