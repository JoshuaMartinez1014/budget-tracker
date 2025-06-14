function Home(props) {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold text-green-400">Budget Tracker</h1>
        <div className="text-white mt-4 font-medium">
          Hello {props.name}, your current budget is ${props.budgetAmount}
        </div>
      </div>
    </>
  );
}

export default Home;
