import type { SVGProps } from "react";

export const FortGate = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M496,496H16V224h32v32h32V16L240,80V64h32v16l160-64V256h32v-32h32V496z M256,112L128,64v96h256V64L256,112z M80,256h32v32h32v176h-32v-64H80V256z M432,256h-32v208h-32V288h-32V256h-32v-32h32v-32h-32v-32h32v-32h-32v32h-32v-32h32v-32h-32v32h-32v-32h32v32h32v-32h32v32h32v-32h32V256z M320,464h32V288h-32V464z"/>
    </svg>
);


export const FortWall = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 120V80L50 75L100 85L150 70L200 90L250 80L300 60L350 75L400 85L450 95L500 80L550 70L600 80L650 90L700 100L750 85L800 75L850 90L900 80L950 65L1000 75L1050 95L1100 85L1150 75L1200 90L1250 100L1300 80L1350 70L1400 85L1440 80V120H0Z" fill="currentColor"/>
    </svg>
);
