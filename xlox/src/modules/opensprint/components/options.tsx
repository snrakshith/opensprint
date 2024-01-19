import { Checkbox } from "@/components/ui/checkbox";

type dataType = {
  id: string;
  label: string;
  info: boolean;
  infoText: string;
}[];

export function Options(props: any) {
  const { data } = props;
  return (
    <>
      {data?.map((item: any) => {
        return (
          <div className="items-top flex space-x-2">
            <Checkbox id={item.id} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
              {item.info && (
                <p className="text-sm text-muted-foreground">{item.infoText}</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
