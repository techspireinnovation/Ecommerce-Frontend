import { Field, FieldLabel } from "@/components/ui/field";
import React from "react";
type ReusableFieldProps = {
  label: string;
  children: React.ReactNode;
};

const ReusableField = ({ label, children }: ReusableFieldProps) => {
  return (
    <Field>
      <FieldLabel className="mt-4">{label}</FieldLabel>
      {children}
    </Field>
  );
};

export default ReusableField;
