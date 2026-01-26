import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DialogCreateFormHeader = ({ pageFor }: { pageFor: string }) => {
  return (
    <>
      <DialogHeader className="gap-0">
        <DialogTitle className="!text-xl mb-1">Add New {pageFor}</DialogTitle>
        <p className="!text-sm">Fill in the details below</p>
      </DialogHeader>
    </>
  );
};

export default DialogCreateFormHeader;
