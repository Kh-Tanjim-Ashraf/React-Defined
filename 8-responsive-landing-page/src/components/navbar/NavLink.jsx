export default function NavLink({ linkName, ...props }) {
  return <a {...props}>{linkName}</a>;
}
