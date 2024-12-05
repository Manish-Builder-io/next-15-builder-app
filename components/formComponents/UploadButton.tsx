import React from "react";
import { Button } from "@adobe/react-spectrum";
import { Upload } from '@spectrum-icons/workflow';

interface UploadButtonProps {
  label: string;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ label }) => {
  return (
    <Button variant="secondary" onPress={() => console.log("Upload")}>
      <Upload />
      <Text>{label}</Text>
    </Button>
  );
};
