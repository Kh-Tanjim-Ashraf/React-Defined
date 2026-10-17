import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userDetail } from "../../services/user.service";
import { LoadingContext } from "../../contexts/loadingContext";
import { ErrorContext } from "../../contexts/errorContext";
import SVG from "../../component/ui/SVG";
import Paragraph from "../../component/ui/Paragraph";
import InformationListItem from "../../component/information-list-item/InformationListItem";
import Badge from "../../component/ui/Badge";
import GithubLogo from "../../assets/GithubLogo.png";

export default function UserProfile() {
  // Store user information fetched from the API
  const [userDetailObj, setUserDetailObj] = useState(null);
  // Retrieve user id (destructured) from the browser URL
  const { id } = useParams();
  // Get the global context data
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchUserDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await userDetail(id);
        setUserDetailObj(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    // Invoke the user-detail service
    fetchUserDetail();
  }, []);

  const userRoleBadgeColor =
    {
      admin: "bg-[#FEE2E2] text-[#991B1B]",
      moderator: "bg-[#FEF3C7] text-[#92400E]",
      user: "bg-[#E0F2FE] text-[#075985]",
    }[userDetailObj?.role] ?? "bg-sky-200 text-sky-900";

  console.log("userDetail:", userDetailObj);

  return (
    <>
      {/* Main Content */}
      <div className="grow flex mx-10 my-12 gap-2">
        {/* Left panel */}
        <div className="w-full flex flex-col bg-white rounded-lg p-4 border border-slate-200 shadow-md">
          {/* Header */}
          <div className="flex gap-2">
            {/* Avatar */}
            <img
              src={userDetailObj?.image}
              alt="user-avatar"
              width="80"
              height="80"
              className="rounded-full"
            />
            {/* User Header Information */}
            <div className="grow flex flex-col">
              {/* User Fullname, role */}
              <div className="h-full flex items-center">
                {/* User Fullname */}
                <div className="grow">
                  <p className="text-2xl font-semibold">
                    {userDetailObj?.firstName} {userDetailObj?.maidenName}{" "}
                    {userDetailObj?.lastName}
                  </p>
                </div>
                {/* Role */}
                <Badge
                  className={`text-[10px] font-bold rounded-full px-1.5 py-1 ${userRoleBadgeColor}`}
                >
                  {userDetailObj?.role}
                </Badge>
              </div>
              {/* Designation, Company */}
              <div className="h-full flex items-center">
                <p className="text-xs text-slate-500">
                  {userDetailObj?.company.title} • {userDetailObj?.company.name}
                </p>
              </div>
              {/* User ID */}
              <div className="h-full flex items-center">
                <p className="text-xs font-medium">
                  User ID: {userDetailObj?.id}
                </p>
              </div>
            </div>
          </div>
          {/* Meta Information: Grid Panel */}
          <div className="grid grid-cols-4 gap-2 py-8">
            {/* Gender */}
            <div className="flex py-1 justify-evenly items-center rounded-md border border-slate-200">
              <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
                className="w-full"
              >
                <path d="M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z"></path>
              </SVG>
              <Paragraph className="text-sm font-semibold w-full">
                {userDetailObj?.gender}
              </Paragraph>
            </div>
            {/* Blood Group */}
            <div className="flex py-1 justify-evenly items-center rounded-md border border-slate-200">
              <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 640 640"
                className="w-full"
              >
                <path d="M320 576C214 576 128 490 128 384C128 292.8 258.2 109.9 294.6 60.5C300.5 52.5 309.8 48 319.8 48L320.2 48C330.2 48 339.5 52.5 345.4 60.5C381.8 109.9 512 292.8 512 384C512 490 426 576 320 576zM240 376C240 362.7 229.3 352 216 352C202.7 352 192 362.7 192 376C192 451.1 252.9 512 328 512C341.3 512 352 501.3 352 488C352 474.7 341.3 464 328 464C279.4 464 240 424.6 240 376z" />
              </SVG>
              <Paragraph className="text-sm font-semibold w-full">
                {userDetailObj?.bloodGroup}
              </Paragraph>
            </div>
            {/* Height */}
            <div className="flex py-1 justify-evenly items-center rounded-md border border-slate-200">
              <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 640 640"
                className="w-full"
              >
                <path d="M342.6 41.4C330.1 28.9 309.8 28.9 297.3 41.4L201.3 137.4C188.8 149.9 188.8 170.2 201.3 182.7C213.8 195.2 234.1 195.2 246.6 182.7L288 141.3L288 498.7L246.6 457.4C234.1 444.9 213.8 444.9 201.3 457.4C188.8 469.9 188.8 490.2 201.3 502.7L297.3 598.7C303.3 604.7 311.4 608.1 319.9 608.1C328.4 608.1 336.5 604.7 342.5 598.7L438.5 502.7C451 490.2 451 469.9 438.5 457.4C426 444.9 405.7 444.9 393.2 457.4L351.8 498.8L351.8 141.3L393.2 182.7C405.7 195.2 426 195.2 438.5 182.7C451 170.2 451 149.9 438.5 137.4L342.5 41.4z" />
              </SVG>
              <Paragraph className="text-sm font-semibold w-full">
                {userDetailObj?.height}
              </Paragraph>
            </div>
            {/* Weight */}
            <div className="flex py-1 justify-evenly items-center rounded-md border border-slate-200">
              <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 640 640"
                className="w-full"
              >
                <path d="M212.6 256C209.6 245.9 208 235.1 208 224C208 162.1 258.1 112 320 112C381.9 112 432 162.1 432 224C432 235.1 430.4 245.9 427.4 256L356.4 256L381 211.7C387.4 200.1 383.3 185.5 371.7 179.1C360.1 172.7 345.5 176.8 339.1 188.4L301.5 256.1L212.7 256.1zM224 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L416 96C389.3 75.9 356 64 320 64C284 64 250.7 75.9 224 96z" />
              </SVG>
              <Paragraph className="text-sm font-semibold w-full">
                {userDetailObj?.weight}
              </Paragraph>
            </div>
          </div>
          {/* Body: Information list */}
          <div className="grow flex flex-col">
            {/* Meta-Information-Card-Grid-Panel */}
            {/* Email */}
            <InformationListItem
              informationName="Email"
              value={userDetailObj?.email}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 18.0479c-1.3149 0.6526 -2.8067 0.8587 -4.2493 0.5873 -1.44257 -0.2714 -2.7574 -1.0056 -3.74525 -2.0914 -0.98786 -1.0858 -1.5949 -2.4639 -1.72916 -3.9257 -0.13426 -1.4617 0.21158 -2.92744 0.98511 -4.175 0.77354 -1.24756 1.93262 -2.209 3.30165 -2.73867 1.36905 -0.52966 2.87335 -0.59868 4.28515 -0.1966 1.4118 0.40209 2.654 1.25336 3.5385 2.42485 0.8846 1.17149 1.3631 2.59932 1.3633 4.06722"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12c0 0.7956 0.31607 1.5587 0.87868 2.1213C10.4413 14.6839 11.2044 15 12 15c0.7956 0 1.5587 -0.3161 2.1213 -0.8787C14.6839 13.5587 15 12.7956 15 12c0 -0.7956 -0.3161 -1.5587 -0.8787 -2.12132C13.5587 9.31607 12.7956 9 12 9c-0.7956 0 -1.5587 0.31607 -2.12132 0.87868C9.31607 10.4413 9 11.2044 9 12Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12v1.125c0 0.4973 0.1975 0.9742 0.5492 1.3258 0.3516 0.3517 0.8285 0.5492 1.3258 0.5492 0.4973 0 0.9742 -0.1975 1.3258 -0.5492 0.3517 -0.3516 0.5492 -0.8285 0.5492 -1.3258V12"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Phone */}
            <InformationListItem
              informationName="Phone"
              value={userDetailObj?.phone}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Phone-Retro-1--Streamline-Ultimate"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.2845 1.48889h-0.011c-0.99987 0.22215 -1.89405 0.77876 -2.53479 1.57786 -0.64073 0.7991 -0.989687 1.79288 -0.989205 2.81714v0.89c0 0.39782 0.158035 0.77936 0.439335 1.06066 0.28131 0.2813 0.66284 0.43934 1.06066 0.43934h3.75c0.39783 0 0.77936 -0.15804 1.06066 -0.43934 0.28131 -0.2813 0.43934 -0.66284 0.43934 -1.06066 0 -0.39782 0.15804 -0.77936 0.43934 -1.06066 0.28131 -0.2813 0.66284 -0.43934 1.06067 -0.43934h5.99999c0.3978 0 0.7794 0.15804 1.0607 0.43934s0.4393 0.66284 0.4393 1.06066c0 0.39782 0.158 0.77936 0.4393 1.06066 0.2813 0.2813 0.6629 0.43934 1.0607 0.43934h3.75c0.3978 0 0.7794 -0.15804 1.0607 -0.43934s0.4393 -0.66284 0.4393 -1.06066v-0.89c0 -1.02392 -0.3491 -2.01723 -0.9898 -2.81592 -0.6407 -0.79869 -1.5347 -1.355 -2.5342 -1.57708h-0.011c-5.0959 -0.98718 -10.33384 -0.987859 -15.43 -0.002Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.3023 11.25h-0.605c-2.19374 -0.0001 -4.31199 0.801 -5.95661 2.2528 -1.64462 1.4519 -2.70235 3.4544 -2.97437 5.6312l-0.093 0.744c-0.05275 0.4221 -0.01513 0.8506 0.11036 1.257 0.1255 0.4065 0.336 0.7816 0.61753 1.1005 0.28154 0.3189 0.62767 0.5743 1.01543 0.7492 0.38776 0.1749 0.80829 0.2653 1.23368 0.2653H18.3503c0.4255 -0.0002 0.8461 -0.0909 1.2339 -0.2661 0.3877 -0.1753 0.7338 -0.4309 1.0151 -0.7501 0.2814 -0.3192 0.4916 -0.6946 0.6168 -1.1013 0.1252 -0.4067 0.1624 -0.8353 0.1092 -1.2575l-0.093 -0.744c-0.2727 -2.1761 -1.3305 -4.1778 -2.9749 -5.6289 -1.6443 -1.4512 -3.762 -2.2521 -5.9551 -2.2521Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.74731 11.462V9"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.2473 11.462V9"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.99731 17.25c0 0.7956 0.31607 1.5587 0.87868 2.1213 0.56261 0.5626 1.32571 0.8787 2.12131 0.8787 0.7957 0 1.5587 -0.3161 2.1213 -0.8787 0.5626 -0.5626 0.8787 -1.3257 0.8787 -2.1213 0 -0.7956 -0.3161 -1.5587 -0.8787 -2.1213 -0.5626 -0.5626 -1.3256 -0.8787 -2.1213 -0.8787 -0.7956 0 -1.5587 0.3161 -2.12131 0.8787 -0.56261 0.5626 -0.87868 1.3257 -0.87868 2.1213Z"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Username */}
            <InformationListItem
              informationName="Username"
              value={userDetailObj?.username}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4.75h18s2 0 2 2v10.5s0 2 -2 2H3s-2 0 -2 -2V6.75s0 -2 2 -2Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.56396 7.75h5v5h-5v-5Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.56396 15.75h4.436"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 8.25h4.238"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 15.75h4.238"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.291 12h5.947"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Password */}
            <InformationListItem
              informationName="Password"
              value={userDetailObj?.password}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.82 14.51 15.36 12l1.76 0.47c0.2708 0.0634 0.5535 0.0532 0.819 -0.0294 0.2655 -0.0827 0.5041 -0.2348 0.691 -0.4406 0.1833 -0.1964 0.3134 -0.4363 0.3782 -0.697 0.0647 -0.2607 0.0619 -0.5336 -0.0082 -0.793l-0.47 -1.74997 0.82 -0.76 1.76 0.47c0.2708 0.06334 0.5535 0.05316 0.819 -0.02947 0.2655 -0.08264 0.5041 -0.23473 0.691 -0.44053 0.1834 -0.19442 0.3144 -0.43217 0.3808 -0.69101 0.0665 -0.25883 0.0662 -0.53029 -0.0008 -0.78899l-0.47 -1.75c0.4416 -0.44158 0.6897 -1.0405 0.6897 -1.665 0 -0.62449 -0.2481 -1.22341 -0.6897 -1.665 -0.4416 -0.441584 -1.0405 -0.689664 -1.665 -0.689664s-1.2234 0.24808 -1.665 0.689664L9.49003 11.18c-1.34386 -0.5708 -2.84446 -0.6564 -4.24451 -0.242 -1.40004 0.4144 -2.61231 1.3029 -3.42895 2.5133C0.999935 14.6616 0.629806 16.1184 0.769649 17.5718c0.139843 1.4533 0.780941 2.8128 1.813381 3.8452 1.03244 1.0325 2.39189 1.6736 3.84527 1.8134 1.45337 0.1399 2.91012 -0.2303 4.1205 -1.0469 1.2103 -0.8166 2.0989 -2.0289 2.5133 -3.429 0.4144 -1.4 0.3288 -2.9006 -0.2421 -4.2445Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26001 17.8401c0 0.2495 0.04914 0.4965 0.14463 0.7271 0.09548 0.2305 0.23544 0.4399 0.41187 0.6164 0.17643 0.1764 0.38588 0.3164 0.6164 0.4118 0.23052 0.0955 0.47759 0.1447 0.7271 0.1447 0.24951 0 0.49658 -0.0492 0.7271 -0.1447 0.23052 -0.0954 0.43997 -0.2354 0.6164 -0.4118 0.17643 -0.1765 0.31639 -0.3859 0.41187 -0.6164 0.09548 -0.2306 0.14463 -0.4776 0.14463 -0.7271 0 -0.5039 -0.20018 -0.9872 -0.5565 -1.3435 -0.35632 -0.3564 -0.83959 -0.5565 -1.3435 -0.5565s-0.98718 0.2001 -1.3435 0.5565c-0.35632 0.3563 -0.5565 0.8396 -0.5565 1.3435Z"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Age */}
            <InformationListItem
              informationName="Age"
              value={userDetailObj?.age}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.808 20h8.384v-3q0-1.766-1.213-3.017Q13.766 12.73 12 12.73t-2.979 1.254T7.808 17zm7.17-9.985Q16.193 8.761 16.193 7V4H7.808v3q0 1.766 1.213 3.017Q10.234 11.27 12 11.27t2.979-1.254M5.5 21q-.213 0-.356-.144T5 20.499t.144-.356T5.5 20h1.308v-3q0-1.852 1.135-3.285T10.853 12q-1.774-.3-2.91-1.724T6.808 7V4H5.5q-.213 0-.356-.144T5 3.499t.144-.356T5.5 3h13q.213 0 .356.144t.144.357t-.144.356T18.5 4h-1.308v3q0 1.852-1.135 3.276T13.147 12q1.774.28 2.91 1.715q1.135 1.433 1.135 3.285v3H18.5q.213 0 .356.144t.144.357t-.144.356T18.5 21zM12 4"
                  stroke-width="0.1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Eye Color */}
            <InformationListItem
              informationName="Eye Color"
              value={userDetailObj?.eyeColor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  stroke-width="0.1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Hair: Color, Type */}
            {/* Color */}
            <InformationListItem
              informationName="Hair Color"
              value={userDetailObj?.hair.color}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2.5c2.52 0 4.916 1.388 6.8 3.9c1.401 1.868 3.24 4.435 3.54 7.125c.155 1.397-.101 2.832-1.009 4.194c-.894 1.341-2.372 2.54-4.537 3.585c-1.26.608-2.619-.264-2.778-1.532c.404-.27.802-.607 1.165-1.002c1.013-1.105 1.82-2.723 1.82-4.77q0-.548-.06-1.057a.5.5 0 0 0-.491-.443a5 5 0 0 1-4.916-4.42a.5.5 0 0 0-.635-.424C8.769 8.266 7 10.572 7 14c0 2.047.806 3.665 1.819 4.77a6.4 6.4 0 0 0 1.16 1c-.176 1.264-1.548 2.13-2.808 1.484c-2.046-1.048-3.453-2.249-4.314-3.581c-.872-1.348-1.14-2.765-1.019-4.149C2.074 10.841 3.783 8.29 5.2 6.4C7.084 3.888 9.48 2.5 12 2.5"
                ></path>
              </svg>
            </InformationListItem>
            {/* Type */}
            <InformationListItem
              informationName="Hair Type"
              value={userDetailObj?.hair.type}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* Head Outline / Face Profile Base */}
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2.5C6.75 2.5 4.5 6.5 4.5 11c0 3 .5 4 1.5 5.5s3.5 3 6 3 5-1.5 6-3 1.5-2.5 1.5-5.5c0-4.5-2.25-8.5-7.5-8.5z"
                  stroke-width="1"
                />
                {/* Left Side: Straight Hair Strands */}
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  d="M12 2.5C9 2.5 6 4 5 7.5c-.8 2.8-.5 6 .5 8.5M8 3.5C6.8 5.5 6 8.5 6.5 12"
                  stroke-width="1"
                />
                {/* Right Side: Curly / Coily Hair Strands */}
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  d="M12 2.5c2 0 3.5.5 4.5 2c.8.8.2 2 1 3c.7.9 2 .5 2 2c0 1.2-1.5 1.3-1 2.5c.4 1 1.5.8 1 2.2c-.4 1.2-2 1-2.5 2.3M15 4c1 .5 1 1.5 2 2c.8.4.8 1.4 1.5 2"
                  stroke-width="1"
                />
              </svg>
            </InformationListItem>
            {/* EIN */}
            <InformationListItem
              informationName="EIN"
              value={userDetailObj?.ein}
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* Main ID Card Outer Frame */}
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="15"
                  rx="2"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* Top Attachment Clip / Lanyard Slot */}
                <path
                  d="M10 6V3.5A1.5 1.5 0 0 1 11.5 2h1A1.5 1.5 0 0 1 14 3.5V6"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 4h3"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />

                {/* User Avatar - Shoulders Base */}
                <path
                  d="M3.5 17.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* Text Information Placeholder Lines */}
                <line
                  x1="13"
                  y1="10"
                  x2="20"
                  y2="10"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <line
                  x1="13"
                  y1="13"
                  x2="20"
                  y2="13"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <line
                  x1="13"
                  y1="16"
                  x2="17"
                  y2="16"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />

                {/* Bottom Right Graphic Stamp/Badge Element */}
                <rect
                  x="18"
                  y="17"
                  width="2"
                  height="1.5"
                  rx="0.5"
                  stroke="#000000"
                  stroke-width="1"
                />
              </svg>
            </InformationListItem>
            {/* SSN */}
            <InformationListItem
              informationName="SSN"
              value={userDetailObj?.ssn}
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* Main Card Base Frame */}
                <path
                  d="M2 7.5A1.5 1.5 0 0 1 3.5 6h11A1.5 1.5 0 0 1 16 7.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 2 19V7.5z"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* User Avatar - Head Silhouette */}
                <circle
                  cx="6"
                  cy="11.5"
                  r="1.8"
                  stroke="#000000"
                  stroke-width="1"
                />

                {/* User Avatar - Shoulders Base */}
                <path
                  d="M3 17c0-1.5 1.2-2.5 3-2.5s3 1.2 3 2.5"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* Identity Number Data Rows (Dashed Lines Effect) */}
                <line
                  x1="11"
                  y1="11.5"
                  x2="14"
                  y2="11.5"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <line
                  x1="11"
                  y1="14.5"
                  x2="14"
                  y2="14.5"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />

                {/* Secure Padlock - Shackle / Loop */}
                <path
                  d="M17.5 8.5V5.5a2.5 2.5 0 0 1 5 0V8.5"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                />

                {/* Secure Padlock - Solid Body */}
                <rect
                  x="16"
                  y="8.5"
                  width="6"
                  height="5.5"
                  rx="1.2"
                  stroke="#000000"
                  stroke-width="1"
                  fill="#ffffff"
                  stroke-linejoin="round"
                />

                {/* Padlock Keyhole Detail */}
                <circle cx="19" cy="11" r="0.5" fill="#000000" />
              </svg>
            </InformationListItem>
            {/* Crypto */}
            <InformationListItem
              informationName="Crypto"
              value={userDetailObj?.crypto.coin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12 5.5 4 5.5 -4 3 -4 -3 4 -5.5Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16 15 -4 3.5L8 15"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Wallet */}
            <InformationListItem
              informationName="Wallet"
              value={userDetailObj?.crypto.wallet}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.97005 2.771 13.908 5.88c0.7412 0.24343 1.3885 0.71082 1.8528 1.33771 0.4642 0.62689 0.7225 1.38239 0.7392 2.16229v10.51c0.0312 0.3318 -0.0189 0.6662 -0.1459 0.9743 -0.1271 0.3081 -0.3273 0.5807 -0.5833 0.794 -0.256 0.2134 -0.5601 0.3612 -0.8861 0.4307 -0.3259 0.0694 -0.6639 0.0585 -0.9847 -0.032l-9.04795 -2.46c-0.74126 -0.2306 -1.39119 -0.6886 -1.8578 -1.309 -0.46662 -0.6204 -0.72627 -1.3719 -0.7422 -2.148V4.688c-0.01643 -0.72638 0.25507 -1.42978 0.75526 -1.95676S4.1958 1.89646 4.92205 1.875H18.75c0.7957 0 1.5588 0.31607 2.1214 0.87868S21.75 4.07935 21.75 4.875v8.953c-0.0035 0.4045 -0.0868 0.8042 -0.2451 1.1764 -0.1583 0.3722 -0.3885 0.7095 -0.6774 0.9926 -0.289 0.283 -0.6309 0.5063 -1.0063 0.657 -0.3753 0.1506 -0.7767 0.2258 -1.1812 0.221H16.5"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  d="M12.375 13.875c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  d="M12.375 13.875c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9.375H16.5"
                  stroke-width="1"
                ></path>
              </svg>
            </InformationListItem>
            {/* Network */}
            <InformationListItem
              informationName="Network"
              value={userDetailObj?.crypto.network}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M11.357 10.288a.34.34 0 0 0-.36.32c-.139.498-.309.998-.408 1.487q-.078.32-.08.649v.669q.067.804.26 1.587a.38.38 0 0 0 .419.36a.43.43 0 0 0 .21-.11l.239.07v.07a1 1 0 0 0 0 .24a1 1 0 0 0 0 .229c.34.878.5.878.669.868c.41 0 .599-1.118.599-1.138v-.09h.559a1.68 1.68 0 0 0 1.148-.798a1.33 1.33 0 0 0-.19-1.568s-.12-.07-.17-.11q.217-.166.36-.399a1.33 1.33 0 0 0-.22-1.617a2.2 2.2 0 0 0-.918-.55c-.18 0-.36 0-.54-.06q.056-.084.09-.18a.8.8 0 0 0 .05-.219a.6.6 0 0 0 0-.22c-.21-.998-.489-.928-.509-.938c-.32 0-.738.809-.738.819a.7.7 0 0 0-.06.25q-.015.124 0 .249l.06.17h-.34a.4.4 0 0 0-.13-.04m.73.918q.425.09.828.26c.2.078.375.213.499.39v.159a.5.5 0 0 1-.25.18l-.668.2h-.64a9 9 0 0 0-.12-1.289zm-.33 2.217a1 1 0 0 1 0-.16h.14q.286.07.579.11q.22.049.429.13a1.15 1.15 0 0 1 .524.415a.11.11 0 0 1-.025.124a.48.48 0 0 1-.25.19l-.668.19a4 4 0 0 1-.59 0h-.289c.04-.29.1-.64.15-1m-6.35-8.516q.392-.133.759-.33A9.4 9.4 0 0 0 9.16 6.105c0 .22-.13.44-.14.67a.38.38 0 0 0 .31.459a.39.39 0 0 0 .449-.31q.096-.272.23-.529h.1c.7.142 1.412.208 2.126.2a12.6 12.6 0 0 0 2.106-.22c.2 0 .38-.13.58-.17c.13.22.26.44.369.67a.39.39 0 1 0 .719-.22c-.05-.23-.16-.45-.22-.69a14.3 14.3 0 0 0 2.666-1.117q.383.241.709.559c.599.539 1.158-.42.848-.79a10 10 0 0 0-1.886-1.497a14.8 14.8 0 0 0-6.11-1.547a10.7 10.7 0 0 0-6.99 2.446c-.519.38.05 1.078.38.888m12.15-.619a15 15 0 0 1-2.136.63a3 3 0 0 0-.1-.3a5.1 5.1 0 0 0-1.018-1.498a10.9 10.9 0 0 1 3.254 1.168m-6.888.79c.17-.3.359-.59.529-.9c.17-.309.489-.858.738-1.277h.6c.22.25.439.479.628.738l.35.51l.519.738l.17.25h-.1q-.955.124-1.917.13a14 14 0 0 1-1.587-.1zm-.15-2.058c-.07.08-.16.14-.23.22a6 6 0 0 0-.5.719a6.5 6.5 0 0 0-.379.799c0 .07 0 .15-.05.23a9.7 9.7 0 0 1-2.416-.86A10 10 0 0 1 10.52 3.02m4.222 19.099s.07-.05.09-.09q.204-.314.35-.66q.143-.344.229-.708v-.33q.712-.015 1.418-.12c.389-.189-.1-1.157-.56-1.117h-.718v-.16a.39.39 0 1 0-.77-.12c0 .1-.08.21-.109.31H9.98l.04-.13a.39.39 0 0 0-.47-.29a.36.36 0 0 0-.27.34a13.5 13.5 0 0 1-1.906-.15c-.36-.05-.64.859.05.998c.499.09 1.487.29 1.996.34q.025.27.08.539a3.5 3.5 0 0 0 .52 1.218q.163.224.359.42a18.4 18.4 0 0 1-4.483-2.217c-.42-.31-.998.33-.48.669a15.1 15.1 0 0 0 5.802 2.476h.05c.24 0 .479.1.728.12a.33.33 0 0 0 .38-.3a.34.34 0 0 0-.3-.38l-.539-.11c-.17-.408-.29-.818-.44-1.247c-.07-.19-.149-.38-.229-.56c-.08-.179-.17-.369-.26-.548l1.238.09h2.327c-.06.13-.11.249-.17.369s-.18.42-.27.629s-.14.45-.23.659a5 5 0 0 1-.389.769a.35.35 0 0 0 0 .489c.39.36 3.924-.68 5.172-1.797c.26-.21-.1-.79-.689-.64c-.917.49-1.872.903-2.855 1.239" />
                  <path d="M23.608 18.934a2.6 2.6 0 0 0-.61-.939c-.389-.499-.738.13-.528.62q.162.312.269.648c.125.397.175.813.15 1.228a1.15 1.15 0 0 1-.55.929a1.14 1.14 0 0 1-1.048 0c-1.827-.69-4.412-3.774-5.071-4.343q.12-.081.23-.18a6 6 0 0 0 .628-.739q.285-.406.49-.858q.285-.627.439-1.298a7 7 0 0 0 .13-1.368a4.7 4.7 0 0 0-.13-1.148a9 9 0 0 0-.37-.999c-.09-.18-.2-.34-.3-.509c.29-.24.55-.509.82-.749c0 0 3.993-3.863 4.313-4.243c.374-.472.67-1.001.878-1.567a1.82 1.82 0 0 0-.24-1.678a1.6 1.6 0 0 0-1.597-.569a5.2 5.2 0 0 0-1.567.63q-.7.361-1.318.848c-.33.19-.1.769.619.51a7.4 7.4 0 0 1 1.128-.54c.41-.192.848-.316 1.298-.37a.48.48 0 0 1 .459.2a.61.61 0 0 1 0 .53c-.174.43-.41.834-.699 1.198c-.25.32-3.914 4.383-3.914 4.383c-.22.23-.429.479-.648.718a5.32 5.32 0 0 0-6.45-1.507c-.658.289-1.25.71-1.737 1.238a12.7 12.7 0 0 1-2.656-2.217a9.6 9.6 0 0 1-1.757-2.336c-.12-.22-.24-.44-.38-.639L3.43 2.82l-.16-.59a1.2 1.2 0 0 1 0-.379v-.08a.6.6 0 0 1 .4 0a6 6 0 0 1 1.667.68l.48.309c.429.28.998-.24.618-.56l-.629-.498A5.8 5.8 0 0 0 3.4.543a1.25 1.25 0 0 0-.998.38a1.8 1.8 0 0 0-.37 1.358l.19.898l.51 1.268c.209.36 2.106 2.796 2.455 3.125A13 13 0 0 0 8.182 9.66a7 7 0 0 0-.718 1.268a5.7 5.7 0 0 0-.36 1.198c-.07.423-.07.855 0 1.278a.34.34 0 0 0 .38.3a.35.35 0 0 0 .31-.38a3.1 3.1 0 0 1 .079-1.049q.13-.516.36-.998A6 6 0 0 1 9.29 9.71a4.5 4.5 0 0 1 1.497-.999a4.373 4.373 0 0 1 5.591 2.297q.174.415.3.848c.073.27.113.549.12.829a5.6 5.6 0 0 1-.41 2.156q-.144.345-.35.66a4.6 4.6 0 0 1-.468.598a3 3 0 0 1-.55.47q-.315.208-.659.369a4.7 4.7 0 0 1-3.773.06a4.6 4.6 0 0 1-2.566-2.835a.393.393 0 0 0-.75.24a5.4 5.4 0 0 0 1.16 2.086c-.4.31-.82.599-1.249.878L2.64 20.362c-.242.175-.517.3-.808.37c-.19.05-.34.07-.42 0a1.12 1.12 0 0 1-.2-.739c.048-.63.21-1.246.48-1.817q.196-.474.5-.889c.329-.339-.17-.808-.49-.669a5.2 5.2 0 0 0-.819 1.139a6.4 6.4 0 0 0-.848 2.096a2.2 2.2 0 0 0 .3 1.568a1.54 1.54 0 0 0 1.696.569c.354-.069.692-.2.999-.39c.499-.289 2.346-1.887 4.622-3.514q.663-.473 1.268-1.018v-.05a5.6 5.6 0 0 0 1.248.829a5.76 5.76 0 0 0 4.623.12q.408-.175.789-.4c.429.45 1.647 1.897 3.234 3.764a5.3 5.3 0 0 0 1.917 1.278a2.36 2.36 0 0 0 2.267-.12a2.27 2.27 0 0 0 .998-1.997a4.4 4.4 0 0 0-.39-1.557" />
                  <path d="M22.45 16.997a12.4 12.4 0 0 0 .339-8.476a6.2 6.2 0 0 0-.998-1.997c-.55-.32-1.109.24-.84.858c.325.45.569.954.72 1.488c.357 1.053.556 2.153.589 3.265h-1.488a4 4 0 0 0-.479.1c-.4.09-.749.24-1.148.339a.35.35 0 0 0 0 .689q.62.168 1.258.22q.27.03.539 0q.27-.038.53-.12c.259-.09.508-.21.748-.32a9.6 9.6 0 0 1-1.198 4.473a9 9 0 0 1-.759 1.048q-.392.386-.689.849c-.2.33.52.55.64.46a10 10 0 0 0 2.236-2.876m-19.19-.709a15 15 0 0 1-.629-1.997c-.12-.499-.2-.998-.27-1.507q.232.144.48.26c.381.146.781.237 1.188.269q.716.02 1.428-.05a.391.391 0 0 0 .07-.779c-.44-.11-.859-.26-1.298-.39l-.53-.09a5 5 0 0 0-.558-.089c-.3 0-.58 0-.859-.07a8.2 8.2 0 0 1 1.677-4.992c.18-.4-.429-.998-.788-.709a8.9 8.9 0 0 0-1.997 6.29c.1.73.3 1.438.45 2.157a8.43 8.43 0 0 0 2.116 4.213c.609.4.868-.13.699-.48a10 10 0 0 1-1.179-2.036" />
                </g>
              </svg>
            </InformationListItem>
            {/* User Agent */}
            <InformationListItem
              informationName="User Agent"
              value={userDetailObj?.userAgent}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"
                />
              </svg>
            </InformationListItem>
          </div>
        </div>
        {/* Right panel */}
        <div className="w-full flex flex-col gap-4 rounded-lg">
          {/* University */}
          <div className="flex gap-4 px-4 py-6 rounded-lg border bg-white border-slate-200 shadow-md">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="h-full p-1 border border-slate-200 rounded-lg text-slate-500"
            >
              <path
                fill="currentColor"
                d="M21 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.684-.948l-9-3a1 1 0 0 0-.632 0l-9 3A1 1 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10Zm-1 11H4v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6 17v-7h2v7Zm4 0v-7h4v7Zm6 0v-7h2v7ZM4 8V6.72l8-2.666l8 2.667V8Z"
                stroke-width="1"
              />
            </svg>
            {/* Information */}
            <div className="grow h-full flex flex-col gap-1">
              <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                University
              </p>
              <p className="font-semibold text-3xl grow">
                {userDetailObj?.university}
              </p>
            </div>
          </div>
          {/* Digital Address: IP, MAC */}
          <div className="rounded-lg border border-slate-200 shadow-md">
            {/* IP Address */}
            <div className="flex gap-4 px-4 py-6 rounded-t-lg border-t border-x bg-white border-slate-200 shadow-md">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="50"
                width="50"
                className="h-full p-1 border border-slate-200 rounded-lg"
              >
                <g id="location-pin--navigation-map-maps-pin-gps-location">
                  <path
                    id="Subtract"
                    fill="#62748e"
                    fill-rule="evenodd"
                    d="M2.25 10.5C2.25 5.1152 6.6152 0.75 12 0.75S21.75 5.1152 21.75 10.5c0 3.4937 -1.8028 6.43255 -3.7629 8.6014 -1.96625 2.17565 -4.16325 3.65805 -5.1188 4.2531 -0.536 0.33375 -1.2006 0.33375 -1.7366 0 -0.95555 -0.59505 -3.15255 -2.07745 -5.1188 -4.2531C4.0528 16.93255 2.25 13.9937 2.25 10.5ZM12 14.5c2.20915 0 4 -1.79085 4 -4s-1.79085 -4 -4 -4 -4 1.79085 -4 4 1.79085 4 4 4Z"
                    clip-rule="evenodd"
                    stroke-width="1"
                  ></path>
                </g>
              </svg>
              {/* Information */}
              <div className="grow h-full flex flex-col gap-1">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  IP Address
                </p>
                <p className="font-semibold text-3xl grow">
                  {userDetailObj?.ip}
                </p>
              </div>
            </div>
            {/* Divider */}
            <hr className="h-[0.1px] text-slate-200" />
            {/* MAC Address */}
            <div className="flex gap-4 px-4 py-6 rounded-b-lg border-b border-x bg-white border-slate-200 shadow-md">
              {/* Icon */}
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 400 400"
                width="50"
                height="50"
                fill="#62748e"
                className="h-auto p-1 border border-slate-200 rounded-lg"
              >
                <g id="ethernet-port">
                  <rect
                    x="135"
                    y="35"
                    width="130"
                    height="130"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="#62748e"
                    stroke-width="14"
                  />

                  <path
                    d="M 155,70 
             H 245 
             V 122 
             H 232 
             V 135 
             H 168 
             V 122 
             H 155 
             Z"
                  />

                  <g fill="white">
                    <rect x="167" y="77" width="6" height="18" rx="1" />
                    <rect x="178" y="77" width="6" height="18" rx="1" />
                    <rect x="189" y="77" width="6" height="18" rx="1" />
                    <rect x="200" y="77" width="6" height="18" rx="1" />
                    <rect x="211" y="77" width="6" height="18" rx="1" />
                    <rect x="222" y="77" width="6" height="18" rx="1" />
                  </g>
                </g>

                <g id="ethernet-plug">
                  <rect
                    x="172"
                    y="200"
                    width="56"
                    height="60"
                    rx="8"
                    fill="none"
                    stroke="#62748e"
                    stroke-width="12"
                  />

                  <rect
                    x="148"
                    y="255"
                    width="104"
                    height="100"
                    rx="8"
                    ry="8"
                  />

                  <path d="M 166,355 H 234 V 364 H 166 Z" />
                  <path d="M 176,364 H 224 V 374 H 176 Z" />
                  <path d="M 186,374 H 214 V 384 H 186 Z" />

                  <rect x="194" y="384" width="12" height="30" />
                </g>
              </svg>

              {/* Information */}
              <div className="grow h-full flex flex-col gap-1">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  MAC Address
                </p>
                <p className="font-semibold text-3xl grow">
                  {userDetailObj?.macAddress}
                </p>
              </div>
            </div>
          </div>
          {/* Address, Latitude & Longitude */}
          <div className="rounded-lg border bg-white border-slate-200 shadow-md flex flex-col">
            {/* Address */}
            <div className="flex gap-4 px-4 py-6 rounded-t-lg">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                height="50"
                width="50"
                className="h-fit p-1 border border-slate-200 rounded-lg"
              >
                <g id="location-pin-3--navigation-map-maps-pin-gps-location">
                  <path
                    id="Subtract"
                    fill="#62748e"
                    d="M36.2073 34.1014c-3.4475 3.8908 -7.3051 6.5539 -9.1133 7.7004 -1.8936 1.2007 -4.2944 1.2007 -6.188 0 -1.8082 -1.1465 -5.6658 -3.8096 -9.1133 -7.7004 -0.6341 -0.7157 -1.2666 -1.4869 -1.87631 -2.3113 -0.02699 0.0015 -0.05368 0.003 -0.08008 0.0045 -1.71135 0.0961 -3.29786 1.043 -4.10358 2.6431 -0.74766 1.4849 -1.77531 3.8164 -2.53276 6.671 -0.70334 2.6507 1.27621 5.0372 3.87527 5.1432 2.89263 0.118 8.08826 0.2485 16.92546 0.2485 8.8373 0 14.0329 -0.1305 16.9255 -0.2485 2.5991 -0.106 4.5786 -2.4925 3.8753 -5.1432 -0.7574 -2.8546 -1.7851 -5.1861 -2.5327 -6.671 -0.8058 -1.6001 -2.3923 -2.547 -4.1036 -2.6431 -0.0269 -0.0015 -0.0541 -0.003 -0.0815 -0.0046 -0.6097 0.8244 -1.2422 1.5957 -1.8764 2.3114Z"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Subtract_2"
                    fill="#62748e"
                    fill-rule="evenodd"
                    d="M8 18.0698C8 9.19906 15.1591 2 24 2c8.8409 0 16 7.19906 16 16.0698 0 5.6599 -2.8585 10.4532 -6.038 14.0416 -3.1865 3.5962 -6.7849 6.0851 -8.4745 7.1563 -0.9129 0.5789 -2.0621 0.5789 -2.975 0 -1.6896 -1.0712 -5.288 -3.5601 -8.4745 -7.1563C10.8585 28.523 8 23.7297 8 18.0698ZM24 24c3.3137 0 6 -2.6863 6 -6s-2.6863 -6 -6 -6 -6 2.6863 -6 6 2.6863 6 6 6Z"
                    clip-rule="evenodd"
                    stroke-width="1"
                  ></path>
                </g>
              </svg>
              {/* Information */}
              <div className="grow h-full flex flex-col gap-1">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  Address
                </p>
                <p className="font-semibold text-lg grow">
                  {userDetailObj?.address.address},{" "}
                  {userDetailObj?.address.city}, {userDetailObj?.address.state},{" "}
                  {userDetailObj?.address.stateCode},{" "}
                  {userDetailObj?.address.postalCode},{" "}
                  {userDetailObj?.address.country}
                </p>
              </div>
            </div>
            {/* Divider */}
            <hr className="h-[0.1px] text-slate-200" />
            {/* Latitude & Longitude */}
            <div className="flex rounded-b-lg">
              {/* Latitude */}
              <div className="w-full px-5 py-2 rounded-bl-lg flex flex-col gap-3 border-r border-slate-200">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  Latitude
                </p>
                <p className="font-medium">
                  {userDetailObj?.address.coordinates.lat}
                </p>
              </div>
              {/* Longitude */}
              <div className="w-full px-5 py-2 rounded-br-lg flex flex-col gap-3">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  Longitude
                </p>
                <p className="font-medium">
                  {userDetailObj?.address.coordinates.lng}
                </p>
              </div>
            </div>
          </div>
          {/* Bank */}
          <div className="flex flex-col rounded-lg border bg-white border-slate-200 shadow-md">
            {/* Header */}
            <div className="flex gap-6 px-4 py-4 rounded-t-lg items-center">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="h-full p-1 border border-slate-200 rounded-lg text-slate-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M21.5 9v10M5.5 9v10m-3-10v10m16-10v10M2 21h20M0 23.5h24M12 11h-1a1 1 0 0 0-1 1v.375a1 1 0 0 0 .72.96l2.56.747a1 1 0 0 1 .72.96V16a1 1 0 0 1-1 1h-1m0-6h1a1 1 0 0 1 1 1v.5M12 11V9m0 8h-1a1 1 0 0 1-1-1v-.5m2 1.5v2M23.5 6.25V7H.5v-.75C5.5 4.5 8.5 3 11.75.5h.5C15.5 3 18.5 4.5 23.5 6.25Z"
                  stroke-width="1"
                />
              </svg>
              {/* Information */}
              <p className="font-semibold text-3xl grow text-slate-500 underline underline-offset-4 decoration-slate-400">
                Bank
              </p>
            </div>
            {/* Bank Information List */}
            <div className="px-4 flex flex-col rounded-b-lg">
              {/* Card Number */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Card Number</p>
                <p className="w-full py-2 text-sm">729387293847293847</p>
              </div>
              {/* Card Type */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Card Type</p>
                <p className="w-full py-2 text-sm">ELO</p>
              </div>
              {/* Card Currency */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Currency</p>
                <p className="w-full py-2 text-sm">CNY</p>
              </div>
              {/* Expiration Date */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">
                  Expiration Date
                </p>
                <p className="w-full py-2 text-sm">03/26</p>
              </div>
              {/* IBAN */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">IBAN</p>
                <p className="w-full py-2 text-sm">87IU8302HSDH3489</p>
              </div>
            </div>
          </div>
          {/* Company */}
          <div className="bg-white flex flex-col rounded-lg border border-slate-200 shadow-md">
            {/* Header */}
            <div className="flex gap-6 px-4 py-4 rounded-t-lg items-center">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="h-full p-1 border border-slate-200 rounded-lg text-slate-500"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M16.25 3h-8.5c-.69 0-1.25.56-1.25 1.25V21h11V4.25c0-.69-.56-1.25-1.25-1.25M11 17H9.5v-2.5H11zm0-4H9.5v-2.5H11zm0-4H9.5V6.5H11zm3.5 8H13v-2.5h1.5zm0-4H13v-2.5h1.5zm0-4H13V6.5h1.5zm4.75 1H19v11h3v-8.25A2.755 2.755 0 0 0 19.25 10m-14.5 0H5v11H2v-8.25A2.755 2.755 0 0 1 4.75 10"
                  clip-rule="evenodd"
                  stroke-width="1"
                />
              </svg>
              {/* Information */}
              <div className="grow h-full flex flex-col gap-1">
                <p className="text-sm text-slate-500 underline underline-offset-4 decoration-slate-400">
                  Company
                </p>
                <p className="font-semibold text-3xl grow">
                  {userDetailObj?.company.name}
                </p>
              </div>
            </div>
            {/* Company Information List */}
            <div className="px-4 flex flex-col rounded-b-lg">
              {/* Department */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Department</p>
                <p className="w-full py-2 text-sm">
                  {userDetailObj?.company.department}
                </p>
              </div>
              {/* Designation */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Designation</p>
                <p className="w-full py-2 text-sm">
                  {userDetailObj?.company.department}
                </p>
              </div>
              {/* Address */}
              <div className="flex border-b-[0.1px] border-slate-200">
                <p className="w-2/6 py-2 text-sm text-slate-600">Address</p>
                <p className="w-full py-2 text-sm">
                  {userDetailObj?.company.address.address},{" "}
                  {userDetailObj?.company.address.city},{" "}
                  {userDetailObj?.company.address.state},{" "}
                  {userDetailObj?.company.address.stateCode},{" "}
                  {userDetailObj?.company.address.postalCode},
                </p>
              </div>
              {/* Latitude & Longitute */}
              <div className="flex border-b-[0.1px] border-slate-200">
                {/* Latitude */}
                <div className="w-full py-2 flex flex-col gap-2 border-r border-slate-200">
                  <p className="text-xs text-slate-600 underline underline-offset-2 decoration-slate-400">
                    Latitude
                  </p>
                  <p className="text-sm">-129.798</p>
                </div>
                {/* Longitute */}
                <div className="w-full py-2 flex flex-col gap-2 px-4">
                  <p className="text-xs text-slate-600 underline underline-offset-2 decoration-slate-400">
                    Longitute
                  </p>
                  <p className="text-sm">-129.798</p>
                </div>
                {/* <p className="w-2/6 py-2 text-sm text-slate-600">IBAN</p>
                <p className="w-full py-2 text-sm">87IU8302HSDH3489</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
