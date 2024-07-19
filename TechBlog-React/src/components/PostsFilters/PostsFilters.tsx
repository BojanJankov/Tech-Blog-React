import { useContext, useState } from "react";
import "./PostsFilters.css";
import { PostsContext } from "../../Context/PostsContext";

function PostsFilters() {
  const { filterPostsFunc } = useContext(PostsContext);
  const [mainSelectValue, setMainSelectValue] = useState("none");
  const [dateValue, setDateValue] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [monthValue, setMonthValue] = useState("");

  const renderSelects = (mainSelectValue: string) => {
    if (mainSelectValue === "date") {
      return (
        <select
          className="select-filters-two"
          value={dateValue}
          onChange={(e) => {
            setDateValue(e.target.value);
          }}
        >
          <option value="none" disabled>
            Order by:
          </option>
          <option value="asc">Newest</option>
          <option value="desc">Oldest</option>
        </select>
      );
    }

    if (mainSelectValue === "tag") {
      return (
        <select
          className="select-filters-three"
          value={tagValue}
          onChange={(e) => {
            setTagValue(e.target.value);
          }}
        >
          <option value="none" disabled>
            Select tag:
          </option>
          <option value="ai">Ai</option>
          <option value="xbox">Xbox</option>
          <option value="hackers">Hackers</option>
          <option value="apple">Apple</option>
          <option value="gaming">Gaming</option>
        </select>
      );
    }

    if (mainSelectValue === "month") {
      return (
        <select
          className="select-filters-four"
          value={monthValue}
          onChange={(e) => {
            setMonthValue(e.target.value);
          }}
        >
          <option value="none" disabled>
            Select month:
          </option>
          <option value="0">01</option>
          <option value="1">02</option>
          <option value="2">03</option>
          <option value="3">04</option>
          <option value="4">05</option>
          <option value="5">06</option>
          <option value="6">07</option>
          <option value="7">08</option>
          <option value="8">09</option>
          <option value="9">10</option>
          <option value="10">11</option>
          <option value="11">12</option>
        </select>
      );
    }
  };
  return (
    <div className="main-selects-div">
      <select
        className="select-filters-one"
        value={mainSelectValue}
        onChange={(e) => {
          setMainSelectValue(e.target.value);
        }}
      >
        <option value="none" disabled>
          Sort by:
        </option>
        <option value="month">Month</option>
        <option value="date">Date</option>
        <option value="tag">Tag</option>
      </select>
      <div className="second-select-filter-div">
        {mainSelectValue !== "none" ? renderSelects(mainSelectValue) : null}
      </div>
      <div className="main-button-filters-div">
        <button
          className="posts-filter-button"
          onClick={() => {
            filterPostsFunc(mainSelectValue, dateValue, tagValue, monthValue);
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default PostsFilters;
