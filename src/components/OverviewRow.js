const OverviewRow = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <h3
        className="text-cyan-light-1 font-semibold text-sm
                after:content-['/person'] after:block
                after:text-cyan-dark-1 after:text-sm"
      >
        {label}
      </h3>
      <h1 className="text-[2.5rem] font-bold text-cyan">${value}</h1>
    </div>
  );
};

export default OverviewRow;
