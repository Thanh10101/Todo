"use client"
import ContextChild from "../../../component/child_component/context_child";
import { AppProvider } from "../../../context/AppContext";

export default function UseContext() {
  
  return (
    <>
      <AppProvider>    
          <ContextChild />
      </AppProvider>
    </>
  );
}
