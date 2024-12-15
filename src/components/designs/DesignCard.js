import { styled, Box } from "@mui/material"

const StyledDesignBox = styled(Box)(({ theme }) => ({
  padding: 0,
  outline: "none",

}));

const StyledDesignImage = styled("img")({
  opacity: 0.5,
  transform: "scale(0.8)",
  width: "600px",
  margin: "0 auto",
});

const DesignCard = ({ design }) => {

  return (
    <StyledDesignBox>
      <StyledDesignImage
        alt={design.alt}
        src={design.image}
        referrerPolicy="no-referrer"
      />
    </StyledDesignBox>
  )
}

export default DesignCard