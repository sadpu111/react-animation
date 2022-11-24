import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Btns = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 300px;
  background-color: transparent;

`;
const boxVariants = {
  entry: (back: boolean) => ({ // custom을 통해 variants를 함수화하고 조건에 맞게 변형
    x: back? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
      opacity: 0,
        scale: 0,
          transition: { duration: 1 }
  }),
};

function App() {
  const [visible, setVisible] = useState(5);
  const [back, setBack] = useState(false);
  const toNext = () => {
    setVisible((prev) => prev === 10 ? prev : prev + 1);
    setBack(false);
  }
  const toPrev = () => {
    setVisible((prev) => prev === 1 ? prev : prev - 1);
    setBack(true);
  }
  console.log(back);
  return (
    <Wrapper>
      <AnimatePresence custom={back} exitBeforeEnter>
        {/* motion 규칙에 따라 아래 <Box>안의 프로퍼티로 custom을 사용하려면 <AnimatePresence>에도 추가 필요 */}
        <Box
          custom={back}
          /* variants를 함수형태로 바꿔 상황에 맞게 작동하도록 커스터마이징 */
          key={visible} variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit">{visible}
        </Box>
      </AnimatePresence>
      <Btns>
        <button onClick={toPrev}>Prev</button>
        <button onClick={toNext}>Next</button>
      </Btns>
    </Wrapper>)
}

export default App;