import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="width-100 ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "small",
          padding: "1.39rem 1.25rem",
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          border: "1px solid rgba(0, 0, 0, 0.125",
          gap: 10,
          height: "10vh",
        }}
      >
        <FaRegCopyright />
        <span>2022 takwa&&amel Group</span>
      </div>
    </footer>
  );
}
