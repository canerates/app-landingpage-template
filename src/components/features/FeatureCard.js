import { Typography, styled, Box } from "@mui/material"

const StyledFeatureBox = styled(Box)(({ theme }) => ({
  height: "90%",
  width: "90%",
  boxSizing: "border-box",
  padding: "2rem !important",
  borderRadius: "1rem",
  boxShadow: `0px 0px 10px ${theme.palette.feature.shadowPrimary}70`,
  backgroundColor: `${theme.palette.feature.backgroundPrimary}70`,
  cursor: "pointer",
  transform: "none",
  transition: "transform 150ms linear, box-shadow 200ms ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: `0px 0px 15px ${theme.palette.feature.shadowPrimary}90`,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  
}));

const StyledFeatureContent = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "2rem !important",
  boxSizing: "border-box",
  gap: "1rem",
}));

const StyledFeatureImage = styled("img")(({ theme }) => ({
  height: "75px",
  width: "75px",
  border: "2px solid #fff",
}));

const StyledFeatureTextField = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

const StyledFeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.35rem !important",
  fontWeight: "600",
  marginBottom: "0.5rem",
}));

const StyledFeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem !important",
}));

const FeatureCard = ({ feature }) => {
  return (
    <StyledFeatureBox>
      <StyledFeatureContent>
        <StyledFeatureImage
          alt={`Image of ${feature.title}`}
          src={feature.image}
          referrerPolicy="no-referrer"
        />
        <StyledFeatureTextField>
          <StyledFeatureTitle>{feature.title}</StyledFeatureTitle>
          <StyledFeatureDescription>{feature.description}</StyledFeatureDescription>
        </StyledFeatureTextField>
      </StyledFeatureContent>
    </StyledFeatureBox>
  )
}

export default FeatureCard