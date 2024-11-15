import { useSocketContext } from '../../../services/SocketContext';
import { MdInfoOutline, MdOutlineMenuBook } from 'react-icons/md';
import { useAppContext } from '../../../services/AppContext';
import { ThemeProvider, Tooltip } from '@mui/material';
import { FaTags, FaLightbulb } from 'react-icons/fa';
import { BsCamera, BsBox} from 'react-icons/bs';
import { ImEnter, ImExit } from 'react-icons/im';
import { GiLaserWarning } from 'react-icons/gi';
import styles from '../CSS/NavBar.module.css';
import { theme } from './../templates/Theme';
import { memo } from 'react';
import { isEqual } from 'lodash';

/**
 * Navigation bar component 
 * 
 * @description React components returns the styling and functionality of the navigation bar. Within this file all onclick events 
 * on the buttons in the bar and their color changes are also handled.
 * 
 * @returns {React.ReactElement} Navigation bar component  
 */
const NavBar = () => {
    const appCtx = useAppContext();
    const socketCtx = useSocketContext();

    // Icon colors intialization and change of these, if condition is fulfilled
    let connectionStatusColor = '';
    if (socketCtx.connected) { connectionStatusColor = 'white' }
    let showTagsColor = '';
    if (appCtx.showTags) { showTagsColor = 'white' }
    let cameraStatusColor = '';
    if (appCtx.showCam) { cameraStatusColor = 'white' }
    let showInfoWindowColor = '';
    if (appCtx.showInfoWindow) { showInfoWindowColor = 'white' }
    let showBeamColor = '';
    if (appCtx.showBeam) { showBeamColor = 'white' }
    let showVirtualLayerColor = '';
    if (!appCtx.showVirtualLayer) { showVirtualLayerColor = 'white' }
    let showManualWindowColor = '';
    if (appCtx.showManualWindow) { showManualWindowColor = 'white' }
    let lightSource = '';
    if (appCtx.lightSource) { lightSource = 'white' }

    return (
        <div id='navbar' className={styles.navbar} >
            <ThemeProvider theme={theme} >
                <h1>XR TwinLab - Fundamentals</h1>
                {/* If underConstruction, then the following is displayed */}
                {appCtx.underConstruction && <h2>Experiment under construction! Some functions may not work!</h2>}

                {/* Icons of the navigation bar, their underlying function calls and the tooltips for the description of the icon functionality. */}
                <div className={styles.navMenu}>
                    <ul>
                        <Tooltip title={(socketCtx.connected) ? 'Disconnect' : 'Connect'}>
                            <li onClick={() => { (socketCtx.connected) ? socketCtx.toggleConnection() : appCtx.toggleLogin(); }}> {(socketCtx.connected) ? <ImExit size={25} color={connectionStatusColor} /> : <ImEnter size={25} color={connectionStatusColor} />} </li>
                        </Tooltip>

                        <Tooltip title='Labels'>
                            <li onClick={appCtx.toggleShowTags}><FaTags size={25} color={showTagsColor} /></li>
                        </Tooltip>

                        <Tooltip title='Cam'>
                            <li onClick={appCtx.toggleCam}><BsCamera size={26} color={cameraStatusColor} /></li>
                        </Tooltip>

                        {/*
                        <Tooltip title='Model'>
                            <li onClick={appCtx.toggleShowVirtualLayer}><BsBox size={26} color={showVirtualLayerColor} /></li>
                        </Tooltip>
                        */}

                        <Tooltip title='Beam Path'>
                            <li onClick={appCtx.toggleShowBeam}><GiLaserWarning size={25} color={showBeamColor} /></li>
                        </Tooltip> 

                        <Tooltip title='Light Source'>
                            <li onClick={appCtx.toggleHandleLightSource}><FaLightbulb size={24} color={lightSource} /></li>
                        </Tooltip>

                        <Tooltip title='Manual'>
                            <li onClick={appCtx.toggleShowManualWindow}><MdOutlineMenuBook size={26} color={showManualWindowColor} /></li>
                        </Tooltip>

                        <Tooltip title='Info'>
                            <li onClick={appCtx.toggleShowInfoWindow}><MdInfoOutline size={26} color={showInfoWindowColor} /></li>
                        </Tooltip>
                    </ul>
                </div>
            </ThemeProvider>
        </div>
    );
}
export default memo(NavBar, isEqual)
