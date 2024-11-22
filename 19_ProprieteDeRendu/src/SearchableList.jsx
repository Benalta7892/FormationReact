import { Fragment, useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

export function SearchableList({ items, itemComponent: ItemComponent }) {
  const [search, setSearch] = useState("");
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, items]);
  const [selectedItemIndex, setSelectedIndex] = useState(8);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  const handleKeys = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((v) => (v + 1 + filteredItems.length) % filteredItems.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((v) => (v - 1 + filteredItems.length) % filteredItems.length);
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
            {ItemComponent ? (
              <ItemComponent active={k === selectedItemIndex} item={item} />
            ) : (
              <li
                aria-current={k === selectedItemIndex}
                className={clsx("list-group-item", k === selectedItemIndex && "active")}
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
