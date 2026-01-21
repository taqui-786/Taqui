import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { origin } = new URL(request.url);
    const avatarUrl = `${origin}/taqui_full_img.png`;

    // Theme colors (dark mode)
    const bgColor = "#ffffff";
    const titleColor = "#333";
    const subtleColor = "#a0a0a0";
    const badgeColor = "#2db6f0";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: bgColor,
            padding: "60px",
          }}
        >
          {/* Left side - Avatar */}
 

          {/* Right side - Name and Bio */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            {/* Name with verification badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "58px",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: titleColor,
                }}
              >
                Md Taqui Imam
              </span>
              {/* Verification badge */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                style={{ marginLeft: "16px" }}
              >
                <path
                  fill={badgeColor}
                  d="M15.616 3.268L12 .186L8.383 3.268l-4.737.378l-.378 4.737L.186 12l3.082 3.617l.378 4.737l4.737.378l3.616 3.082l3.617-3.082l4.737-.378l.378-4.737L23.813 12l-3.082-3.617l-.378-4.737zM11 16.414L6.585 12L8 10.586l3 3l5.5-5.5L17.914 9.5z"
                />
              </svg>
            </div>

            {/* Title/Role */}
            <div
              style={{
                fontSize: "26px",
                fontWeight: 500,
                color: badgeColor,
                marginBottom: "16px",
              }}
            >
              Full Stack Developer
            </div>

            {/* Bio */}
            <div
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: subtleColor,
                lineHeight: 1.5,
                marginBottom: "24px",
              }}
            >
              Passionate Software Developer crafting modern web experiences with
              clean code and creative solutions.
            </div>

            {/* Tech stack tags */}
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  fontSize: "15px",
                  color: subtleColor,
                  marginRight: "10px",
                }}
              >
                React
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  fontSize: "15px",
                  color: subtleColor,
                  marginRight: "10px",
                }}
              >
                Next.js
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  fontSize: "15px",
                  color: subtleColor,
                  marginRight: "10px",
                }}
              >
                TypeScript
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  fontSize: "15px",
                  color: subtleColor,
                }}
              >
                Node.js
              </div>
            </div>

            {/* Website URL */}
            <div
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              taqui.vercel.app
            </div>
          </div>
                   <div
            style={{
              display: "flex",
              marginLeft: "60px",
            }}
          >
            <img
              src={avatarUrl}
              width={320}
              height={520}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error(`OG Image Error: ${message}`);
    return new Response(`Failed to generate the image: ${message}`, {
      status: 500,
    });
  }
}
