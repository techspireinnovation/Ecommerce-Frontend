import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

const ReusableDialog = ({ isModalOpen, setModalOpen, children }: any) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen} >
      <DialogContent className="sm:max-w-[50vw] max-h-[90vh] overflow-y-auto">
        {children}
      </DialogContent>
    </Dialog>
  );
};


export default ReusableDialog;
