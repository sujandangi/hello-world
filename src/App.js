import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import InlineStyle from "./components/InlineStyle";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import MountingLifecycleA from "./components/MountingLifecycleA";
import UpdatingLifecycleA from "./components/UpdatingLifecycleA"
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
     <ParentComp />
     
     {/* <UpdatingLifecycleA /> */}
     
      {/* <MountingLifecycleA /> */}
      
      {/* <Form /> */}

      {/* <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1>
     */}
      {/* <InlineStyle /> */}

      {/* <Stylesheet primary={true} /> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <ClassClick /> */}

      {/* <FunctionClick /> */}

      {/* <Counter /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>Child prop of Greet</p>
     
     </Greet> */}

      {/* <Message />   */}

      {/* <Welcome /> */}
    </div>
  );
}

export default App;
