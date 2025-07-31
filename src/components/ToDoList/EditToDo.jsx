export default function EditToDoIcon({ setEditMode }) {
  let styleFilter = {
    filter:
      "brightness(0) saturate(100%) invert(19%) sepia(97%) saturate(1920%) hue-rotate(218deg) brightness(95%) contrast(91%)",
  };

  return (
    <div
      onClick={() => {
        setEditMode(true);
      }}
    >
      <img src="/icons/edit.svg" alt="" className="w-4 h-4 cursor-pointer" style={styleFilter} />
    </div>
  );
}
