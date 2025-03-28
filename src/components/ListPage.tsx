"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

interface ListPageProps {
  pages: string[];
}

const ListPage = ({ pages }: ListPageProps) => {
  const [allSelected, setAllSelected] = useState(false);
  const [selectedPages, setSelectedPages] = useState(
    Array(pages.length).fill(false)
  );

  const toggleAll = () => {
    const newState = !allSelected;
    setAllSelected(newState);
    setSelectedPages(Array(pages.length).fill(newState));
  };

  const togglePage = (index: number) => {
    const updatedPages = [...selectedPages];
    updatedPages[index] = !updatedPages[index];
    setSelectedPages(updatedPages);
    setAllSelected(updatedPages.every((selected) => selected));
  };

  return (
    <div className="flex flex-col items-center">
      <Checkbox label="All Page" checked={allSelected} onChange={toggleAll} />
      <div className="h-[0.7px] bg-gray-main w-[340px] my-[10px]" />
      {pages.map((page, index) => (
        <Checkbox
          key={page}
          label={page}
          checked={selectedPages[index]}
          onChange={() => togglePage(index)}
        />
      ))}
      <div className="h-[0.7px] bg-gray-main w-[340px] my-[10px]" />
    </div>
  );
};

export default ListPage;
