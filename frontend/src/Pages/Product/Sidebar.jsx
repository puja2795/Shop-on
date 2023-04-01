import React from "react";
import { Stack, Text, Checkbox, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const productStore = useSelector((store) => store.productReducer);
  console.log(productStore);
  const selectedProduct = productStore.selectedCategory;
  const categories = selectedProduct.items;
  return (
    <div>
      <Heading size={"lg"} textAlign={"left"}>
        {selectedProduct.name}
      </Heading>
      <div style={{ textAlign: "left", paddingBottom: "40px" }}>
        Showing 1-20 out of 10000 products
      </div>
      {categories?.map((el, ind) => {
        return (
          <Stack key={ind}>
            <Text textAlign={"left"} fontSize="lg" fontWeight={"700"}>
              {el.subname}
            </Text>
            {el.subitems.map((item, ind) => {
              return (
                <Checkbox size="md" colorScheme="pink" key={ind}>
                  {item.item}
                </Checkbox>
              );
            })}
          </Stack>
        );
      })}
    </div>
  );
};

export default Sidebar;
