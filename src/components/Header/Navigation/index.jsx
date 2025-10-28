import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);
  const openCategoryPanel = (value) => {
    setIsOpenCatPanel(value !== undefined ? value : !isOpenCatPanel);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" /> 
              Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col_2 w-[50%] ">
            <ul className="flex items-center gap-3 nav ">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                  <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
             
             <li className="list-none relative">
                <Link
                  to="/ProductListing"
                  className="link transition text-[16px] !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                  <Button className="link transition !font-[500] !font-bold 
                  !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white 
                shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full 
                      !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Men</Button>

                       <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white 
                shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">T-Shirt</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Pents</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Jeans</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Footwear</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Watches</Button>
                      </Link>
                      </li>
                      

                  </ul>
                </div>


                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left 
                      !justify-start !rounded-none hover:!text-[#ff5252]">Women</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">kids</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none  hover:!text-[#ff5252]">Girls</Button>
                      </Link>
                      </li>
                      
                      <li className="list-none w-full">
                        <Link to="/" className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Boys</Button>
                      </Link>
                      </li>
                      

                  </ul>
                </div>
                </li>
             
              <li className="list-none relative">
                <Link
                  to="/ProductListing"
                  className="link transition text-[16px] !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                  <Button className="link transition !font-[500] !font-bold 
                  !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
                </li>

                
                    <li className="link transition text-[16px] !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                      <Link to="/" className="w-full">
                        <Button className="link transition !font-[500] !font-bold 
                        !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                   Bags
                  </Button>
                      </Link>
                      </li>
                      
          
               <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[16px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                   Footwear
                  </Button>
                </Link>
                </li>
            


              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[16px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                   Jewellery
                  </Button>
                </Link>
            
                
              </li>
               </ul>
          </div>
          <div className="col_3 w-[30%]">
            <p className="text-[14px] font-bold flex items-center gap-3 mb-0 mt-0">
              <MdOutlineRocketLaunch className="text-[14px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
