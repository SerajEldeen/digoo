"use client";

import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function FilterSortPanel({ onClose }: Props) {
  return (
    <div className=" fixed top-0 right-0 h-fit pb-10 w-[70%] bg-gray-200 shadow-xl rounded-lg  z-50 border border-gray-200  ">
      <div className="flex justify-between items-center mb-3 p-4 border-b-2">
        <h3 className="text-lg font-bold">التصفية والترتيب</h3>
        <div
          onClick={onClose}
          className="cursor-pointer hover:opacity-60 trainsition delay-1.5s"
        >
          <Image src="/images/close.png" width={20} height={20} alt="Close" />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-12 pr-4">
        <h4 className="font-semibold mb-2">التصفية:</h4>
        <form className="space-y-2">
          <label className="flex items-center space-x-reverse space-x-2">
            <input
              type="radio"
              name="filter"
              className="form-radio"
              defaultChecked
            />
            <span>الكل</span>
          </label>
          <label className="flex items-center space-x-reverse space-x-2">
            <input type="radio" name="filter" className="form-radio" />
            <span>محافظ رجالي</span>
          </label>
          <label className="flex items-center space-x-reverse space-x-2">
            <input type="radio" name="filter" className="form-radio" />
            <span>شنط حريمي</span>
          </label>
        </form>
      </div>

      {/* Sort */}
      <div className="pr-4 ">
        <label htmlFor="sort" className="font-medium ml-2 block">
          ترتيب حسب:
        </label>
        <select id="sort" className="w-[80%] border rounded px-3 py-1">
          <option value="featured">الميزة</option>
          <option value="best_seller">الأكثر مبيعا</option>
          <option value="price_low">السعر: من الأقل إلى الأعلى</option>
          <option value="price_high">السعر: من الأعلى إلى الأقل</option>
        </select>
      </div>
    </div>
  );
}
