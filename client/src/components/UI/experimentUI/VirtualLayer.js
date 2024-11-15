import { Environment, Billboard } from "@react-three/drei";
import Overlay from "../../experiment/Fundamentals/2D_Overlay";
import Overlay_off from "../../experiment/Fundamentals/2D_Overlay_Cam_off";
import { useSocketContext } from "../../../services/SocketContext";
import { useAppContext } from "../../../services/AppContext";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

/**
 * 3D Experiment Visualization and Overview Camera Stream
 * 
 * @description Within this recat component, the visualisation of the 3D model or the overview camera stream of the experiment is handled as the background of the React app.
 * 
 * @param {string} height - For scaling the content (is specified in pixels)
 * @param {string} width - For scaling the content (is specified in pixels)
 *  
 * @returns {React.ReactElement} Background of the web application  
 */
const VirtualLayer = (...props) => {
  const appCtx = useAppContext();
  const socketCtx = useSocketContext();

  return (
    // console.log(appCtx.showVirtualLayer),
    <Overlay_off
        toggleSelect={appCtx.toggleSelectedComp}
        selected={appCtx.selectedComps}
        socket={socketCtx.socket}
        showTags={appCtx.showTags}
    />
  );

  /*
  if (!appCtx.showVirtualLayer) {
    // Cam off
    
  } else {  
    // Cam on
    return (
      <Overlay
          toggleSelect={appCtx.toggleSelectedComp}
          selected={appCtx.selectedComps}
          socket={socketCtx.socket}
          showTags={appCtx.showTags}
      />
    );
  }*/
}


export default VirtualLayer;
