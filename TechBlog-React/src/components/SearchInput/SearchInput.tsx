import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProp {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: SearchInputProp) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div className="search-form">
      <div className="search-wrapper">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchInput;
