import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.primary,
}));

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 2400);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5000 5000"
          width="12rem"
          height="12rem"
          initial="hidden"
          animate="visible"
          style={{ transform: 'scale(1, -1)' }}
        >

          {/* 1st path */}
          <motion.path
            d="M2042 4860 c-204 -57 -409 -207 -561 -410 -118 -158 -146 -235 -220
            -600 -43 -213 -61 -367 -61 -532 0 -93 4 -121 31 -205 17 -54 46 -134 65 -178
            127 -305 164 -424 164 -531 l0 -84 -42 0 c-69 -1 -143 -43 -183 -103 -7 -12
            -25 -66 -39 -121 -47 -180 -45 -434 5 -629 11 -44 19 -80 17 -82 -2 -1 -30
            -17 -63 -35 -308 -168 -594 -421 -717 -633 -27 -45 -48 -88 -48 -95 0 -28 25
            -4 65 62 131 216 445 473 758 622 43 20 80 40 83 46 3 5 -6 52 -20 106 -39
            150 -49 249 -43 396 8 186 10 190 59 113 44 -67 112 -148 225 -268 l72 -76
            -10 -38 c-6 -22 -9 -82 -7 -135 4 -83 9 -104 40 -171 62 -133 136 -217 313
            -354 78 -61 234 -214 301 -295 67 -82 156 -213 196 -289 44 -82 55 -98 63 -89
            7 7 -55 152 -99 232 -92 165 -281 385 -426 496 -41 31 -113 97 -160 146 -72
            75 -91 102 -119 169 -23 57 -34 103 -38 157 -9 123 -7 123 109 17 503 -463
            780 -795 1036 -1244 66 -116 74 -127 90 -116 10 6 8 21 -11 72 -35 93 -117
            252 -179 345 -29 44 -71 107 -92 140 -137 206 -418 519 -697 774 -175 160
            -438 428 -501 511 -64 84 -108 162 -108 192 0 31 41 85 74 97 16 5 43 10 61
            10 l32 0 -4 -53 c-5 -62 -21 -178 -28 -204 -3 -10 2 -3 10 15 20 43 40 142 55
            267 6 55 13 109 15 120 2 11 61 69 130 129 135 117 197 196 240 307 37 94 73
            149 136 210 l58 56 24 -76 c27 -82 107 -277 133 -326 23 -40 64 -84 94 -99 54
            -28 155 -26 184 4 8 8 4 9 -17 1 -106 -40 -212 34 -262 182 -12 34 -43 109
            -69 166 -63 136 -84 233 -68 308 26 126 134 186 250 138 55 -23 151 -85 187
            -122 31 -30 44 -50 140 -212 24 -40 56 -86 70 -101 26 -27 26 -29 10 -54 -10
            -15 -14 -30 -10 -34 9 -9 50 41 81 100 44 85 54 156 60 413 7 320 33 448 97
            489 12 8 60 22 107 31 120 24 146 37 225 114 80 79 121 96 202 88 65 -7 121
            -38 190 -106 80 -79 101 -132 119 -302 18 -173 29 -242 55 -323 31 -101 26
            -163 -22 -254 l-40 -77 45 -125 c24 -69 65 -165 90 -213 50 -96 58 -145 30
            -198 -25 -50 -121 -75 -179 -48 -14 6 -6 7 28 3 43 -5 48 -4 45 13 -5 24 -76
            23 -94 -1 -9 -13 -24 -16 -56 -14 -38 3 -45 7 -60 38 -10 19 -18 28 -18 19 0
            -9 9 -28 21 -43 15 -20 30 -26 57 -26 20 0 42 -4 48 -8 6 -4 20 -51 31 -105
            l19 -98 -29 -25 c-25 -21 -38 -24 -120 -25 -100 0 -172 -17 -82 -18 89 -2 122
            -11 134 -38 16 -35 15 -39 -25 -80 -20 -21 -48 -62 -61 -91 -22 -47 -25 -64
            -22 -145 l4 -92 -80 -92 c-44 -51 -88 -93 -97 -93 -19 0 -24 15 -9 25 22 13
            129 165 120 170 -5 4 -33 -20 -62 -52 -119 -133 -143 -155 -161 -152 -15 3 -6
            20 50 88 95 114 116 145 104 149 -10 4 -136 -125 -192 -196 -16 -20 -38 -40
            -49 -44 -41 -16 -23 12 129 199 34 42 62 80 62 85 0 26 -39 -9 -154 -138 -70
            -79 -135 -144 -143 -144 -18 0 -13 8 61 99 81 98 176 224 176 233 0 18 -20 6
            -50 -30 -37 -42 -174 -193 -236 -261 -22 -24 -46 -42 -52 -40 -6 2 46 74 114
            159 161 199 194 243 187 253 -5 8 -52 -42 -252 -266 -67 -75 -127 -137 -132
            -137 -19 0 -7 20 59 100 37 44 86 106 108 135 23 30 58 73 78 97 33 39 48 74
            27 66 -8 -3 -231 -250 -323 -357 -20 -24 -41 -40 -47 -37 -11 7 26 58 191 260
            54 65 95 123 92 128 -8 12 -56 -33 -159 -152 -155 -177 -201 -224 -208 -213
            -4 7 24 49 66 100 40 48 94 115 120 148 25 33 60 76 76 95 30 34 39 60 23 60
            -5 0 -84 -86 -176 -190 -154 -173 -186 -205 -186 -182 0 4 48 67 108 141 187
            235 213 269 201 277 -7 4 -23 -8 -38 -27 -14 -19 -55 -66 -91 -105 -36 -39
            -103 -114 -150 -166 -49 -56 -89 -92 -94 -87 -5 5 7 27 30 55 21 25 59 72 84
            103 25 32 82 103 128 160 79 98 93 121 73 121 -5 0 -89 -90 -186 -200 -157
            -178 -195 -215 -195 -194 0 10 103 140 279 354 65 79 83 110 63 110 -5 0 -51
            -48 -103 -107 -52 -59 -124 -140 -161 -180 -37 -41 -79 -89 -94 -108 -25 -33
            -44 -45 -44 -27 0 4 90 120 200 257 110 138 195 252 188 254 -12 4 -26 -10
            -198 -204 -58 -65 -132 -149 -165 -186 -67 -75 -102 -78 -39 -4 21 26 71 86
            109 134 71 90 146 182 222 273 23 28 40 55 37 60 -3 4 -10 6 -15 3 -7 -5 -165
            -182 -239 -268 -95 -112 -164 -187 -171 -187 -23 0 -2 37 76 132 47 57 121
            146 164 198 153 184 173 212 163 222 -7 7 -24 -8 -52 -44 -23 -29 -73 -87
            -110 -128 -37 -41 -86 -97 -108 -125 -23 -27 -66 -77 -96 -110 -51 -56 -55
            -58 -56 -34 0 22 28 72 51 89 4 3 34 39 68 80 34 41 71 86 83 100 158 186 210
            252 201 261 -9 9 -30 -14 -278 -304 -75 -87 -121 -133 -126 -126 -11 18 -15
            -89 -6 -165 4 -39 16 -89 26 -112 36 -81 166 -182 297 -231 74 -28 75 -29 70
            -58 -7 -35 -18 -385 -12 -370 3 6 8 50 11 98 5 68 10 86 19 78 15 -13 34 -73
            47 -149 10 -63 13 -371 5 -539 l-5 -108 15 115 c9 68 16 205 17 335 2 255 -8
            321 -55 368 l-29 30 15 75 c8 42 19 79 23 83 4 4 49 3 98 -1 130 -12 356 -12
            476 1 124 12 179 34 211 83 21 33 27 36 73 36 61 0 99 -18 103 -48 2 -12 -21
            -84 -51 -159 -162 -408 -362 -1050 -383 -1230 -6 -48 -5 -53 13 -53 17 0 26
            23 66 173 52 190 173 567 187 581 12 12 65 -106 92 -204 11 -41 28 -121 37
            -176 19 -120 37 -133 33 -24 -7 173 -52 363 -108 452 -13 21 -24 43 -24 50 0
            7 30 90 66 183 151 393 155 405 130 454 -24 45 -55 61 -133 68 l-68 6 -2 95
            c-3 115 7 157 51 215 44 58 51 81 32 117 -14 28 -13 30 5 30 59 0 94 58 74
            124 -7 22 -15 66 -18 97 l-7 56 68 -5 c90 -6 124 11 148 74 24 63 9 133 -48
            228 -24 39 -45 75 -47 81 -2 5 -23 53 -47 106 -24 53 -44 105 -44 116 0 12 20
            43 45 71 84 94 93 155 45 310 -29 96 -80 323 -80 360 0 10 12 25 26 33 42 22
            99 93 136 171 95 197 105 310 42 468 -42 106 -83 171 -121 191 -23 13 -27 12
            -41 -9 -8 -12 -20 -22 -26 -22 -6 0 -45 29 -85 65 -79 69 -110 80 -126 43 -14
            -33 -57 -28 -198 20 -167 58 -198 62 -507 72 -235 8 -293 13 -400 35 -177 37
            -395 43 -498 15z m1578 -3207 c0 -20 -78 -109 -87 -100 -4 5 76 114 85 116 1
            1 2 -7 2 -16z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />

          {/* 2nd path */}
          <motion.path
            d="M2225 3373 c-75 -18 -113 -139 -81 -261 20 -78 53 -157 74 -174 10
            -9 8 0 -7 29 -48 96 -66 248 -37 318 24 56 56 70 137 59 72 -10 92 -3 37 14
            -46 14 -99 21 -123 15z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 3rd path */}
          <motion.path
            d="M3635 3309 c-59 -11 -266 -78 -279 -90 -21 -19 7 -20 102 -5 129 21
            277 21 316 1 41 -22 65 -19 78 10 10 22 8 29 -12 50 -40 42 -103 52 -205 34z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 4th path */}
          <motion.path
            d="M3562 3139 c-66 -8 -167 -38 -159 -46 3 -2 32 3 65 11 33 9 70 15 83
            15 20 -1 21 -2 4 -6 -97 -20 -161 -37 -169 -44 -5 -4 18 -2 50 5 32 8 79 17
            103 20 37 6 43 4 37 -10 -3 -8 -6 -31 -6 -50 0 -21 -4 -33 -10 -29 -5 3 -10 2
            -10 -4 0 -15 38 -33 58 -27 10 3 19 14 20 23 7 66 15 103 21 103 3 0 17 -9 31
            -20 14 -11 34 -20 45 -20 36 0 -44 54 -90 61 l-40 6 50 2 c36 1 46 4 35 11
            -17 11 -29 11 -118 -1z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 5th path */}
          <motion.path
            d="M2287 3081 c-22 -38 -22 -84 1 -104 22 -20 35 -21 78 -5 39 14 64 -1
            64 -37 0 -13 11 -37 25 -53 23 -28 24 -33 13 -68 -10 -31 -19 -40 -43 -45 -24
            -5 -26 -7 -7 -8 38 -2 60 17 73 58 10 35 9 42 -10 67 -11 14 -21 41 -21 59 0
            41 -39 99 -69 103 -13 2 -37 -6 -54 -18 -24 -18 -31 -20 -38 -9 -12 19 -11 26
            6 59 20 39 5 39 -18 1z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 6th path */}
          <motion.path
            d="M2773 2823 c-21 -27 -50 -61 -65 -77 -27 -29 -37 -56 -20 -56 9 0
            130 144 138 165 12 31 -16 13 -53 -32z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 7th path */}
          <motion.path
            d="M2773 2708 c-17 -24 -63 -79 -102 -123 -66 -74 -84 -105 -62 -105 5
            0 20 15 34 33 13 17 35 43 49 57 34 34 138 166 138 174 0 20 -31 0 -57 -36z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 8th path */}
          <motion.path
            d="M2739 2547 c-24 -28 -66 -77 -94 -108 -88 -98 -175 -207 -175 -218 0
            -27 32 -6 77 50 26 34 75 94 108 133 126 149 150 182 137 190 -5 3 -29 -18
            -53 -47z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 9th path */}
          <motion.path
            d="M3690 2425 c0 -9 7 -32 17 -53 20 -46 31 -20 13 33 -12 36 -30 48
            -30 20z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 10th path */}
          <motion.path
            d="M3627 2393 c-6 -12 22 -73 33 -73 13 0 13 10 -1 49 -11 30 -23 39
            -32 24z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 11th path */}
          <motion.path
            d="M3568 2344 c-9 -9 25 -64 40 -64 16 0 15 6 -5 41 -17 29 -25 34 -35 23z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 12th path */}
          <motion.path
            d="M3510 2282 c0 -13 35 -42 50 -42 9 0 5 9 -10 25 -24 25 -40 32 -40 17z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 13th path */}
          <motion.path
            d="M3472 2218 c6 -16 36 -34 44 -25 9 9 -15 37 -33 37 -8 0 -13 -5 -11 -12z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 14th path */}
          <motion.path
            d="M3430 1192 c-62 -31 -62 -115 1 -147 39 -21 53 -19 88 11 78 65 2 182 -89 136z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="55"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />
          {/* 15th path */}
          <motion.path
            d="M3293 808 c-28 -13 -47 -60 -39 -93 17 -67 105 -90 145 -39 36 46 27 105 -20 129 -32 17 -55 18 -86 3z"
            stroke={theme.palette.logo.primary}
            fill="none"
            strokeWidth="55"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
            }}
          />

        </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;

