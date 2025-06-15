function Home(props) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold text-primary">Budget Tracker</h1>
        <div className="text-white mt-4 font-medium">
          Hello your current budget is: $1000
        </div>
      </div>
    </>
  );
}

export default Home;
