import { Box, Image, Button, Heading } from "@chakra-ui/react";
import ProductSidebar from "../components/ProductSidebar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../baseurl";
import { Select } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


export default function ProductPage() {

  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.productReducer);
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  let obj = {
    params: {
      minPrice: params.get("minPrice"),
      maxPrice: params.get("maxPrice"),
      type: params.get("type"),
      minWeight: params.get("minWeight"),
      maxWeight: params.get("maxWeight"),
    },
  };

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    // let params = {};
    // order && (params.order = order);
    // setParams(params);
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <>
      <Navbar />
      <Box>
        <Image
          src="https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp"
          alt="banner"
        />
        <Box
          p={"4"}
          bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box>
            <Button
              mr={"3"}
              bg={"white"}
              color={"black"}
              border="1px solid black"
            >
              All
            </Button>
            <Button
              mr={"3"}
              bg={"white"}
              color={"black"}
              border="1px solid black"
            >
              Try at Home
            </Button>
            <Button
              mr={"3"}
              bg={"white"}
              color={"black"}
              border="1px solid black"
            >
              Designs in Store
            </Button>
            <Button
              mr={"3"}
              bg={"white"}
              color={"black"}
              border="1px solid black"
            >
              Fast Delievery
            </Button>
            <Button
              mr={"3"}
              bg={"white"}
              color={"black"}
              border="1px solid black"
            >
              New in
            </Button>
          </Box>
          <Box>
            <Select
              placeholder="Sort by Price"
              onChange={(e) => handleChange(e)}
            >
              <option value="asc">Ascending by Price</option>
              <option value="desc">Descending by Price</option>
            </Select>
          </Box>
        </Box>
        <Box
          display={"grid"}
          mt={"10px"}
          gridTemplateColumns={{ base: "27% 73%", sm: "27% 73%" }}
        >
          {/*LEFT SIDEBAR */}
          <Box p={"8%"}>
            <ProductSidebar />
          </Box>

          {/* RIGHT PRODUCT PAGE */}
          <Box>
            {isLoading ? (
              <Heading
                mt={"5"}
                fontSize={"60px"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                Loading....
              </Heading>
            ) : (
              <Box>
                {data.length == 0 ? (
                  <Heading
                    textAlign={"center"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    mt={"155"}
                    fontSize={"40px"}
                  >
                    No Products available of this type
                  </Heading>
                ) : (
                  <Box
                    p={"3"}
                    display={"grid"}
                    gridTemplateColumns={"repeat(3,1fr)"}
                    gap={"10px"}
                  >
                    {data?.map((el) => (
                      <ProductCard key={el._id} {...el} />
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
