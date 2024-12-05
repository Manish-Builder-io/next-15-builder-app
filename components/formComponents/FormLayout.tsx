import React from "react";
import {
  Provider,
  defaultTheme,
  Flex,
  View,
  Button,
  Heading,
} from "@adobe/react-spectrum";
import Add from "@spectrum-icons/workflow/Add";
import { TagList } from "./TagList";
import { FormSection } from "./FormSection";
import { FormField } from "./FormField";
import { UploadButton } from "./UploadButton";
import { HeaderActions } from "./HeaderActions";
import styles from "./FormLayout.module.css";

export interface FormLayoutProps {
  onSave: () => void;
  onCancel: () => void;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ onSave, onCancel }) => {
  return (
    <Provider theme={defaultTheme}>
      <main className={styles.formContainer}>
        <HeaderActions onSave={onSave} onCancel={onCancel} />
        <hr className={styles.divider} />

        <Flex direction="column" gap="size-200" maxWidth="size-6000">
          <View>
            <FormSection
              title="Section Title"
              actionButton={<UploadButton label="Upload" />}
            >
              <FormField
                label="Field A"
                required
                inputElement={
                  <TextField value="A1" aria-label="Field A input" />
                }
              />
            </FormSection>
          </View>

          <View
            backgroundColor="gray-75"
            padding="size-300"
            borderRadius="medium"
          >
            <Flex direction="column" gap="size-200">
              <FormField
                label="Field B"
                required
                inputElement={
                  <ComboBox defaultSelectedKey="B1">
                    <Item key="B1">B1</Item>
                  </ComboBox>
                }
              />

              <Flex gap="size-200" wrap>
                <FormField
                  label="Field C"
                  required
                  inputElement={
                    <ComboBox>
                      <Item key="C1">C1</Item>
                      <Item key="C2">C2</Item>
                      <Item key="C3">C3</Item>
                    </ComboBox>
                  }
                />
                <UploadButton label="Upload" />
              </Flex>

              <TagList
                tags={["C1", "C2", "C3"]}
                onRemove={(tag) => console.log("Remove tag:", tag)}
                onClearAll={() => console.log("Clear all tags")}
              />
            </Flex>
          </View>

          <Button
            variant="secondary"
            onPress={() => console.log("Add section")}
          >
            <Add />
            <Text>Add B</Text>
          </Button>
        </Flex>
      </main>
    </Provider>
  );
};
