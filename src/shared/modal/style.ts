import styled from 'styled-components'
interface ModalBodyProps {
  show: boolean
}

export const ModelHead = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    font-family: SemiBold;
    margin: 0;
    @media (min-width: 700px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
`

export const ModalBody = styled.div<ModalBodyProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 400px;
  overflow: auto;
  background: rgb(9 34 39 / 50%);
  border: 1px solid rgba(186, 169, 255, 0.1);
  backdrop-filter: blur(15px);
`

export const ModalContent = styled.div<any>`
  padding: 20px;
  border-radius: 0px !important;
  background-color: #8aa9c2;
  display: inline-block;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid rgba(186, 169, 255, 0.1);
  overflow: auto;
  // min-width: 280px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  // overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 80%;
  @media (min-width: 1200px) {
    width: 524px;
  }
`

export const ModalContainerHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`
export const ModalContainerText = styled.p`
  font-size: 16px;
  margin: 0;
`

// export const CloseButton = styled.div`
//   display: flex;
//   p {
//     font-family: Light;
//     font-weight: 300;
//     font-size: 14px;
//     color: ${colors.white};
//     margin: 0 10px;
//     @media (min-width: ${screenSizes.mediaM}px) {
//       font-size: 18px;
//     }
//   }

//   img {
//     height: 25px;
//     cursor: pointer;
//   }
// `;

export const CloseButton = styled.div``
export const Close = styled.img`
  cursor: pointer;
  margin-right: auto;
  @media (min-width: 700px) {
    cursor: pointer;
    margin-right: 0;
  }
`
