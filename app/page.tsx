export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-full min-h-[85vh] flex-col overflow-hidden sm:p-4 sm:rounded-3xl lg:min-h-[90vh]">
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
        <div className="relative z-10 flex flex-col gap-y-10 mt-10">
          <h1 className="text-5xl lg:text-7xl text-[#192E54] tracking-tight lg:tracking-tighter font-medium max-w-4xl mx-auto text-center">
            Full-service provider in drug testing
          </h1>
          <p className="text-center text-lg text-[#192E54] max-w-2xl mx-auto">
            Together we create healthy, profitable companies by detecting,
            preventing and treating drug problems in your workplace.
          </p>
        </div>
      </div>
    </>
  );
}
