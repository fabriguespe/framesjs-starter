import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import fs from "fs";
import { join } from "path";

const interFontPath = join(process.cwd(), "Inter-SemiBold.ttf");
const interFontData = fs.readFileSync(interFontPath);

export async function GET(req: NextRequest) {
  //sdsd
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "black",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          width: "100%",
          position: "relative",
          padding: "4px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
          }}
        >
          Gm
        </div>
      </div>
    ),
    {
      width: 400,
      height: 400,
      fonts: [
        {
          data: interFontData,
          name: "Inter-SemiBold.ttf",
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
