import { Heading } from "@adobe/react-spectrum";
import { FC } from "react";

interface AccessoryShopHeaderProps {
  title: string;
}

export const AccessoryShopHeader: FC<AccessoryShopHeaderProps> = ({
  title,
}) => {
  return (
    <Heading level={1} UNSAFE_className="accessory-title">
      {title}
    </Heading>
  );
};
