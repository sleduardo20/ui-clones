import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface OptionsProps {
  id: string;
  optionDimentions: string;
  optionCenterX: string;
  wrapperContent: string;
  backgroundHeight: string;
}

interface ContextData {
  options: OptionsProps[];
  targetId: null;
  setTargetId: Dispatch<SetStateAction<null>>;
  cacheId: null;
  setCacheId: Dispatch<SetStateAction<null>>;

  registerOption({
    id,
    backgroundHeight,
    optionCenterX,
    optionDimentions,
    wrapperContent,
  }: OptionsProps): void;
  updateOptionsProps(optionId: string, props: string): void;
  getOptionById(id: string): void;
  deleteOptionById(id: string): void;
}

const Context = React.createContext({} as ContextData);

const DropdownProvider: React.FC = ({ children }) => {
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [targetId, setTargetId] = useState(null);
  const [cacheId, setCacheId] = useState(null);

  const registerOption = useCallback(
    (option: OptionsProps) => {
      setOptions(items => [
        ...items,
        {
          id,
          backgroundHeight,
          optionCenterX,
          wrapperContent,
          optionDimentions,
        },
      ]);
    },
    [setOptions],
  );

  const updateOptionsProps = useCallback(
    ({ optionId, props }) => {
      setOptions(items =>
        items.map(item => {
          if (item.id === optionId) {
            item = { ...item, ...props };
          }
          return item;
        }),
      );
    },
    [setOptions],
  );

  const getOptionById = useCallback(
    id => options.find(item => item.id === id),

    [options],
  );

  const deleteOptionById = useCallback(
    id => {
      setOptions(items => items.filter(item => item.id !== id));
    },
    [setOptions],
  );

  useEffect(() => {
    if (targetId !== null) setCacheId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionsProps,
        deleteOptionById,
        getOptionById,
        options,
        cacheId,
        setCacheId,
        setTargetId,
        targetId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default DropdownProvider;
