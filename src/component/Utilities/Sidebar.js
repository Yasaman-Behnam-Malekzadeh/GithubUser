import SidebarItem from "./SidebarItem";

function Sidebar() {
  const filterItems = [
    {
      id: 1,
      title: "code",
      numbers: 230000,
    },
    {
      id: 2,
      title: "users",
      numbers: 23,
    },
    {
      id: 3,
      title: "issues",
      numbers: 370000,
    },
  ];
  return (
    <div className="w-1/5 border-right p-3">
      <div className="text-md font-semibold mb-2">Filter by</div>
      <div>
        {filterItems.map((item) => (
          <div key={item.id}>
            <SidebarItem title={item.title} numbers={item.numbers} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
