const SearchBar = () => {
  return (
    <div className="pt-3 px-2">
      <input
        className="w-[92%] h-12 bg-slate-900 rounded-3xl text-yellow-50 text-lg p-3 "
        placeholder={"search songs, album and artist here"}
      ></input>
    </div>
  );
};

export default SearchBar;
