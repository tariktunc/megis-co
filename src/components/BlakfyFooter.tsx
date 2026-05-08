import Script from "next/script";

export function BlakfyFooter() {
  return (
    <>
      <div id="blakfy-kunye-mount" />
      <Script
        src="https://cdn.jsdelivr.net/gh/tariktunc/blakfy-footer@main/dist/blakfy.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
