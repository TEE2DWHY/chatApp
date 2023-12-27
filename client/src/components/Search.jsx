const Search = () => {
  return (
    <>
      <div className="search">
        <div className="search-form">
          <input type="text" placeholder="Find a user" />
        </div>
        <div className="user-chat">
          <img
            src="https://images.pexels.com/photos/2880979/pexels-photo-2880979.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
          <div className="user-chat-info">
            <span>Jane</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
