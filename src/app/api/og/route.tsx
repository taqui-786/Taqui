import { ImageResponse } from "next/og";
import { portfolioConfig } from "@/lib/portfolioConfig";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { origin } = new URL(request.url);
    const imageUrl = `${origin}/myImage.png`;

    // Pattern color: Light gray for subtle texture
    const patternColor = "rgba(0, 0, 0, 0.04)";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            // Simulating the lining-tilt-background: repeating diagonal lines
            backgroundImage: `repeating-linear-gradient(315deg, ${patternColor} 0px, ${patternColor} 1px, transparent 1px, transparent 10px)`,
            fontFamily: '"IBM Plex Sans", sans-serif', // Using a font that likely matches or looks clean
          }}
        >
          {/* Main Content Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.85)", // Glassy white card
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "24px",
              padding: "60px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              maxWidth: "960px",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                display: "flex",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(0, 0, 0, 0.05)",
                marginRight: "56px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                minWidth: "220px",
                minHeight: "220px",
              }}
            >
              <img
                src={imageUrl}
                alt="Profile"
                width={220}
                height={220}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Text Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  color: "#18181b", // zinc-900
                  marginBottom: "12px",
                  letterSpacing: "-1.5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {portfolioConfig.name}
              </div>
              <div
                style={{
                  fontSize: 32,
                  color: "#52525b", // zinc-600
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                {portfolioConfig.title}
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#71717a", // zinc-500
                  marginBottom: "24px",
                  lineHeight: "1.5",
                  maxWidth: "550px",
                }}
              >
                {portfolioConfig.description}
              </div>

              {/* Location / Extra Info (Optional, adds detail) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#a1a1aa",
                  fontSize: 20,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {portfolioConfig.location}
              </div>
            </div>
          </div>

          {/* Decorative corner accents (Optional, matching technical vibe) */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 40,
              width: 20,
              height: 20,
              borderTop: "2px solid #e4e4e7",
              borderLeft: "2px solid #e4e4e7",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: 40,
              width: 20,
              height: 20,
              borderBottom: "2px solid #e4e4e7",
              borderRight: "2px solid #e4e4e7",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
