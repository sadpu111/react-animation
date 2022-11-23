import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import styled from "styled-components"


const Wrapper = styled(motion.div)`
  display: flex;
  height: 300vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360, 360])
  // useTransform(useMotionValue, 값 범위 배열, 변환 값 배열)
  const gradient = useTransform(x, [-800, 800],
    ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))","linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]);
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x: x, rotateZ: rotate, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
