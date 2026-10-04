export default function Button({ className, onClick, disabled, children }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

// console.log("loading:", isLoading);
// console.log("usersObject:", usersObject);
// console.log("searchParams Object:", searchParams);
// if (searchParams) {
//   console.log("searchParams Object (skip):", searchParams.get("skip"));
// }

// if (searchParams) {
//   console.log("Remove the 'skip' query-param");
//   const { skip, ...data } = searchParams;
//   setSearchParams(data);
// }
