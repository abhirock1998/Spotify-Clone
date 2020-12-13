import style from "styled-components/macro";

export const BigContainer = style.div`
position: fixed;
z-index: 999;
width: 50%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
justify-content: center;
top: 0;
transition: 0.5s ease-in-out;
opacity: ${({ top }) => (top ? "1" : "1")};
right:${({ top }) => (top ? "0" : "-100%")};




`;
export const Wrapper = style.ul`
position: absolute;
top: 1rem;

display: flex;
flex-direction:column;
//align-items:center;
justify-content:center;






`;

export const MenuOption = style.a`

text-decoration:none;
cursor:pointer;
transition:.2s;
color:#fff;
padding:10px 0px 20px 0px;

&:hover {
    color:#1ed760;
    
}

`;

export const Button = style.button`
  position: absolute;
  top: 30px;
  right: 15px;
  width: 30px;
  cursor: pointer;
  background: #000;
  border: none;
  outline: none;
  opacity: 1;
  img {
    filter: brightness(1) invert(1);
    width: 100%;
  }
`;
