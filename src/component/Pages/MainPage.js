import Sidebar from "../Utilities/Sidebar";
import MainPageItems from "./MainPageItems";
// import Pagination from "../Pagination/Pagination";

const MainPage = (props) => {
  return (
    <div className="w-full flex flex-row">
      <Sidebar />
      <div className="w-3/5 flex flex-wrap p-3">
        {props.items.map((item) => (
          <MainPageItems
            key={item.id}
            login={item.login}
            avatar_url={item.avatar_url}
            html_url={item.html_url}
          />
        ))}
      </div>

      {/* <Pagination
        itemsPerPage={5}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default MainPage;
