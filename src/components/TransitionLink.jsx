import { Link, NavLink } from "react-router-dom";

// Simple re-exports — no View Transition API wrapping,
// which was causing the "same page flash" glitch on navigation.
export function TransitionLink(props) {
  return <Link {...props} />;
}

export function TransitionNavLink(props) {
  return <NavLink {...props} />;
}
