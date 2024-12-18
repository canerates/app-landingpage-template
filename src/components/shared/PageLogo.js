import { SvgIcon, useTheme, styled } from "@mui/material";
import logoImg from "../../assets/logo.png"

export const StyledPageLogoImage = styled("img")(({ theme, width, height }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: width ? `${width}px` : "96px",
  height: height ? `${height}px` : "96px",
  
}));

const PageLogo = ({ width = 96, height = 96, isSVG = false, isHovered }) => {

  const theme = useTheme();
  const hexColor = isHovered ?  theme.palette.text.secondary : theme.palette.text.primary;

  const rgb = hexColor.match(/[\da-f]{2}/gi).map(x => parseInt(x, 16));

  const svgLogo = (
    <SvgIcon viewBox={`0 0 ${width} ${height}`} sx={{ width: { width }, height: { height } }}>
      <defs>
        <filter id="colorFilter">
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${rgb[0] / 255}
                      0 0 0 0 ${rgb[1] / 255}
                      0 0 0 0 ${rgb[2] / 255}
                      0 0 0 1 0`}
          />
        </filter>
      </defs>
      <image
        href={logoImg}
        filter="url(#colorFilter)"
        width={width}
        height={height}
      />
    </SvgIcon>
  );

  const logo = (
    <StyledPageLogoImage
      alt="Logo"
      src={logoImg}
      width={width}
      height={height}
    />
  );

  return (
    <>
      {isSVG ? svgLogo : logo}
    </>

  )
}

export default PageLogo