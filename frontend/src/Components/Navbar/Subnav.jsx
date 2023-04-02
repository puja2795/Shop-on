import styles from "./Subnav.module.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DATA from "./navbardata.json";
import { setProductFor } from "../../Redux/productReducer/action";

export const Subnav = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productFor } = useSelector((store) => {
    return store.productReducer;
  });

  const onSelectCategory = (category) => {
    console.log(category);
    dispatch(setProductFor(category));
    localStorage.setItem("productFor", productFor);
    navigate("/products");
  };

  return (
    <>
      <div className={styles.subnav}>
        {DATA.map((el, ind) => {
          return (
            <div
              key={ind}
              className={styles.subItem}
              onMouseLeave={() => setShowSubMenu(false)}
              onMouseEnter={() => {
                setShowSubMenu(true);
                setSelectedData(el);
              }}
              onClick={() => onSelectCategory(el.key)}
            >
              {el.name}
            </div>
          );
        })}
      </div>
      {showSubMenu && (
        <div
          className={styles.subsubnav}
          onMouseLeave={() => setShowSubMenu(false)}
          onMouseEnter={() => {
            setShowSubMenu(true);
          }}
        >
          {selectedData?.items.map((el, ind) => {
            return (
              <div
                key={ind}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
                className={ind % 2 != 0 ? styles.submenu : ""}
              >
                <div className={styles.submenuHead}>{el.subname}</div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "10px",
                  }}
                >
                  {el.subitems.map((subel, subelInd) => {
                    return (
                      <Link to={"/products"} key={subelInd}>
                        <div>{subel.item}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
