import { styled, Box } from "@mui/material"

const StyledScreenBox = styled(Box)(({ theme }) => ({
  padding: 0,
  outline: "none",

}));

const StyledScreenImage = styled("img")({
  opacity: 0.5,
  transform: "scale(0.8)",
  width: "288px",
  margin: "0 auto",
});

const ScreenCard = ({ screen }) => {

  return (
    <StyledScreenBox>
      <StyledScreenImage
        alt={screen.alt}
        src={screen.image}
        referrerPolicy="no-referrer"
      />
    </StyledScreenBox>
  )
}

export default ScreenCard