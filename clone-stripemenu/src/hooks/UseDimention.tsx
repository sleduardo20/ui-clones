import React, { useState } from 'react';

const getDimensions = (element: any) => element.getBoundingClientRect();

const useDimentions: React.FC = (responsive: boolean) => {
  const [dimensions, setDimensions] = useState(null);
  const [element, setElement] = useState(null);
};

export default useDimentions;
