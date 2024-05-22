import Sidebar from "../Utilities/Sidebar";
import MainPageItems from "./MainPageItems";
import MainPageHeader from "../Utilities/MainPageHeader";
import RightSidebar from "../Utilities/RightSidebar";
// import Pagination from "../Pagination/Pagination";

const MainPage = (props) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-3/12 lg:w-3/12">
        <Sidebar />
      </div>
      <div className="w-9/12 lg:w-6/12 flex flex-wrap p-3">
        <MainPageHeader />
        {props.items.map((item) => (
          <MainPageItems
            key={item.id}
            login={item.login}
            avatar_url={item.avatar_url}
            html_url={item.html_url}
          />
        ))}
      </div>
      <div className="hidden lg:block lg:w-3/12">
        <RightSidebar />
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
