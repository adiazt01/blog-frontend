export const Tag = (tag) => {
  const {tag:tagName} = tag;
  return (
    <div className="bg-sky-600 text-center text-sm rounded-full px-3 text-white tracking-wide font-medium py-1.5">
      {tagName}
    </div>
  );
};
