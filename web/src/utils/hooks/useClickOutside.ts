export const useClickOutside = (
  ref: any,
  ref2: any,
  target: EventTarget | null,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    (ref?.current && !ref.current.contains(target)) ||
    (ref2?.current && !ref2.current.contains(target))
  ) {
    setOpen(false);
  }
};
