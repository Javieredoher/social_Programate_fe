import React from "react";
import  Footer  from "../components/Footer/Footer"
import ForumCreateResources from "../components/ForumAddResources/ForumAddResources";
import Header from "../components/header/header";


const CreateResourcePage = () => {
  return (
    <>  
        <Header />
        <ForumCreateResources />
        <Footer />
    </>
  );
};

export default CreateResourcePage;