// import styled from "styled-components";
// export const HeroDisplay = styled.div`
// border:2px solid red;
// display: flex;

// `;
// export const HeroParagraph = styled.div`
// border: 3px solid green;
// text-align: center;
// letter-spacing: 2px;
// margin-right: 4rem;
// /* margin: auto; */
// line-height: 3rem

// `;

// export const HeroImage =styled.div`
// padding: 10px;
// border: 2px solid blue;
// border-radius: 50px;
// /* @media only screen and (max-width: 50em) { */
//     /* flex-wrap: wrap; */
// /* font-size:9vw;
// text-align:center;
// } */

// `;

import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 1rem auto;
  padding: 1rem;
`;

export const StyledText = styled.div`
  text-align: center;

  h2 {
    margin-top: 90px;
    line-height: 1.5;
  }

  p {
    line-height: 1.8;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;
