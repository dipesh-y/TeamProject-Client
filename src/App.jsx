import React, { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './Pages/ProductDetails';
import ProductZoom from './components/ProductZoom';
import { IoCloseSharp } from "react-icons/io5";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductDetailsComponent from './components/ProductDetails';

export const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth] = useState(true);
  const [maxWidth] = useState('lg');

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    setOpenProductDetailsModal
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>

          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            
            <Button
              onClick={handleCloseProductDetailsModal}
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[5px] !bg-[#f1f1f1]"
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>

            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
