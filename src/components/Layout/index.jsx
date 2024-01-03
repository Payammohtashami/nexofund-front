import React from "react";

// components
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";


const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
