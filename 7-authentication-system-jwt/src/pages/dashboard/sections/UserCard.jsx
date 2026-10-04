import Card from "../../../component/card/Card";
import CardHeader from "../../../component/card/CardHeader";
import CardBody from "../../../component/card/CardBody";
import CardFooter from "../../../component/card/CardFooter";
import Image from "../../../component/ui/Image";
import Paragraph from "../../../component/ui/Paragraph";
import Badge from "../../../component/ui/Badge";
import SVG from "../../../component/ui/SVG";
import Button from "../../../component/ui/Button";

export default function UserCard({ user }) {
  return (
    <Card className="h-fit bg-white flex flex-col rounded-xl shadow-[0_6px_6px_-6px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.2)] transition-all duration-100">
      {/* Header */}
      <CardHeader className="flex items-center rounded-t-xl px-4 pt-4 pb-2 border-t border-x border-slate-200">
        {/* Avatar */}
        <Image src={user.image} alt="avatar" className="w-10 h-10 rounded-md" />
        {/* Name, Email */}
        <div className="grow flex flex-col ml-2">
          <Paragraph className="text-xl font-medium">{`${user.firstName} ${user.maidenName} ${user.lastName}`}</Paragraph>
          <Paragraph className="text-xs text-slate-700">{user.email}</Paragraph>
        </div>
        {/* Role */}
        <Badge className="text-[10px] font-bold rounded-full bg-sky-200 text-sky-900 px-1.5 py-1">
          {user.role}
        </Badge>
      </CardHeader>
      {/* Body */}
      <CardBody className="flex flex-col font-medium">
        {/* Icon, Location */}
        <div className="flex px-4 py-2 justify-start items-center gap-1 border-x border-slate-200">
          <div className="rounded-full p-1 bg-slate-200">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </SVG>
          </div>
          <Paragraph className="text-xs">
            {user.address.city}, {user.address.stateCode}
          </Paragraph>
        </div>
        {/* Meta Information */}
        <div className="grid grid-cols-4 gap-1 px-4 pt-2 pb-4 border-b border-x rounded-b-xl border-slate-200">
          {/* Gender */}
          <div className="flex flex-col gap-1 py-2 justify-center items-center rounded-md border border-slate-200">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z"></path>
            </SVG>
            <Paragraph className="text-xs">{user.gender}</Paragraph>
          </div>
          {/* Blood Group */}
          <div className="flex flex-col gap-1 py-2 justify-center items-center rounded-md border border-slate-200">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 640 640"
            >
              <path d="M320 576C214 576 128 490 128 384C128 292.8 258.2 109.9 294.6 60.5C300.5 52.5 309.8 48 319.8 48L320.2 48C330.2 48 339.5 52.5 345.4 60.5C381.8 109.9 512 292.8 512 384C512 490 426 576 320 576zM240 376C240 362.7 229.3 352 216 352C202.7 352 192 362.7 192 376C192 451.1 252.9 512 328 512C341.3 512 352 501.3 352 488C352 474.7 341.3 464 328 464C279.4 464 240 424.6 240 376z" />
            </SVG>
            <Paragraph className="text-xs">{user.bloodGroup}</Paragraph>
          </div>
          {/* Height */}
          <div className="flex flex-col gap-1 py-2 justify-center items-center rounded-md border border-slate-200">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 640 640"
            >
              <path d="M342.6 41.4C330.1 28.9 309.8 28.9 297.3 41.4L201.3 137.4C188.8 149.9 188.8 170.2 201.3 182.7C213.8 195.2 234.1 195.2 246.6 182.7L288 141.3L288 498.7L246.6 457.4C234.1 444.9 213.8 444.9 201.3 457.4C188.8 469.9 188.8 490.2 201.3 502.7L297.3 598.7C303.3 604.7 311.4 608.1 319.9 608.1C328.4 608.1 336.5 604.7 342.5 598.7L438.5 502.7C451 490.2 451 469.9 438.5 457.4C426 444.9 405.7 444.9 393.2 457.4L351.8 498.8L351.8 141.3L393.2 182.7C405.7 195.2 426 195.2 438.5 182.7C451 170.2 451 149.9 438.5 137.4L342.5 41.4z" />
            </SVG>
            <Paragraph className="text-xs">{user.height}</Paragraph>
          </div>
          {/* Weight */}
          <div className="flex flex-col gap-1 py-2 justify-center items-center rounded-md border border-slate-200">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 640 640"
            >
              <path d="M212.6 256C209.6 245.9 208 235.1 208 224C208 162.1 258.1 112 320 112C381.9 112 432 162.1 432 224C432 235.1 430.4 245.9 427.4 256L356.4 256L381 211.7C387.4 200.1 383.3 185.5 371.7 179.1C360.1 172.7 345.5 176.8 339.1 188.4L301.5 256.1L212.7 256.1zM224 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L416 96C389.3 75.9 356 64 320 64C284 64 250.7 75.9 224 96z" />
            </SVG>
            <Paragraph className="text-xs">{user.weight}</Paragraph>
          </div>
        </div>
      </CardBody>
      {/* Footer */}
      <CardFooter className="flex justify-end px-4 py-2">
        <Button className="px-4 py-2 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
