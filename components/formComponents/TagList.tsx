import React from "react";
import { Flex, Button } from "@adobe/react-spectrum";
import Close from "@spectrum-icons/workflow/Close";
import styles from "./TagList.module.css";

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
  onClearAll: () => void;
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  onRemove,
  onClearAll,
}) => {
  return (
    <Flex wrap gap="size-100">
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          <span>{tag}</span>
          <Button
            variant="ghost"
            size="S"
            aria-label={`Remove ${tag}`}
            onPress={() => onRemove(tag)}
          >
            <Close />
          </Button>
        </div>
      ))}
      {tags.length > 0 && (
        <Button variant="ghost" size="S" onPress={onClearAll}>
          Clear all
        </Button>
      )}
    </Flex>
  );
};
