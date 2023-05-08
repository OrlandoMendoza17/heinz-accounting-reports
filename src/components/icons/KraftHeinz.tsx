import React from 'react'
import Icon from './Icon'

const KraftHeinz = (props: IconProps): JSX.Element => {
  return (
    <Icon {...props} viewBox="0 0 2560 433">
      <g transform="translate(0.000000,433.000000) scale(0.100000,-0.100000)" stroke="none">
        {/* Kraft */}
        <path fill="#17396d" d="M0 2095 l0 -1955 445 0 445 0 2 857 3 857 226 -345 c124 -189 378 -575 564 -856 l337 -513 520 0 c286 0 518 3 516 8 -1 4 -291 439 -643 967 -351 528 -639 967 -639 975 0 8 86 130 190 270 105 140 365 494 579 785 214 292 447 608 518 704 71 96 131 180 134 187 4 12 -77 14 -494 14 l-499 0 -594 -826 c-327 -454 -623 -865 -657 -912 l-63 -87 0 913 0 912 -445 0 -445 0 0 -1955z" />
        <path fill="#17396d" d="M3250 1580 l0 -1440 425 0 425 0 1 583 c0 730 7 876 43 972 88 229 310 411 583 477 48 12 94 22 101 24 9 3 12 94 12 414 0 395 -1 410 -19 410 -10 0 -59 -11 -107 -25 -265 -76 -472 -235 -596 -460 l-28 -50 7 268 6 267 -426 0 -427 0 0 -1440z" />
        <path fill="#17396d" d="M5665 3100 c-122 -10 -225 -22 -392 -47 l-113 -16 0 -399 0 -398 23 5 c327 77 642 104 829 70 207 -36 300 -92 362 -215 32 -64 65 -175 55 -184 -2 -2 -61 5 -130 15 -270 39 -414 42 -609 10 -268 -44 -505 -178 -646 -364 -285 -377 -223 -972 132 -1261 191 -156 405 -223 679 -213 196 7 371 56 525 147 28 17 53 30 55 30 3 0 5 -31 5 -70 l0 -70 411 0 412 0 -6 973 c-5 818 -8 988 -21 1072 -41 259 -122 437 -268 590 -196 206 -546 320 -1013 330 -99 2 -229 0 -290 -5z m664 -1765 c41 -8 77 -17 80 -21 3 -3 6 -122 6 -264 0 -186 -3 -262 -12 -271 -22 -22 -235 -70 -334 -76 -113 -7 -178 6 -262 50 -108 57 -167 151 -167 267 0 168 104 281 296 324 83 19 278 14 393 -9z" />
        <path fill="#17396d" d="M8870 4323 c-365 -57 -614 -198 -765 -431 -119 -185 -182 -431 -186 -730 l-2 -132 -179 0 -178 0 0 -365 0 -365 180 0 180 0 0 -1080 0 -1080 420 0 420 0 0 1080 0 1080 275 0 275 0 0 365 0 365 -280 0 -280 0 0 28 c1 100 21 254 41 307 29 77 92 145 168 179 88 39 182 50 349 40 l142 -9 -2 365 -3 365 -85 12 c-79 11 -433 15 -490 6z" />
        <path fill="#17396d" d="M9930 3420 l0 -390 -170 0 -170 0 0 -365 0 -365 170 0 170 0 0 -589 c0 -467 3 -614 15 -704 60 -455 294 -763 680 -892 134 -45 257 -65 445 -72 l175 -6 -28 34 c-135 167 -196 262 -270 418 -59 126 -130 335 -157 464 -27 130 -40 427 -40 940 l0 407 310 0 310 0 0 365 0 365 -312 0 -311 0 5 390 6 390 -414 0 -414 0 0 -390z" />

        {/* Heinz */}
        <path fill="#e42221" d="M14035 4060 c-512 -16 -832 -53 -1025 -117 -211 -71 -422 -224 -531 -387 -45 -67 -111 -232 -135 -341 -28 -125 -24 -334 10 -498 28 -138 96 -353 126 -402 10 -16 33 -43 50 -60 31 -30 33 -30 138 -29 131 2 454 36 560 59 42 10 29 63 -62 254 -100 207 -130 294 -147 416 -15 117 -6 297 20 400 66 256 241 437 497 515 159 48 458 40 590 -15 47 -20 68 -70 59 -143 -4 -29 -28 -131 -55 -225 -26 -95 -156 -557 -288 -1027 -330 -1174 -335 -1192 -381 -1308 -149 -374 -369 -686 -543 -770 -128 -63 -285 -46 -472 51 -62 32 -88 53 -127 101 -101 127 -198 357 -251 596 -21 98 -23 127 -23 435 0 182 -4 336 -9 344 -38 58 -598 -163 -758 -300 -60 -51 -69 -90 -69 -304 0 -183 9 -251 51 -393 105 -354 280 -624 501 -771 92 -62 158 -91 278 -122 98 -25 392 -27 532 -3 347 59 821 270 1259 559 138 91 226 175 315 299 126 178 147 230 281 680 57 192 105 350 107 353 2 2 157 2 344 1 l339 -3 -173 -645 c-96 -355 -186 -688 -200 -740 -21 -78 -26 -119 -27 -225 -1 -114 1 -134 20 -165 33 -57 51 -62 204 -55 218 10 353 31 528 81 121 35 301 124 357 177 60 58 60 85 1 138 -66 60 -108 147 -114 234 -4 58 1 91 26 180 17 61 133 504 257 985 125 481 244 934 266 1007 126 424 258 756 376 940 20 32 77 100 127 151 l90 93 -429 -3 -430 -3 -55 -26 c-118 -55 -258 -224 -332 -401 -20 -48 -57 -165 -82 -260 -25 -95 -106 -391 -179 -658 l-134 -485 -341 -3 c-188 -1 -342 1 -342 5 0 4 106 388 235 853 129 465 235 861 235 879 0 45 -16 70 -54 86 -41 18 -654 27 -1011 15z" />
        <path fill="#e42221" d="M18030 2934 c-14 -2 -65 -9 -115 -15 -200 -24 -460 -108 -651 -208 -555 -292 -939 -862 -1070 -1586 -22 -124 -30 -372 -14 -476 42 -293 187 -481 438 -570 119 -42 211 -53 390 -46 416 15 670 124 958 411 118 118 166 182 184 246 22 76 -18 78 -172 9 -209 -95 -341 -127 -469 -115 -135 14 -218 49 -292 123 -130 129 -153 379 -64 674 l26 84 163 46 c775 221 1232 571 1265 970 15 179 -75 350 -224 425 -55 27 -66 29 -193 30 -74 1 -146 0 -160 -2z m-235 -346 c68 -31 38 -186 -95 -500 -33 -79 -73 -165 -88 -193 l-27 -50 -125 -37 c-132 -40 -220 -57 -220 -42 0 16 117 317 164 422 135 304 279 451 391 400z" />
        <path fill="#e42221" d="M19615 2935 c-295 -53 -705 -211 -812 -311 -44 -42 -43 -72 6 -145 62 -93 62 -141 0 -364 -67 -237 -197 -651 -344 -1094 -161 -484 -185 -573 -185 -700 0 -135 31 -199 120 -244 52 -27 60 -28 160 -24 183 8 443 92 728 234 170 85 227 126 220 161 -2 8 -31 27 -66 41 -74 31 -116 68 -133 118 -17 51 -6 181 24 278 212 699 483 1633 507 1745 41 197 39 243 -12 298 -18 18 -31 22 -82 21 -34 0 -92 -7 -131 -14z" />
        <path fill="#e42221" d="M19997 4149 c-128 -15 -303 -65 -414 -119 -136 -67 -187 -117 -230 -231 -52 -134 -84 -258 -90 -345 -7 -101 -1 -128 40 -165 39 -36 98 -39 202 -10 89 25 294 110 406 167 88 45 186 129 213 182 15 30 76 238 100 345 41 177 9 202 -227 176z" />
        <path fill="#e42221" d="M22125 2986 c-288 -55 -601 -195 -859 -384 -47 -35 -49 -35 -43 -12 52 185 47 318 -14 351 -91 48 -698 -127 -913 -265 -31 -20 -61 -36 -67 -36 -5 0 -21 -11 -34 -25 -36 -35 -32 -74 14 -140 46 -66 66 -137 56 -203 -4 -26 -26 -110 -50 -187 -24 -77 -112 -367 -195 -645 -83 -278 -178 -586 -210 -685 -80 -243 -93 -300 -94 -430 -1 -129 15 -182 70 -236 35 -34 36 -34 127 -33 68 0 118 7 189 27 200 56 493 191 546 252 l30 33 5 188 c6 223 16 272 152 708 46 149 111 366 145 481 70 240 106 321 189 421 143 172 389 297 475 240 57 -37 51 -124 -28 -386 -26 -85 -90 -310 -142 -500 -174 -634 -206 -744 -239 -837 -88 -241 -112 -441 -67 -535 19 -39 33 -52 78 -74 51 -25 62 -26 147 -22 165 10 466 103 757 236 113 51 220 147 194 172 -5 5 -33 18 -63 30 -79 31 -107 54 -127 105 -34 90 -25 129 261 1145 237 843 245 873 245 961 0 134 -43 209 -148 261 -62 31 -72 32 -191 35 -74 1 -155 -3 -196 -11z" />
        <path fill="#e42221" d="M23350 2923 c-88 -30 -207 -138 -253 -229 -74 -147 -233 -606 -221 -637 9 -23 52 -21 94 4 19 12 62 50 95 85 l60 64 432 0 c274 0 434 -4 438 -10 9 -15 -27 -87 -83 -165 -76 -106 -226 -284 -571 -675 -494 -559 -773 -902 -875 -1074 -41 -70 -45 -95 -15 -122 20 -18 56 -19 1140 -22 1087 -2 1120 -2 1156 17 50 25 57 34 219 256 386 531 582 898 601 1126 18 210 -144 361 -403 376 -219 13 -332 -77 -382 -305 -20 -94 -17 -97 79 -81 174 28 294 -48 331 -210 17 -75 0 -144 -53 -223 -75 -112 -126 -165 -187 -195 l-57 -28 -659 0 c-654 0 -659 0 -672 21 -13 19 12 56 349 515 699 953 982 1344 1005 1388 29 58 29 105 0 125 -20 14 -109 16 -773 16 -654 -1 -756 -3 -795 -17z" />
      </g>
    </Icon>
  )
}

export default KraftHeinz;