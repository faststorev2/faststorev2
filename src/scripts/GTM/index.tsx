export default function GTM() {
  return (
    <script
      type="text/partytown"
      dangerouslySetInnerHTML={{
        // Add your script here and remove the console.log example
        __html: "console.log('🚀 Hello from a third-party script!')",
      }}
    />
  );
}

