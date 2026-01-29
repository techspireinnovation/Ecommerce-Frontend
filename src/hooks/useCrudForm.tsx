import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useCrudForm<T>({
  schema,
  defaultValues,
  isEdit,
  selectedId,
  showFn,
}: {
  schema: any;
  defaultValues: T;
  isEdit: boolean;
  selectedId?: number;
  showFn: (id: number) => Promise<any>;
}) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    shouldUnregister: false,
  });

  useEffect(() => {
    if (!isEdit || !selectedId) return;

    showFn(selectedId).then((res) => {
      methods.reset(res.data.data);
    });
  }, [isEdit, selectedId]);

  return methods;
}
