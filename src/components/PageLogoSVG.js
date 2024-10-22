import { SvgIcon, useTheme } from "@mui/material";
import logoImg from "../assets/shared/logo.png"

const PageLogo = ( { width = 96 , height = 96 } ) => {

    const theme = useTheme();
    const hexColor = theme.palette.text.primary;

    const rgb = hexColor.match(/[\da-f]{2}/gi).map(x => parseInt(x, 16));

    return (
        <SvgIcon viewBox={`0 0 ${width} ${height}`} sx={{ width: {width}, height: {height} }}>
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
                href={logoImg} // Replace with your image URL
                filter="url(#colorFilter)"
                width={width}
                height={height}
            />
        </SvgIcon>
    )
}

export default PageLogo