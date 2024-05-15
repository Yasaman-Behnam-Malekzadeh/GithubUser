function SidebarItem({ title, numbers }) {
  return (
    <div className="flex justify-between hover:bg-gray-100 p-1 px-2 rounded-lg hover:cursor-pointer">
      <div className="text-s">{title}</div>
      <div className="text-xs font-bold bg-slate-100 p-1 px-2 rounded-xl">
        {numbers}
      </div>
    </div>
  );
}

export default SidebarItem;
