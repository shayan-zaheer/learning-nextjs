import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
