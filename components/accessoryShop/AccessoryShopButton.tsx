import { Button } from "@adobe/react-spectrum";
import { FC } from "react";

interface AccessoryShopButtonProps {
  label: string;
  onPress?: () => void;
}

export const AccessoryShopButton: FC<AccessoryShopButtonProps> = ({
  label,
  onPress,
}) => {
  return (
    <Button
      variant="primary"
      onPress={onPress}
      UNSAFE_className="accessory-button"
    >
      {label}
    </Button>
  );
};
