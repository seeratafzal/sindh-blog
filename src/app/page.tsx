import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Maga from "@/components/Maga";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
   <div>
   
    <NavBar/>
    <Feature/>
    <Maga/>
    <AuthorCard/>
   <Footer/>
   </div>
  );
}
