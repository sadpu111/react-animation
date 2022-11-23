import { motion } from 'framer-motion';
import { useRef } from 'react';
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        {/* 기준이 되는 컴포넌트 */}
        <Box drag dragConstraints={biggerBoxRef}
        /* ref를 적용하는 컴포넌트 */
        dragElastic={0}
        /* 0~1의 값(0이면 박스안에 머무른다) */
        variants={boxVariants}
        dragSnapToOrigin 
        whileHover="hover" whileTap="click" whileDrag="drag" />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
