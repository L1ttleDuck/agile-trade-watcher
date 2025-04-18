
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getBinanceBotCode } from "@/utils/pythonCode";

interface PythonCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PythonCodeModal: React.FC<PythonCodeModalProps> = ({ isOpen, onClose }) => {
  const pythonCode = getBinanceBotCode();

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Python Trading Bot Implementation</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1">
          <pre className="bg-black text-green-400 p-4 rounded text-sm">
            <code>{pythonCode}</code>
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PythonCodeModal;
