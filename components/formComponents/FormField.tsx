import React from "react";
import { Flex, Text } from "@adobe/react-spectrum";
import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  required?: boolean;
  inputElement: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  inputElement,
}) => {
  return (
    <Flex direction="column" gap="size-100">
      <label className={styles.fieldLabel}>
        <Text>{label}</Text>
        {required && (
          <span aria-label="required" className={styles.required}>
            *
          </span>
        )}
      </label>
      {inputElement}
    </Flex>
  );
};
