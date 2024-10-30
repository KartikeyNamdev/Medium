export const BlogSkeleton = () => {
  return (
    <div className="">
      <div
        role="status"
        className="p-4 w-screen max-w-screen-md  p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse "
      >
        <div className="flex items-center justify-between h-32">
          <div className=" flex flex-col justify-center">
            <div className="h-4 bg-gray-300 rounded-full  "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full  w-12"></div>
        </div>
        <div className="flex items-center justify-between h-32">
          <div>
            <div className="h-4 bg-gray-300 rounded-full "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full  w-12"></div>
        </div>
        <div className="flex items-center justify-between h-32">
          <div>
            <div className="h-4 bg-gray-300 rounded-full "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full  w-12"></div>
        </div>
        <div className="flex items-center justify-between h-32">
          <div>
            <div className="h-4 bg-gray-300 rounded-full "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full  w-12"></div>
        </div>
        <div className="flex items-center justify-between h-32">
          <div>
            <div className="h-4 bg-gray-300 rounded-full "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full  w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

{
  /* <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex pb-2 max-w-screen-lg">
          <div>
            <Avatar1 name="Kartikey" />
          </div>
          <div className="pl-2 font-extralight text-slate-600">
            {authorname}
          </div>
          <div className="pl-2 font-thin text-slate-400 ">{publishedDate} </div>
        </div>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="font-thin text-slate-500 ">
          {" "}
          {content.slice(0, 100) + "..."}
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm pt-5">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div> */
}
