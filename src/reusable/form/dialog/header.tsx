import { DialogHeader } from "@/components/ui/dialog";

const DialogCreateFormHeader = ({ pageFor }: { pageFor: string }) => {
  return (
    <>
      <DialogHeader>
        <h4>Add New {pageFor}</h4>
        <p>Fill in the details below</p>
      </DialogHeader>
    </>
  );
};

export default DialogCreateFormHeader;
