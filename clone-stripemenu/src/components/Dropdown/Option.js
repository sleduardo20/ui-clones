import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { motion } from 'framer-motion';

import { useDimensions, Context } from '../../hooks';

let lastOptionId = 0;

export function DropdownOption({ name, content: Content, backgroundHeight }) {
  const idRef = useRef(lastOptionId += 1);
  const id = idRef.current;

  const [optionsHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionsProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef();

        useEffect(() => {
          const contentDimensions = contentRef.current.getBoundingClientRect();
          updateOptionsProps(id, { contentDimensions });
        }, []);

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        );
      };

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight,

      });

      setRegistered(true);
    } else if (registered && optionDimensions) {
      updateOptionsProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
      });
    }
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionsProps,
    deleteOptionById,
    backgroundHeight,

  ]);

  useEffect(() => {
    deleteOptionById(id);
  }, [deleteOptionById, id]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => (window.isMobile = true);

  const handleClick = (e) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <>
      <motion.button
        className="dropdown-option"
        type="button"
        ref={optionsHook}
        onMouseDown={handleClick}
        onHoverStart={() => !window.isMobile && handleOpen()}
        onHoverEnd={() => !window.isMobile && handleClose()}
        onTouchStart={handleTouch}
        onFocus={handleOpen}
        onBlur={handleClose}
      >
        {name}
      </motion.button>

    </>
  );
}
