import React from "react";
import { Heading, Flex, View } from "@adobe/react-spectrum";
import styles from "./FormSection.module.css";

interface FormSectionProps {
  title: string;
  actionButton?: React.ReactNode;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  actionButton,
  children,
}) => {
  return (
    <section className={styles.section}>
      <Flex justifyContent="space-between" alignItems="center">
        <View>
          <Heading level={2}>{title}</Heading>
          <div className={styles.sectionDivider} />
        </View>
        {actionButton}
      </Flex>
      {children}
    </section>
  );
};
