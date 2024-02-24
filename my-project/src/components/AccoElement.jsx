import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const AccoElement = ({ques,referece}) => {
  
  const [ans, setAns] = useState(false);

  return (
    <motion.div  drag dragElastic={0.5}  dragConstraints={referece} whileDrag={{scale:.9}} layout onClick={() => setAns(!ans)}
      className={`shadow bg-red-50 h-auto p-2 py-5 rounded-xl cursor-pointer`}
    >
      <div className="flex items-center gap-5 font-syne">
        <motion.p
        
          initial={{
            rotate: "0deg",
          }}
          animate={{
            rotate: ans ? "360deg" : "0deg",
          }}
          transition={{
            duration: .5,
            ease: "easeInOut"
          }}
          className="p-2 rounded-full text-xl shadow-md"
        >
          {ans ? "➖" : "➕"}
        </motion.p>
        <h1 className="font-semibold tracking-tight text-4xl">{ques.question}</h1>
      </div>
      <AnimatePresence mode="popLayout">
      {ans && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",scale:1
          }}
          exit={{
            y: -10,
            opacity:0,
            height:[10,0 ,10],
            duration:1,
            scale:0
          }}
          className="rounded-xl px-16 py-2 bg-slate-300 mt-3"
        >
          <p
            className="text-xl font-semibold text-black font-montserrat"
          >
            {ques.answer}
          </p>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AccoElement;
