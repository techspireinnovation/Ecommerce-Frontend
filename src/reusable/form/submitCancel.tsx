import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

const SubmitCancel = () => {
  return (
    <Field orientation="horizontal" className="mt-5">
      <Button className="w-[50%]" type="submit">
        Submit
      </Button>
      <Button className="w-[50%]" variant="outline" type="button">
        Cancel
      </Button>
    </Field>
  );
};

export default SubmitCancel;
