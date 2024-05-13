import Button from "./Button";

export default function Header() {
  return (
    <div className="h-creen flex justify-center">
      <Button> Test Me</Button>
      <Button>
        <span> Click Me </span>{" "}
      </Button>
      <h1 className="text-8xl text-red-800 font-normal pt-[50px]">todos</h1>
    </div>
  );
}
