import { css } from "@emotion/react";

// eslint-disable-next-line
export default {
  headContainer: css`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1, 1fr);
    margin-top: 40px;
    padding: 20px 10px;
    line-height: 24px;
    color: "#59585f";
    background: "#ffffff";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,

  contentContainer: (odd: number) => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    ${odd &&
    css`
      & > div:nth-of-type(2) {
        background: "#59585f";
      }
    `}
  `,
};
