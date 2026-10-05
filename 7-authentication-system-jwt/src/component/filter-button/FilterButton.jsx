import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SVG from "../ui/SVG";

export default function FilterButton({ buttonName }) {
  return (
    <Button className="flex items-center gap-1 px-2 py-1 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
      <Badge>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </SVG>
      </Badge>
      {buttonName}
    </Button>
  );
}
