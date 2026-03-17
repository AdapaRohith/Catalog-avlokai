import { flushSync } from "react-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";

function shouldHandleClick(event) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function navigateWithTransition(navigate, to, options) {
  if (typeof document !== "undefined" && document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to, options);
      });
    });
    return;
  }

  navigate(to, options);
}

export function TransitionLink({ to, replace, state, onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);

    if (!shouldHandleClick(event)) {
      return;
    }

    event.preventDefault();
    navigateWithTransition(navigate, to, { replace, state });
  };

  return <Link to={to} replace={replace} state={state} onClick={handleClick} {...props} />;
}

export function TransitionNavLink({ to, replace, state, onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);

    if (!shouldHandleClick(event)) {
      return;
    }

    event.preventDefault();
    navigateWithTransition(navigate, to, { replace, state });
  };

  return <NavLink to={to} replace={replace} state={state} onClick={handleClick} {...props} />;
}
