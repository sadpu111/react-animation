import { motion } from 'framer-motion';
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(225,225, 225, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {
    scale: 1.5, rotateZ: 90,
  },
  click: {
    scale: 1, borderRadius: "100px",
  },
  drag: {
    backgroundColor: "#c3bef0"
  }
};



function App() {
  return (
    <Wrapper>
      <Box drag variants={boxVariants} whileHover="hover" whileTap="click" whileDrag="drag" />
    </Wrapper>
  );
}

export default App;
