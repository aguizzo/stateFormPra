import { useState } from "react";

// Import the components we created earlier
//import ProfileEditor from "./ProfileEditor";
import RegisterForm from "./RegisterForm";
import ShoppingCart from "./ShoppingCart";
import TodoList from "./TodoList";

export default function MultiFeatureApp() {
  const [activeFeature, setActiveFeature] = useState("register");

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "register":
        return <RegisterForm />;
      case "cart":
        return <ShoppingCart />;
      case "todo":
        return <TodoList />;
      // case "profile":
      //   return <ProfileEditor />;
      default:
        return <div>Select a feature</div>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setActiveFeature("register")}>
          Registration
        </button>
        <button onClick={() => setActiveFeature("cart")}>Shopping Cart</button>
        <button onClick={() => setActiveFeature("todo")}>Todo List</button>
        {/* <button onClick={() => setActiveFeature("profile")}>
          Profile Editor
        </button> */}
      </div>
      <div>{renderActiveFeature()}</div>
    </div>
  );
}
