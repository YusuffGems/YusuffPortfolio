import { toast as sonnerToast } from "sonner";

export const useToast = () => ({
  toast: ({ title, description }: { title: string; description?: string }) => {
    sonnerToast(title, { description });
  },
});
