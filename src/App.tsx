import NewForm from "./pages/form";
export default function App() {
  return (
    <div className="antialiased  dark:bg-gray-900 h-screen bg-[url('./assets/images/bg3.jpg')]">
      <div
        className={`w-full h-full flex flex-col items-center justify-center`}
      >
        <NewForm />
      </div>
    </div>
  );
}

// bg-gradient-to-r from-white to-amber-100
