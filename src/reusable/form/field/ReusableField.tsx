import { Field, FieldLabel } from "@/components/ui/field";
import React from "react";
type ReusableFieldProps = {
  label: string;
  children: React.ReactNode;
};

const ReusableField = ({ label, children }: ReusableFieldProps) => {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      {children}
    </Field>
  );
};

export default ReusableField;
