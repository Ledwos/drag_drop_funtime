import React from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "../items";
import Marker from "../Marker/Marker";

const CustomDragLayer = () => {
  const { itemType, isDragging, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  function renderItem() {
    switch (itemType) {
      case ItemTypes.MARKER:
        return <Marker title={item.id} />;
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  return <div>{renderItem()}</div>;
};

export default CustomDragLayer;
