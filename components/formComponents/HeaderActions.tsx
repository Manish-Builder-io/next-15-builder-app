import React from "react";
import { Flex, Button } from "@adobe/react-spectrum";
import Back from "@spectrum-icons/workflow/Back";
import styles from "./HeaderActions.module.css";

interface HeaderActionsProps {
  onSave: () => void;
  onCancel: () => void;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  onSave,
  onCancel,
}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap="size-100" alignItems="center">
        <Button variant="ghost" aria-label="Go back">
          <Back />
        </Button>
        <span className={styles.title}>SM</span>
      </Flex>
      <Flex gap="size-100">
        <Button variant="secondary" onPress={onCancel}>
          Cancel
        </Button>
        <Button variant="accent" onPress={onSave}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
