import { createContext, useState } from "react";

const QueryContext = createContext({
  query: "",
  color: "",
  onUpdateQuery: (newQuery) => {},
  onUpdateColor: (newColor) => {},
});

export const QueryContextProvider = (props) => {
  const [query, setQuery] = useState("apple");
  const [color, setColor] = useState("");

  const updateQueryHandler = (newQuery) => {
    setQuery(newQuery);
  };

  const updateColorHandler = (newColor) => {
    setColor(newColor);
  };

  return (
    <QueryContext.Provider
      value={{
        query,
        color,
        onUpdateQuery: updateQueryHandler,
        onUpdateColor: updateColorHandler,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryContext;
