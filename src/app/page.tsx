import { Button, ListPage } from "@/components";

const pages = [
  "Page 1",
  "Page 2",
  "Page 3",
  "Page 4",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen py-2">
      <div className="shadow-card flex flex-col w-[370px] rounded-md bg-white py-[10px] border border-gray-active">
        <ListPage pages={pages} />
        <div className="flex justify-center px-[15px] py-[10px]">
          <Button label="Done" />
        </div>
      </div>
    </div>
  );
}
