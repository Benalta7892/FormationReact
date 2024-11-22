import { Fragment, useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

export function SearchableList({ items, itemRenderer }) {
  const [search, setSearch] = useState("");
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, items]);
  const [SelectedItemIndex, setSelectedIndex] = useState(8);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  const handleKeys = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedItem((v) => (v + 1 + filteredItems.length) % filteredItems.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedItem((v) => (v - 1 + filteredItems.length) % filteredItems.length);
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mb-1"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeys}
      />
      <ul className="list-group" style={{ listStyle: "disc", paddingLeft: "20px" }}>
        {filteredItems.map((item, k) => (
          <Fragment key={item.name}>
            {itemRenderer ? (
              itemRenderer(item)
            ) : (
              <li
                aria-current={k === SelectedItemIndex}
                className={clsx("list-group-item", k === SelectedItemIndex && "active")}
                key={item.name}
              >
                {item.name}
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
