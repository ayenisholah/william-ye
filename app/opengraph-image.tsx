import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "William Ye - Senior AI Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0B0D",
          color: "#ECEEF1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          fontFamily: "Arial"
        }}
      >
        <div style={{ color: "#B8F24E", fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>Senior AI Engineer</div>
        <div style={{ marginTop: 28, fontSize: 112, fontWeight: 700, letterSpacing: -6 }}>William Ye</div>
        <div style={{ marginTop: 32, maxWidth: 780, color: "#9BA1A9", fontSize: 34, lineHeight: 1.3 }}>
          Production AI systems, NLP pipelines, MLOps platforms, and measurable engineering impact.
        </div>
      </div>
    ),
    size
  );
}
