
import { useLocation } from "react-router-dom";

export default function useColor() {

  const location = useLocation();
  const root = document.querySelector(':root');

  const colorChange = () =>{
    if(location.pathname === '/'){
      root.style.setProperty('--primary-color-bg', '#CBE4DE')
      root.style.setProperty('--secondary-color-bg', '#313b57')
      root.style.setProperty('--primary-color-text','#CBE4DE')
      root.style.setProperty('--secondary-color-text', '#313b57')
      root.style.setProperty('--filter', 'invert(17%) sepia(9%) saturate(3003%) hue-rotate(187deg) brightness(98%) contrast(82%)')
      root.style.setProperty('--filter1', 'invert(91%) sepia(22%) saturate(140%) hue-rotate(115deg) brightness(95%) contrast(91%)')
    }else if(location.pathname === '/about'){
      root.style.setProperty('--primary-color-bg', '#40513B')
      root.style.setProperty('--secondary-color-bg', '#40513B')
      root.style.setProperty('--primary-color-text','#EDF1D6')
      root.style.setProperty('--secondary-color-text', '#EDF1D6')
      root.style.setProperty('--filter', 'invert(91%) sepia(11%) saturate(355%) hue-rotate(33deg) brightness(107%) contrast(89%)')
      root.style.setProperty('--filter1', 'invert(96%) sepia(6%) saturate(663%) hue-rotate(23deg) brightness(103%) contrast(89%)')
    }else if(location.pathname === '/contact'){
      root.style.setProperty('--primary-color-bg', '#A9907E')
      root.style.setProperty('--secondary-color-bg', '#A9907E')
      root.style.setProperty('--primary-color-text','#F3DEBA')
      root.style.setProperty('--secondary-color-text', '#F3DEBA')
      root.style.setProperty('--filter', 'invert(92%) sepia(34%) saturate(433%) hue-rotate(315deg) brightness(99%) contrast(93%)')
      root.style.setProperty('--filter1', 'invert(96%) sepia(6%) saturate(663%) hue-rotate(23deg) brightness(103%) contrast(89%)')
    }else if(location.pathname === '/projects'){
      root.style.setProperty('--primary-color-bg', '#222831')
      root.style.setProperty('--secondary-color-bg', '#222831')
      root.style.setProperty('--primary-color-text','#EEEEEE')
      root.style.setProperty('--secondary-color-text', '#EEEEEE')
      root.style.setProperty('--filter', 'invert(100%) sepia(0%) saturate(7380%) hue-rotate(328deg) brightness(125%) contrast(87%)')
      root.style.setProperty('--filter1', 'invert(11%) sepia(8%) saturate(2027%) hue-rotate(177deg) brightness(94%) contrast(87%)')
    }
  }

  return (
   [colorChange]
  )
}
