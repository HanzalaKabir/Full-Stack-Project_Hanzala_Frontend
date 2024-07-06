import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context";

import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoriesToShow, setnumberOfCategoriesToShow] = useState(0);
  const { hotelCategory, sethotelCategory } = useCategory();

  const { filterDispatch } = useFilter();

  const handleShowMoreRightClick = () => {
    setnumberOfCategoriesToShow((prev) => prev + 10);
  };

  const handleShowMoreLeftClick = () => {
    setnumberOfCategoriesToShow((prev) => prev - 10);
  };

  const handleFilterClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://full-stack-project-hanzala-backend.onrender.com/api/category"
        );
        const categoriesToShow = data.slice(
          numberOfCategoriesToShow,
          numberOfCategoriesToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoriesToShow]);

  const handleCategoryClick = (category) => {
    sethotelCategory(category);
  };

  return (
    <section className="d-flex align-scenter gap-large categories cursor-pointer">
      {numberOfCategoriesToShow >= 10 && (
        <button
          className="button btn-category btn-left fixed cursor-pointer"
          onClick={handleShowMoreLeftClick}
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      )}

      <div className="d-flex category_list_container">
        {categories &&
          categories.map(({ _id, category }) => (
            <span
              className={` category_item ${
                category === hotelCategory ? "border-bottom" : ""
              }`}
              key={_id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
      </div>
      {numberOfCategoriesToShow <= categories.length && (
        <button
          className="button btn-category btn-right fixed cursor-pointer"
          onClick={handleShowMoreRightClick}
        >
          <span className="material-icons-outlined">
            <span className="material-icons-outlined">chevron_right</span>
          </span>
        </button>
      )}
      <button
        className="button btn-filter d-flex align-center gap-small cursor-pointer fixed"
        onClick={handleFilterClick}
      >
        <span className="material-icons-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};
