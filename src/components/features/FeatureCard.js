import { Typography, styled, Box } from "@mui/material"

const StyledFeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderRadius: "1rem",
  margin: "1rem",
  boxShadow: `0px 0px 10px ${theme.palette.feature.shadowPrimary}70`,
  backgroundColor: `${theme.palette.feature.backgroundPrimary}70`,
  // paddingTop: "0 !important",
  // paddingLeft: "0 !important",
}));

const StyledFeatureImage = styled("img")(({ theme }) => ({
}));

const StyledFeatureTextField = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

const StyledFeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
}));

const StyledFeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
}));

const FeatureCard = ({ feature }) => {
  return (
    <StyledFeatureBox>
      <StyledFeatureImage
        alt={`Image of ${feature.title}`}
        src={feature.image}
        referrerPolicy="no-referrer"
      />
      <StyledFeatureTextField>
        <StyledFeatureTitle>{feature.title}</StyledFeatureTitle>
        <StyledFeatureDescription>{feature.description}</StyledFeatureDescription>
      </StyledFeatureTextField>
    </StyledFeatureBox>
  )
}

export default FeatureCard