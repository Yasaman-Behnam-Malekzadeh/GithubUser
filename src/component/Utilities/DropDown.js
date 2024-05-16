import Dropdown from "react-bootstrap/Dropdown";

function BasicExample({ title, listItems }) {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle
        size="sm"
        style={{
          backgroundColor: "#f3f4f6",
          color: "#000",
          border: "1px solid #d1d5db",
          fontSize: "12px",
          borderRadius:'5px'
        }}
        id="dropdown-basic"
      >
        <span className="text-xs text-gray-600">Sort by :</span>
        <span className="pr-2">{title}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listItems.map((item) => (
          <Dropdown.Item
            style={{ fontSize: "14px" }}
            key={item.id}
            href="#/action-1"
          >
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
