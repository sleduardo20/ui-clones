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

  return (
    <>
      <motion.button
        className="dropdown-option"
        type="button"
        ref={optionsHook}
      >
        {name}
      </motion.button>

    </>
  );
}
