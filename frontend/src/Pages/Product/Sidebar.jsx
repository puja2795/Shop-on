import React, { useEffect, useState } from "react";
import { Stack, Text, Checkbox, Heading, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setFilter } from "../../Redux/productReducer/action";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./Sidebar.module.css";

const filters = {
  men: {
    category: {
      "men jeans": false,
      "men shirts": false,
      "men trousers": false,
      "men tshirts": false,
    },
    fabric: {
      Denim: false,
      Cotton: false,
      "Cotton Blend": false,
      Lycra: false,
      Polycotton: false,
      Rayon: false,
      Crepe: false,
      "Lycra ": false,
      Polyester: false,
    },
    pattern: {
      Solid: false,
      "Dyed/Washed": false,
      "Placement Print": false,
      Checked: false,
      Printed: false,
      Striped: false,
      "Self-Design": false,
      Textured: false,
    },
    sleeveLength: {
      "Long Sleeves": false,
      "Short Sleeves": false,
      "Three-Quarter Sleeves": false,
    },
  },
  women: {
    category: {
      "women dress": false,
      "women Jumpsuits": false,
      "women sweaters": false,
      "women tops": false,
    },
    fabric: {
      Polyester: false,
      Rayon: false,
      "Poly Crepe": false,
      Crepe: false,
      Georgette: false,
      Lycra: false,
      Viscose: false,
      "Cotton Blend": false,
      "Poly Georgette": false,
      Denim: false,
      Wool: false,
      Cotton: false,
      "Cotton Linen": false,
      Fleece: false,
      Acrylic: false,
      Polycotton: false,
      "Viscose Rayon": false,
    },
    pattern: {
      "Self-Design": false,
      Printed: false,
      Solid: false,
      Colorblocked: false,
      Striped: false,
      "Self-Design/Knitted Design": false,
      Embroidered: false,
      Chikankari: false,
    },
    sleeveLength: {
      "Short Sleeves": false,
      Sleeveless: false,
      "Three-Quarter Sleeves": false,
      "Long Sleeves": false,
      Solid: false,
    },
  },
  kids: {
    category: {
      "kids dresses": false,
      "kids rompers": false,
    },
    fabric: {
      Cotton: false,
      Crepe: false,
      "Cotton Blend": false,
      Satin: false,
      Polycotton: false,
      Georgette: false,
      Denim: false,
      Fleece: false,
    },
    pattern: {
      Printed: false,
      "Art Silk": false,
      Solid: false,
      "Dyed/ Washed": false,
      Embellished: false,
      "Self Design": false,
    },
    sleeveLength: {
      Sleeveless: false,
      "Short Sleeves": false,
      "Shoulder Straps": false,
      "Three-Quarter Sleeves": false,
      "Long Sleeves": false,
    },
  },
};

const Sidebar = () => {
  const { productFor } = useSelector((store) => store.productReducer);
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
    setSearchParams((prev) => ({ ...prev, productFor }));
    setParams((prev) => ({ productFor, limit: 100 }));
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
