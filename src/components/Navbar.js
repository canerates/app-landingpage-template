import { React, useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import navbarData from "../content/navbar.json"
import contentData from "../content/main.json";
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import PageLogoSVG from "../components/PageLogoSVG"

import { Link } from "react-scroll"
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    styled,
    Slide,
    useTheme,
    useMediaQuery,
    useScrollTrigger,
    Drawer,
    List,
    Box,
    Switch
} from '@mui/material';
import PageLogo from "./PageLogo";


const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
    backgroundColor: theme.palette.background.primary + " !important",
    transition:
        "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
    transitionDelay: "0.1s",
    boxShadow: isScrolled
        ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
        : "none !important",
    padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
    [theme.breakpoints.down("md")]: {
        padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
    },
}));

const StyledAppBarContainer = styled("div")(({ theme }) => ({
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    placeSelf: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "90vw !important",
    [theme.breakpoints.down("md")]: {
        width: "100vw !important",
    },
}));

const StyledAppBarButton = styled(Button)(({ theme }) => ({
    padding: "10px 8px",
    color: theme.palette.text.primary + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.text.secondary + " !important",
        transform: "translateY(-2px)",
    },
}));

const StyledAppBarLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "& p": {
        color: theme.palette.text.primary + " !important",
        transform: "none",
        transition: "transform 150ms ease-in-out 0s !important",
        cursor: "pointer",
        fontSize: "1.2rem",
        padding: "0.75rem",
        "&:hover": {
            color: theme.palette.text.secondary + " !important",
            transform: "translateY(-2px)",
        },
    }

}));

const StyledDownloadLink = styled("a")(({ theme }) => ({
    cursor: "pointer",
    textDecoration: "none",
    "& p": {
        borderRadius: "8px !important",
        padding: "0.25rem 0.5rem",
        fontSize: "1.2rem",
        backgroundColor: theme.palette.button.backgroundPrimary + " !important",
        color: theme.palette.button.foregroundPrimary,
        transition: "transform 150ms ease-in-out 0s !important",
        "&:hover": {
            transform: "scale(1.08)",
        },
    },
}));

const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "2rem !important",
    zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
    animation: "fadeIn",
    animationDuration: "1s",
    position: "fixed",
    top: "32px",
    right: "32px",
    color: theme.palette.text.primary,
    fontSize: "2rem !important",
    zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& div.MuiPaper-root": {
        background: "transparent",
        backdropFilter: "blur(10px)",
        height: "100vh !important",
        boxShadow: "none !important",
        textAlign: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
        zIndex: "2 !important",
    },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
    display: "flex",
}));

const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
    "& p": {
        animation: "fadeIn",
        animationDuration: "2s",
        color: theme.palette.text.primary + " !important",
        cursor: "pointer",
        fontSize: "1.75rem",
        padding: "0",
        "&:hover": {
            color: theme.palette.text.secondary + " !important",
        },
    },
}));

const StyledLogoContainer = styled(Box)(({ theme }) => ({

    display: "flex",
    flexGrow: 1,


}));

const StyledLogo = styled(Link)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",

    "& p": {
        animation: "fadeIn",
        animationDuration: "2s",
        color: theme.palette.text.primary + " !important",
        fontSize: "1.2rem",
        padding: "0",
        
    },
}));


const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const MuiTheme = useTheme();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const collapse = useMediaQuery(MuiTheme.breakpoints.down("md"));
    const [checked, setChecked] = useState(theme === "dark");

    useEffect(() => {
        setTimeout(() => {
            setHasAnimated(true);
        }, 1000);
    }, []);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const trigger = useScrollTrigger({
        target: window,
    });

    const toggleDrawer = (isOpen) => (event) => {
        event.preventDefault();
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setIsOpen(isOpen);
    };

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setTheme(event.target.checked === true ? "dark" : "light")
    };

    const navbar = (
        <>
            {navbarData.map((data) => (
                <div key={data.id}
                    className={
                        !hasAnimated ? "animate__animated animate__fadeInDown" : ""
                    }
                >
                    <StyledAppBarLink
                        href={`#${data.name}`}
                        to={data.name}
                        smooth={true}
                        duration={1000}
                    >
                        <p>{data.name}</p>
                    </StyledAppBarLink>
                </div>
            ))}
            <div
                style={{ paddingLeft: "4px" }}
                className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
            >
                <StyledDownloadLink
                    href={contentData.downloadLink}
                    target="_blank"
                >
                    <Typography>
                        Download
                    </Typography>
                </StyledDownloadLink>
            </div>
            <div
                className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
            >
                <StyledAppBarButton
                    aria-label="Change theme"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                </StyledAppBarButton>
            </div>
        </>
    );


    const drawer = (
        <>
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    animation: !hasAnimated ? "fadeIn" : "",
                    animationDuration: "2s",
                }}
            >
                <StyledDrawerIcon />
            </Button>

            <StyledDrawer
                anchor={"top"}
                variant="temporary"
                transitionDuration={1}
                disableScrollLock={true}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <Button onClick={toggleDrawer(false)}>
                    <StyledDrawerCloseIcon />
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                >
                    <StyledDrawerList>
                        <StyledDownloadLink
                            href={contentData.downloadLink}
                            target="_blank"
                        >
                            <Typography
                                sx={{
                                    padding: "0.5rem 1rem !important",
                                    fontSize: "1.75rem !important",
                                    transition:
                                        "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important",
                                    animation: "fadeIn",
                                    animationDuration: "2s",
                                }}
                            >
                                Download
                            </Typography>
                        </StyledDownloadLink>
                    </StyledDrawerList>
                    {navbarData.map((data) => (
                        <StyledDrawerList key={data.id}>
                            <StyledAppBarDrawerLink
                                onClick={toggleDrawer(false)}
                                to={data.name}
                                smooth={true}
                                duration={1000}
                            >
                                <Typography>{data.name}</Typography>
                            </StyledAppBarDrawerLink>
                        </StyledDrawerList>
                    ))}
                    <List>
                        <Button
                            sx={{
                                color: MuiTheme.palette.text.primary,
                                animation: "fadeIn",
                                animationDuration: "2s",
                            }}
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                        </Button>
                    </List>
                </Box>
            </StyledDrawer>
        </>
    );

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <StyledAppBar position='fixed' isScrolled={isScrolled}>
                <StyledAppBarContainer>
                    <Toolbar>
                        <StyledLogoContainer>
                            <StyledLogo
                                href="#Home"
                                to="Home"
                                smooth={true}
                                duration={1000}
                            >
                                {/* <PageLogo width={56} height={56} /> */}
                                <PageLogoSVG width={56} height={56} />
                                <Typography>App Name</Typography>
                            </StyledLogo>
                        </StyledLogoContainer>
                        {collapse ? drawer : navbar}
                    </Toolbar>
                </StyledAppBarContainer>
            </StyledAppBar>
        </Slide>
    )
}

export default Navbar

