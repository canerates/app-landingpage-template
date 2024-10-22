import { styled } from "@mui/material";
import logoImg from "../assets/shared/logo.png"

export const StyledPageLogoImage = styled("img")(({ theme, width, height }) => ({
    animation: "fadeIn",
    animationDuration: "2s",
    width: width ? `${width}px` : "96px",
    height: height ? `${height}px` : "96px"
}));


const PageLogo = ( { width , height } ) => {

    return (
        <StyledPageLogoImage 
            alt="Logo" 
            src={logoImg}
            width={width}
            height={height}
        />
    )
}

export default PageLogo