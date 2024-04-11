// components/SearchBar.tsx
import type React from "react";
import { useState } from "react";
import { SearchIcon } from "../atoms/icons";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="form-control">
      <div className="relative">
        <input
          type="search"
          placeholder="お気に入りのドラマを探す"
          className="w-full pr-16 input input-bordered bg-darkgray"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 rounded-l-none btn btn-square btn-primary"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
