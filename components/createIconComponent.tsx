import { ReactNode } from "react";
import * as Icon from "react-icons/fa";

const createIconComponent = (iconName: string) => {
  var IconComponent = Icon[iconName];
  return <IconComponent />;
};

export default createIconComponent;
