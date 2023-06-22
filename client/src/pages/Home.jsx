import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" >
          <motion.header {...headContainerAnimation} className="header-div">
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                yo<span className="text-stylish">U</span>r{" "}
                <span className="text-stylish2">S</span>tyle,{" "}
                <div className="amplified">
                  <span className="text-stylish">A</span>mplified
                </div>
              </h1>
            </motion.div>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation} {...headContentAnimation} >
            
              <CustomButton
                type="filled"
                title="customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
