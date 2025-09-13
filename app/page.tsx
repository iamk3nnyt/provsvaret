export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-full min-h-[85vh] flex-col items-center justify-center overflow-hidden sm:p-4 sm:rounded-3xl lg:min-h-[90vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            backgroundImage: "url('./hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
}
