import { Button } from "./button";

type ICounterProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
export const Counter = ({ value, setValue }: ICounterProps) => {
  return (
    <div className="flex items-center gap-4 border-primary border rounded-md w-min">
      <Button
        variant={"ghost"}
        className="text-primary"
        disabled={value === 1}
        onClick={() => value > 1 && setValue((v) => v - 1)}
      >
        -
      </Button>
      <p>{value}</p>
      <Button
        variant={"ghost"}
        className="text-primary"
        disabled={value === 10}
        onClick={() => value < 10 && setValue((v) => v + 1)}
      >
        +
      </Button>
    </div>
  );
};
