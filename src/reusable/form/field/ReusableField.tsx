import { Field, FieldLabel } from "@/components/ui/field";
import React from "react";
type ReusableFieldProps = {
  label: string;
  children: React.ReactNode;
};

const ReusableField = ({ label, children }: ReusableFieldProps) => {
  return (
    <Field className="gap-2 mt-2">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </Field>
  );
};

export default ReusableField;
