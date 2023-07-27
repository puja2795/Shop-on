import React, { useEffect, useState } from "react";
import { Stack, Text, Checkbox, Heading, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setFilter } from "../../Redux/productReducer/action";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./Sidebar.module.css";

const filters = {
  "men-shirts": {
    color: {
      red: false,
      pink: false,
      black: false,
      blue: false,
    },
    size: {
      l: false,
      m: false,
      s: false,
      xl: false,
    },
  },
};

const Sidebar = () => {
  const { productFor } = useSelector((store) => store.productReducer);
  const [params, setParams] = useState({ category: productFor, limit: 100 });
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts(params));
    console.log(params);
    setSearchParams(() => {
      let thisParams = { ...params };
      delete thisParams.limit;
      return { ...thisParams };
    });
  }, [params]);

  useEffect(() => {
    setSearchParams((prev) => ({ ...prev, productFor }));
    setParams((prev) => ({ category: productFor, limit: 100 }));
  }, [productFor]);

  const onSelectFilter = (e, filter, item) => {
    let thisParams = { ...params };
    if (e.target.checked) {
      filters[productFor][filter][item] = true;
      if (thisParams[filter] == undefined) {
        thisParams[filter] = [];
      }
      thisParams[filter].push(item);
    } else {
      filters[productFor][filter][item] = false;
      let itemInd = thisParams[filter].indexOf(item);
      thisParams[filter].splice(itemInd, 1);
    }
    setParams(thisParams);
  };

  const sortHandler = (e) => {
    setParams((prev) => ({ ...params, sort: e.target.value }));
  };

  return (
    <div>
      <Select
        placeholder="Sort By: price"
        style={{ border: "1px solid rgb(240, 240, 240)" }}
        onChange={(e) => sortHandler(e)}
      >
        <option value="desc">High to low</option>
        <option value="asc">Low to high</option>
      </Select>
<br></br>
      <div style={{
          border: "1px solid rgb(240, 240, 240)",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "10px 15px",
        }}>
        <input placeholder="max price"/>
        <input  placeholder="min price"/>

      </div>
      <div
        style={{
          border: "1px solid rgb(240, 240, 240)",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "10px 15px",
        }}
      >
        <Text textAlign={"left"} fontWeight={600}>
          FILTERS
        </Text>
        {filters &&
          filters?.[productFor] &&
          Object.keys(filters?.[productFor]).map((filter) => {
            return (
              <div key={filter} className={styles.category}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text textAlign={"left"} fontSize="18px" fontWeight={"600"}>
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </Text>
                
                </div>
                <Stack>
                  {Object.keys(filters?.[productFor]?.[filter]).map(
                    (item, ind) => {
                      return (
                        <>
                          <Checkbox
                            size="md"
                            colorScheme="pink"
                            key={ind}
                            isChecked={filters[productFor][filter][item]}
                            onChange={(e) => onSelectFilter(e, filter, item)}
                          >
                            {item}
                          </Checkbox>
                        </>
                      );
                    }
                  )}
                </Stack>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default Sidebar;
