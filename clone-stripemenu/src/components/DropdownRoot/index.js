import React, { useContext, useEffect, useMemo, useState } from 'react';
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

  useEffect(()=>{
    if(isActive) return;

    let timeOut = setTimeout(() => 
      setHasInterected(false),
      .22 * 1000 * 0.9
    );

    return () => clearTimeout(timeOut);

  },[isActive])
  
  return (
    <div style={{perspective: 2000}}>
    
    <motion.div 
      className="dropdown-root"
      animate={{
        opacity: isActive? 1 : 0,
        rotateX: isActive? 0 : -15,
        
      }}
      transition={{
        opacity:{duration: .22, delay: 0.05},
        rotateX:{duration: .22, delay: 0.05},
      }}
      >
      
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
        <DropdownBackground />
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
    </motion.div>
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


export function DropdownBackground(){
  const { cachedId, getOptionById} = useContext(Context);

  const cachedOption = useMemo(() => getOptionById(cachedId),
    [cachedId, getOptionById]);

  const backgroundHeight = cachedOption?.backgroundHeight || 0;

  return(
    <motion.div
      className="dropdown-background"
      animate={{
        height: backgroundHeight,
      }}
      transition={{
        ease: 'easeOut',
        duration: .22,
      }}
    
    />

    
  )
}