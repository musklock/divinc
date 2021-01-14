import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

 const selectObjects = [
        {
        id: 0,
        value: "ARts, Audio/Video Technology, Communication",
        },
        {
        id: 1,
        value: "Architecture, Construction and Manufacturing"
        },
        {
        id: 2,
        value: "Agriculture, Food and Natural Resources",
        },
        {
        id: 3,
        value: "Business, Managemetn and Administration",
        },
        {
        id: 4,
        value: "Education",
        },
        {
        id: 5,
        value: "Engineering",
        },
        {
        id: 6,
        value: "Government and Public Services",
        },
        {
        id: 7,
        value: "Healthcare",
        },
        {
        id: 8,
        value: "Hospitality",
        },
        {
        id: 9,
        value: "Information Technology",
        },
        {
        id: 10,
        value: "Law/Legal",
        },

        ]

function Dropdown({ title, selectObjects, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);