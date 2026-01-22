"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

interface SubmitCancelProps{
  onCancel?: () => void;
  isSubmitting?: boolean;
}

const SubmitCancel = ({ onCancel, isSubmitting = false }: SubmitCancelProps) => {
  return (
    <Field orientation="horizontal" className="mt-5">
      <Button className="w-[50%]" type="submit" >
       {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      <Button className="w-[50%]" variant="outline" type="button"  onClick={onCancel}
        disabled={isSubmitting}>
        Cancel
      </Button>
    </Field>
  );
};

export default SubmitCancel;
