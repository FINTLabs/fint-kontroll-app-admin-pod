import "@navikt/ds-css";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Aligning and positioning */
    .flex-center-vertically {
        display: flex;
        align-items: center;
    }

    /** General spacing declarations **/
    .margin-top-1-x {
        margin-top: 4px;
    }
    .margin-bottom-1-x {
        margin-bottom: 4px;
    }

    .margin-top-2-x {
        margin-top: 8px;
    }
    .margin-bottom-2-x {
        margin-bottom: 8px;
    }

    .margin-left-1-x {
        margin-left: 4px;
    }
    .margin-right-1-x {
        margin-right: 4px;
    }

    .margin-left-2-x {
        margin-left: 8px;
    }
    .margin-left-2-x {
        margin-right: 8px;
    }
`;

export default GlobalStyle;
