import React, { useEffect, useState } from "react";
import { Stack, Text, Checkbox, Heading, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/productReducer/action";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const { products, productFor } = useSelector((store) => store.productReducer);
  const [filters, setFilters] = useState({});
  const [params, setParams] = useState({ productFor });
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts(params));
    setSearchParams(params);
  }, [productFor, params]);

  useEffect(() => {
    let thisFilter = {
      category: [],
      fabric: [],
      pattern: [],
      sleeveLength: [],
    };
    for (let i = 0; i < products.length; i++) {
      if (!thisFilter.category.includes(products[i].category)) {
        thisFilter.category.push(products[i].category);
      }
      if (!thisFilter.fabric.includes(products[i].fabric)) {
        thisFilter.fabric.push(products[i].fabric);
      }
      if (!thisFilter.pattern.includes(products[i].pattern)) {
        thisFilter.pattern.push(products[i].pattern);
      }
      if (!thisFilter.sleeveLength.includes(products[i].sleeveLength)) {
        thisFilter.sleeveLength.push(products[i].sleeveLength);
      }
    }
    setFilters(thisFilter);
  }, [products]);

  const onSelectFilter = (e, filter, item) => {
    let thisParams = { ...params };
    if (e.target.checked) {
      if (thisParams[filter] == undefined) {
        thisParams[filter] = [];
      }
      thisParams[filter].push(item);
    } else {
      let itemInd = thisParams[filter].indexOf(item);
      thisParams[filter].splice(itemInd, 1);
    }
    setParams(thisParams);
  };

  return (
    <div>
      <Select
        placeholder="Sort By: price"
        style={{ border: "1px solid rgb(240, 240, 240)" }}
      >
        <option value="h2l">High to low</option>
        <option value="l2h">Low to high</option>
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
        {Object.keys(filters).map((filter) => {
          return (
            <Stack key={filter}>
              <Text textAlign={"left"} fontSize="lg" fontWeight={"700"}>
                {filter}
              </Text>
              {filters[filter]?.map((item, ind) => {
                return (
                  <Checkbox
                    size="md"
                    colorScheme="pink"
                    key={ind}
                    onChange={(e) => onSelectFilter(e, filter, item)}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Stack>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
