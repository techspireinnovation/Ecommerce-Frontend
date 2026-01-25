import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DialogCreateFormHeader = ({ pageFor }: { pageFor: string }) => {
  return (
    <>
      <DialogHeader className="gap-0">
        <DialogTitle><h4 className="mb-0">Add New {pageFor}</h4></DialogTitle>
        <p>Fill in the details below</p>
      </DialogHeader>
    </>
  );
};

export default DialogCreateFormHeader;
