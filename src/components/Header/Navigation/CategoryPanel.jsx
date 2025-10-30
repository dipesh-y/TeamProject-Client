import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";



const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">
      <div className="p-3">
         <Link to="/" className="flex justify-center">
            <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="Logo"
                  className="w-[170px]"/>
         </Link>

                </div>
      <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between px-3">
        Shop By Categories
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          {/* Fashion */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left justify-start !pb-4  !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}
            {submenuIndex === 0 && (
              <ul className="submenu w-full">
                {/* Women */}
                <li className="list-none relative level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full">
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          Sarees
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Girls */}
                <li className="list-none relative level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Girls
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full">
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          Kurtas & Suits
                        </Link>
                      </li>
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          Tops
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Men */}
                <li className="list-none relative mb-1 level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Electronics */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className="!pb-4 w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Electronics
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}
            {submenuIndex === 1 && (
              <ul className="submenu w-full">
                {/* Mobile */}
                <li className="list-none relative level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Mobile
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full">
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          OnePlus
                        </Link>
                      </li>
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          OPPO
                        </Link>
                      </li>
                      <li className="list-none relative mb-1 level-3 pl-6">
                        <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                          Vivo
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Smartwatch */}
                <li className="list-none relative mb-1 level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Smartwatch
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Bags */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className=" !pb-4 w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Bags
              </Button>
            </Link>
          </li>
          {/* Footwear */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Footwear
              </Button>
            </Link>
            {submenuIndex === 2 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}
            {submenuIndex === 2 && (
              <ul className="submenu w-full">
                <li className="list-none relative mb-1 level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men Footwear
                    </Button>
                  </Link>
                </li>
                <li className="list-none relative mb-1 level-2 pl-3">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women Footwear
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Groceries */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className=" !pb-4 w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Groceries
              </Button>
            </Link>
          </li>
          {/* Beauty */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className=" !pb-4 w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
          </li>
          {/* Wellness */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className=" !pb-4 w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
              </Button>
            </Link>
          </li>
          {/* Jewellery */}
          <li className="list-none flex items-center relative flex-col level-1 pl-0">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Jewellery
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
