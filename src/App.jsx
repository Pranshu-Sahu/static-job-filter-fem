import { useState } from "react";
import { List, SearchContainer } from "./components/index";
import data from "./constants/data";

export default function App() {
  const [searchItemList, setSearchItemList] = useState({
    item: [],
    list: data,
  });
  const handleFilter = (searchTool) => {
    if (!searchItemList.item.includes(searchTool)) {
      setSearchItemList((prevState) => {
        const { item, list } = prevState;
        const updatedItem = [...item, searchTool];
        const filteredList = data.filter((item) => {
          const tools = [item.role, item.level, ...item.languages, ...item.tools];
          return updatedItem.every((r) => tools.includes(r));
        });
        return { item: updatedItem, list: filteredList };
      });
    }
  };

  const removeSearchItem = (searchElem) => {
    setSearchItemList((prevState) => {
      const { item, list } = prevState;
      const updatedItem = item.filter((x) => x !== searchElem);
      const filteredList = data.filter((item) => {
        const tools = [item.role, item.level, ...item.languages, ...item.tools];
        return updatedItem.every((r) => tools.includes(r));
      });
      return {
        item: updatedItem,
        list: updatedItem.length > 0 ? filteredList : data,
      };
    });
  };
  const clearSearch = () => {
    setSearchItemList({
      item: [],
      list: data,
    })
  }
  const SearchItemElements = searchItemList.item.map((item) => (
    <SearchContainer data={item} removeSearchItem={removeSearchItem} />
  ));

  const listElements = searchItemList.list.map((item) => (
    <List key={item.id} {...item} handleFilter={handleFilter} />
  ));

  return (
    <div className="App">
      <div className="App-overlay"></div>
      {searchItemList.item.length > 0 && (
        <div className="mx-auto bg-white p-5 w-9/12 -translate-y-1/2 rounded-md shadow-lg flex gap-2">
          {SearchItemElements}
          <button className="ml-auto text-cyan-400 hover:text-cyan-700 underline" onClick={clearSearch}>Clear</button>
        </div>
      )}
      <div className="flex flex-col gap-y-2">{listElements}</div>
    </div>
  );
}
