import React, { useEffect, useState } from "react";
import { Stack, Text, Checkbox, Heading, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setFilter } from "../../Redux/productReducer/action";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { products, productFor, filters } = useSelector(
    (store) => store.productReducer
  );
  const [allProducts, setAllProducts] = useState([]);
  const [params, setParams] = useState({ productFor, limit: 100 });
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts(params));
    setSearchParams(() => {
      let thisParams = { ...params };
      delete thisParams.limit;
      return { ...thisParams };
    });
  }, [params]);

  useEffect(() => {
    if (productFor) {
      if (Object.keys(filters?.[productFor]).length === 0) {
        axios
          .get("http://localhost:8080/product", {
            params: { productFor, limit: 100 },
          })
          .then((res) => {
            setAllProducts(res.data);
          });
      }
    }
    setSearchParams((prev) => ({ ...prev, productFor }));
    setParams((prev) => ({ productFor, limit: 100 }));
  }, [productFor]);

  useEffect(() => {
    let thisFilter = {
      category: {},
      fabric: {},
      pattern: {},
      sleeveLength: {},
    };
    for (let i = 0; i < allProducts.length; i++) {
      thisFilter.category[allProducts[i].category] = false;
      thisFilter.fabric[allProducts[i].fabric] = false;
      thisFilter.pattern[allProducts[i].pattern] = false;
      thisFilter.sleeveLength[allProducts[i].sleeveLength] = false;
    }
    dispatch(setFilter(thisFilter));
  }, [allProducts]);

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
                  <p>down</p>
                </div>
                <Stack>
                  {Object.keys(filters?.[productFor]?.[filter]).map(
                    (item, ind) => {
                      return (
                        <Checkbox
                          size="md"
                          colorScheme="pink"
                          key={ind}
                          isChecked={filters[productFor][filter][item]}
                          onChange={(e) => onSelectFilter(e, filter, item)}
                        >
                          {item}
                        </Checkbox>
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
