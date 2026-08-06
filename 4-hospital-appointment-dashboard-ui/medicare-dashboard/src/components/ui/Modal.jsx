export default function Modal({ className, ref, children }) {
  return (
    <dialog className={className} ref={ref}>
      {children}
    </dialog>
  );
}
