import { Typography, styled, Box, Button } from "@mui/material"
import CButton from "../shared/CButton"

const StyledTechnologyBox = styled(Box)(({ theme }) => ({
    height: "90%",
    width: "95%",
    boxSizing: "border-box",
    padding: "2rem !important",
    borderRadius: "1rem",
    boxShadow: `0px 0px 10px ${theme.palette.technology.shadowPrimary}70`,
    backgroundColor: `${theme.palette.technology.backgroundPrimary}70`,
    cursor: "pointer",
    transform: "none",
    transition: "transform 150ms linear, box-shadow 200ms ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
        boxShadow: `0px 0px 15px ${theme.palette.technology.shadowPrimary}90`,
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },

}));

const StyledTechnologyContent = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    gap: "2rem",

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingBottom: "2rem !important",
        gap: "1rem",
    },
}));

const StyledTechnologyImage = styled("img")(({ theme }) => ({
    height: "100px",
    width: "100px",
    border: "2px solid #fff",
}));

const StyledTechnologyTextField = styled("div")(({ theme }) => ({
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
        textAlign: "center",
    },
}));

const StyledTechnologyTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.35rem !important",
    fontWeight: "600",
    marginBottom: "0.5rem",
}));

const StyledTechnologyDescription = styled(Typography)(({ theme }) => ({
    fontSize: "0.95rem !important",
    marginBottom: "1rem",
}));

const TechnologyCard = ({ technology }) => {

    const handleTechnologyBoxClick = () => {
        if (technology.link) {
            window.open(technology.link, "_blank");
        }
    };


    return (
        <StyledTechnologyBox onClick={handleTechnologyBoxClick}>
            <StyledTechnologyContent>

                <StyledTechnologyImage
                    alt={`Image of ${technology.title}`}
                    src={technology.image}
                    referrerPolicy="no-referrer"
                />

                <StyledTechnologyTextField>
                    <StyledTechnologyTitle>{technology.title}</StyledTechnologyTitle>
                    <StyledTechnologyDescription>{technology.description}</StyledTechnologyDescription>
                    <CButton
                        title="See more"
                        fontSize={0.9}
                        href={technology.link}
                    />
                </StyledTechnologyTextField>
            </StyledTechnologyContent>
        </StyledTechnologyBox>
    )
}

export default TechnologyCard