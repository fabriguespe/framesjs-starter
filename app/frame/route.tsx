/* eslint-disable react/jsx-key */
import { fetchNft } from "@/lib/airstack";
import { createFrames, Button } from "frames.js/next";
import { checksumAddress, isAddress } from "viem";

export const frames = createFrames({
  basePath: "/frame",
});

//deploy test
const handleRequest = frames(async () => {
  return {
    image: `${
      process.env.BASE_URL || "http://localhost:3001"
    }/api/image?a=${"0x6cfb9280767a3596ee6af887d900014a755ffc75"}&c=${"2"}`,
    imageOptions: {
      aspectRatio: "1:1",
      width: 500,
      height: 500,
    },
    accepts: [
      {
        id: "farcaster",
        version: "vNext",
      },
      {
        id: "xmtp",
        version: "vNext",
      },
    ],
    buttons: [
      <Button action="link" target={`https://github.com/xmtp/awesome-xmtp`}>
        Awesome XMTP
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
