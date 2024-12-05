"use client";

import { View, Flex } from "@adobe/react-spectrum";
import { FC } from "react";
import { AccessoryShopHeader } from "./AccessoryShopHeader";
import { AccessoryShopButton } from "./AccessoryShopButton";
import styles from "./AccessoryShop.module.css";

export const AccessoryShop: FC = () => {
  return (
    <View UNSAFE_className={styles.container}>
      <Flex direction="column" gap="size-200" alignItems="end">
        <AccessoryShopHeader title="JOSH ACCESSORIES" />
        <AccessoryShopButton label="Shop Now" />
      </Flex>
    </View>
  );
};
