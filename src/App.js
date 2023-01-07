import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex sm:max-w-[100vw] md:mx-auto md:my-auto bg-[#051a1d]">
      <div className="border-r border-gray-400">
        <Navbar />
        <Search />
        <Contacts />
      </div>
      <Chats />
    </div>
  );
}

export default App;
