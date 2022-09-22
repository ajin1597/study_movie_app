import { IoGameControllerOutline } from "react-icons/io5";
import { SiMakerbot } from "react-icons/si";

function KakaoTalk() {
  return (
    <div className="bg-white text-black border-4 border-gray-400 p-5  dark:bg-gray-700 dark:text-white max-w-[600px] ">
      {/* {전체 인터페이스} */}
      <div className="flex justify-between font-bold text-xl ">
        <div>더보기</div>

        <div className="flex justify-between pr-4 w-[170px] items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        {/* {검색, 음악 등 아이콘} */}
      </div>
      {/* {최상단} */}

      <div className="flex justify-between pt-5 pb-4 items-center">
        <div className="flex justify-between pl-4">
          <img
            className="rounded-[50%] w-[50px] "
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z"
          ></img>
          <div className="flex-col pl-3">
            <div>ajin1597</div>
            <div>ajin1597@naver.com</div>
          </div>
        </div>
        <div className="flex justify-between pr-8 text-lg pl-4 items-center w-[180px] ">
          <div className="border-2 flex items-center rounded-2xl px-[10px]">
            MY
          </div>
          <div className="border-2 flex items-center rounded-2xl px-[10px]">
            🐱‍🐉10
          </div>
        </div>
      </div>
      {/* {프로필} */}

      <div className=" bg-gray-300 Class rounded-md h-10 dark:text-black">
        <div className="flex justify-between items-center pl-2 pt-[6px]">
          <div className="border-2 rounded-full bg-white px-4">pay 0원</div>
          <div className="flex justify-between pr-[20px] w-[110px]">
            <div>송금</div>
            <div>결제</div>
          </div>
        </div>
      </div>
      {/* {pay} */}
      <div>
        <div className="flex justify-around pt-5">
          {/* {이모티콘 아이콘} */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <div>이모티콘</div>
          </div>
          {/* {이모티콘 아이콘} */}
          {/* {페이지 아이콘} */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
            <div>페이지</div>
          </div>
          {/* {페이지 아이콘} */}
          {/* {게임 아이콘} */}
          <div>
            <div className="text-5xl">
              <IoGameControllerOutline />
            </div>
            <div>Game</div>
          </div>
          {/* {게임 아이콘} */}
          {/* {메이커스 아이콘} */}
          <div>
            <div className="text-5xl">
              <SiMakerbot />
            </div>
            <div>메이커스</div>
          </div>
          {/* {메이커스 아이콘} */}
        </div>
        {/* {선택_1층} */}
        <div className="flex justify-around pt-5">
          {/* {이모티콘 아이콘} */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <div>이모티콘</div>
          </div>
          {/* {이모티콘 아이콘} */}
          {/* {페이지 아이콘} */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
            <div>페이지</div>
          </div>
          {/* {페이지 아이콘} */}
          {/* {게임 아이콘} */}
          <div>
            <div className="text-5xl">
              <IoGameControllerOutline />
            </div>
            <div>Game</div>
          </div>
          {/* {게임 아이콘} */}
          {/* {메이커스 아이콘} */}
          <div>
            <div className="text-5xl">
              <SiMakerbot />
            </div>
            <div>메이커스</div>
          </div>
          {/* {메이커스 아이콘} */}
        </div>
        {/* {선택_2층} */}
      </div>
      {/* {선택} */}
      <div className="flex justify-around pt-6 border-t-gray-500 ">
        <div className="flex ">
          <div className="">⭐메일</div>
          <div
            className="color-while  {
            black
          }"
          >
            만들기
          </div>
        </div>
        <div className="flex">
          <div>⭐캘린더</div>
          <div>일정 만들기</div>
        </div>
      </div>
      {/* {만들기} */}

      <div className="pt-7 relative text-white">
        <div className="static">
          <img
            src="data:image/jpeg;base64,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"
            className="w-full "
          ></img>
        </div>

        <div className="color-white absolute left-5 bottom-5">
          오버솔 블랙라벨 스니커츠 7CM
        </div>
        <div className="color-white absolute right-3 top-8 bg-gray-500 rounded-full w-[30px] flex justify-center">
          AD
        </div>
        <div className="color-white absolute top-0 w-full h-full flex justify-center items-center">
          박종훈
        </div>
        <a
          href="https://naver.com"
          className="color-white absolute bottom-3 right-3 border-2 rounded-full w-[80px] flex justify-center "
        >
          알아보기
        </a>
      </div>
      {/* { 광고} */}
    </div>
  );
}

export default KakaoTalk;
