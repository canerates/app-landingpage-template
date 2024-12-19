import React, { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { StyledGenericRoot } from "../components/shared/Generic"
import { Container, Grid, styled, Typography, List, ListItem, ListItemText } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StyledPrivacyContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  justifyContent: "center",
  marginTop: "8rem",
  marginBottom: "1rem",

  [theme.breakpoints.down("md")]: {
    marginTop: "6rem",
  },
}));

const StyledPrivacyGrid = styled(Grid)(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  padding: "1rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledPrivacyGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

const StyledBackLink = styled(RouterLink)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "1.2rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
  marginBottom: "1rem",
  "&:hover": {
    color: theme.palette.text.secondary + " !important",
  },
}));

const StyledPageHeader = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: theme.palette.text.secondary,
  marginBottom: "1rem",
}));

const StyledSectionHeader = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.text.secondary,
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const StyledSubSection = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: theme.palette.text.secondary,
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const StyledBody = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.primary,
  marginBottom: "0.5rem",
}));


const StyledList = styled(List)(({ theme }) => ({
  listStyle: "disc",
  paddingLeft: "1rem",
  marginTop: "0rem",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  paddingBottom: "0rem",
}));


const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.text.primary,
  fontSize: "1rem",
  marginLeft: "-1rem",
}));

const BoldText = styled("span")(({ theme }) => ({
  fontWeight: "bold",
}));

const Privacy = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <StyledGenericRoot>
      <StyledPrivacyContainer>
        <StyledPrivacyGrid container>
          <StyledPrivacyGridItem
            item xs={12}
          >
            <StyledBackLink to="/">
              <ArrowBackIosIcon /> <p>{t('translations:back')}</p>
            </StyledBackLink>

          </StyledPrivacyGridItem>

          <StyledPrivacyGridItem
            item xs={12}
          >

            <StyledPageHeader variant="h1">{t('translations:privacy_policy')}</StyledPageHeader>

            <StyledBody variant="body1">{t('translations:privacy_h1_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h1_p2')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h1_p3')}</StyledBody>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_1')}</StyledSectionHeader>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_1')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_1_p1')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_2')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_2_p1')}</StyledBody>

            <StyledList>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li1_span')} </BoldText>
                  {t('translations:privacy_h3_2_li1')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li2_span')} </BoldText>
                  {t('translations:privacy_h3_2_li2')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li3_span')} </BoldText>
                  {t('translations:privacy_h3_2_li3')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li4_span')} </BoldText>
                  {t('translations:privacy_h3_2_li4')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li5_span')} </BoldText>
                  {t('translations:privacy_h3_2_li5')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li6_span')} </BoldText>
                  {t('translations:privacy_h3_2_li6')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li7_span')} </BoldText>
                  {t('translations:privacy_h3_2_li7')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li8_span')} </BoldText>
                  {t('translations:privacy_h3_2_li8')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li9_span')} </BoldText>
                  {t('translations:privacy_h3_2_li9')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li10_span')} </BoldText>
                  {t('translations:privacy_h3_2_li10')}
                </StyledListItemText>
              </StyledListItem>

              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_2_li11_span')} </BoldText>
                  {t('translations:privacy_h3_2_li11')}
                </StyledListItemText>
              </StyledListItem>
            </StyledList>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_2')}</StyledSectionHeader>
            <StyledSubSection variant="h3">{t('translations:privacy_h3_3')}</StyledSubSection>
            <StyledSubSection variant="h3">{t('translations:privacy_h4_1')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h4_1_p1')}</StyledBody>

            <StyledList>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_1_li1')}</StyledListItemText>
              </StyledListItem>
            </StyledList>

            <StyledSubSection variant="h3">{t('translations:privacy_h4_2')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h4_2_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h4_2_p2')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h4_2_p3')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h4_2_p4')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_4')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_4_p1')}</StyledBody>

            <StyledList>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li1_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li1')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li2_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li2')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li3_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li3')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li4_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li4')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li5_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li5')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li6_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li6')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li7_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li7')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p1_li8_span')} </BoldText>
                  {t('translations:privacy_h3_4_p1_li8')}
                </StyledListItemText>
              </StyledListItem>
            </StyledList>

            <StyledBody variant="body1">{t('translations:privacy_h3_4_p2')}</StyledBody>

            <StyledList>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li1_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li1')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li2_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li2')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li3_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li3')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li4_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li4')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li5_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li5')}
                </StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>
                  <BoldText>{t('translations:privacy_h3_4_p2_li6_span')} </BoldText>
                  {t('translations:privacy_h3_4_p2_li6')}
                </StyledListItemText>
              </StyledListItem>
            </StyledList>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_5')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_5_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_5_p2')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_6')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_6_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_6_p2')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_6_p3')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_7')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_7_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_7_p2')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_7_p3')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h3_7_p4')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_8')}</StyledSubSection>

            <StyledSubSection variant="h3">{t('translations:privacy_h4_3')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h4_3_p1')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h4_4')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h4_4_p1')}</StyledBody>

            <StyledSubSection variant="h3">{t('translations:privacy_h4_5')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h4_5_p1')}</StyledBody>

            <StyledList>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_5_li1')}</StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_5_li2')}</StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_5_li3')}</StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_5_li4')}</StyledListItemText>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h4_5_li5')}</StyledListItemText>
              </StyledListItem>
            </StyledList>

            <StyledSubSection variant="h3">{t('translations:privacy_h3_9')}</StyledSubSection>
            <StyledBody variant="body1">{t('translations:privacy_h3_9_p1')}</StyledBody>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_3')}</StyledSectionHeader>
            <StyledBody variant="body1">{t('translations:privacy_h2_3_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h2_3_p2')}</StyledBody>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_4')}</StyledSectionHeader>
            <StyledBody variant="body1">{t('translations:privacy_h2_4_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h2_4_p2')}</StyledBody>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_5')}</StyledSectionHeader>
            <StyledBody variant="body1">{t('translations:privacy_h2_5_p1')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h2_5_p2')}</StyledBody>
            <StyledBody variant="body1">{t('translations:privacy_h2_5_p3')}</StyledBody>

            <StyledSectionHeader variant="h2">{t('translations:privacy_h2_6')}</StyledSectionHeader>
            <StyledBody variant="body1">{t('translations:privacy_h2_6_p1')}</StyledBody>

            <StyledList>
              <StyledListItem>
                <StyledListItemText>{t('translations:privacy_h2_6_li1')}</StyledListItemText>
              </StyledListItem>
            </StyledList>

          </StyledPrivacyGridItem>
        </StyledPrivacyGrid>

      </StyledPrivacyContainer>
    </StyledGenericRoot>
  )
}

export default Privacy