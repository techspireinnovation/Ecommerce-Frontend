import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DialogCreateFormHeader = ({ pageFor }: { pageFor: string }) => {
  return (
    <>
      <DialogHeader className="gap-0">
        <DialogTitle>Add New {pageFor}</DialogTitle>
        <p>Fill in the details below</p>
      </DialogHeader>
    </>
  );
};

export default DialogCreateFormHeader;
