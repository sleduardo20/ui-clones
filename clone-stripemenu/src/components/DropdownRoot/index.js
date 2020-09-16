import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Context } from '../../hooks';
import DropdownSection from '../DropdownSection';

function DropdownRoot() {
  const { options, cachedId, getOptionById, targetId } = useContext(Context);

  const cachedOption = useMemo(() => getOptionById(cachedId),
    [cachedId, getOptionById]);

  let [width, height, x] = [0, 0, 0];

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption;

    width = contentDimensions?.width;
    height = contentDimensions?.height;
    x = optionCenterX - width / 2;
  }

  const [hovering, setHovering] = useState(false);
  const [hasInterected, setHasInterected] = useState(false);

  const isActive = targetId !== null || hovering;

  const isFisrtIterection = isActive && !hasInterected;

  if(isFisrtIterection){
    setTimeout(()=>{
      if(!hasInterected) setHasInterected(true);
    }, 15);
  }
  
  return (
    <div className="dropdown-root">
      <motion.div
        className="dropdown-container"
        animate={{
          x,
          width,
          height,
          pointerEvents: isActive ? "unset" : "none",
        }}
        transition={{
          ease: "easeOut",
          x: isFisrtIterection ? {duration: 0} : {duration: .22},
          width: {duration: isFisrtIterection ? 0 : 0.22 * .93},
          height: {duration: isFisrtIterection ? 0 : 0.22 * .93},
          pointerEvents:{delay: 0.05},
        }}
        onHoverStart={()=> setHovering(true)}
        onHoverEnd={()=> setHovering(false)}
      >
        <motion.div
          animate={{
            x: -x,
          }}
          transition={{
            x: isFisrtIterection ? {duration: 0} : undefined,
          }}
        >
          {options.map((item) => (<DropdownSection key={item.id} option={item} />))}
        </motion.div>
      </motion.div>
        
      <DropdownArrow isFisrtIterection={isFisrtIterection} />
    </div>
  );
}

export default DropdownRoot;

function DropdownArrow({isFisrtIterection}){
  const {cachedId, getOptionById} = useContext(Context);
  
  const cachedOption = useMemo(() => getOptionById(cachedId),
  [cachedId, getOptionById]);

  const x = cachedOption ? cachedOption.optionCenterX : 0;
  
  return(
    <motion.div 
      className="dropdown-arrow"
      initial={{
        opacity: 0,
      }}
      animate={{
        x,
        pointerEvents: 'none',
        opacity: x > 0 ? 1 : 0,
      }}
      transition={{
        ease: 'easeOut',
        x: {duration: isFisrtIterection ? 0 : .22},
      }}
    />
  )
}
