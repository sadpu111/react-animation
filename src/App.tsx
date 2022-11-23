import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {
    scale: 1, rotateZ: 90,
  },
  click: {
    scale: 1, borderRadius: "100px",
  },
  drag: {
    backgroundColor: "#c3bef0"
  }
};
 


function App() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1])
  // useTransform(useMotionValue, 값 범위 배열, 변환 값 배열)
  useEffect(() => { x.onChange(() => console.log(potato.get()))}, [x])
  return (
    <Wrapper>
      <Box style={{ x: x, scale: potato }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
